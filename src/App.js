import BarCodeScanner from "./components/barcodScanner";
import QRReader from "./components/qrReader";
import WebcamComponent from "./components/reactWeb";

function App() {
  return (
    <>
      <p>Hello Worldsss</p>

      <div>
        {/* < QRReader /> */}
        <BarCodeScanner />
        {/* < WebcamComponent /> */}
      </div>
    </>
  );
}

export default App;
