import { useState } from "react";
import QrReader from "react-qr-scanner";

const QRReader = () => {
  const [delay, setDelay] = useState(1000);
  const [result, setResult] = useState("No result");

  const previewStyle = {
    height: 240,
    width: 320,
  };

  const handleScan = (data) => {
    // alert(JSON.stringify(data));
    // setResult(JSON.stringify(data))
    setResult(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <>
      <QrReader
        delay={false}
        style={previewStyle}
        onError={() => handleError}
        onScan={handleScan}
        constraints={{
          // facingMode: 'environment',
          video: {
            facingMode: "environment",
          },
          audio: false,
        }}
      />

      <p>{result}</p>
    </>
  );
};

export default QRReader;
