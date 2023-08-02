
import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarCodeScanner = ()=>{

    const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("No result");

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }

    return(
        <>
               <BarcodeScannerComponent
        width={320}
        height={240}
        torch={false}
        onUpdate={(err, result) => {
          if (result) setResult(result.text);
          else setResult("Not Found");
        }}
      />
        <p>{result}</p>
        </>
    )
}

export default BarCodeScanner;