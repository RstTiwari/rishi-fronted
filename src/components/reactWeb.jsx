import { useState } from "react";
import Webcam from "react-webcam";
import TesseReact from "./tesserReact";

const WebcamComponent = () => {
  const [result, setResult] = useState("No result");

  const videoConstraints = {
    // width: 600,
    // height: 150,
    facingMode:{ exact : "environment" } ,
  };
  return (
    <>
      <Webcam
        audio={false}
        height={300}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot();
              setResult(imageSrc);
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>

      <img src={result} alt="" />
      { result!=="No result" && <TesseReact image={result} /> }
      
      <p></p>
    </>
  );
};

export default WebcamComponent;
