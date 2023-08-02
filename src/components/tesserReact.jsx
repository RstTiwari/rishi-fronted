import { useState } from "react";
import { createWorker  } from "tesseract.js"

const TesseReact=async({image})=>{
    // alert(image)
    const [ocr, setOcr] = useState("Recognizing...");
//   const worker = createWorker({
//     logger: (m) => console.log(m),
//   });

//   await worker.load();
//     await worker.loadLanguage("eng");
//     await worker.initialize("eng");
//     const {
//       data: { text },
//     } = await worker.recognize(image);
//     // } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
//     console.log(text);
//     setOcr(text);

    return(
        // <p>{ocr}</p>
        // <p>Result : {image}</p>
        ''
    )
}

export default TesseReact