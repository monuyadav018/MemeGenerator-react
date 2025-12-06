import React, {  useState ,useRef } from "react";
// import React, { createRef, useState ,useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
// import { exportComponentAsJPEG } from "react-component-export-image";
import { toPng } from "html-to-image";

const EditPage = ()=>{
    const [params] = useSearchParams();
    const [count ,setCount] = useState(0);
    const addText =()=>{
            setCount(count+1);
    }
    // const memeRef= createRef();
    const componentRef = useRef(null);
     const downloadImage = () => {
       if (componentRef.current === null) return;

      toPng(componentRef.current)
         .then((dataUrl) => {
           const link = document.createElement("a");
           link.download = "my-component.png";
           link.href = dataUrl;
           link.click();
         })
         .catch((err) => console.log(err));
     };

    return (
      <div>
        <div
         
          style={{
            padding: "20px",
            background: "lightyellow",
            borderRadius: "10px",
            display: "inline-block",
            width:'500px',
            height:'500px'
          }}
          ref={componentRef}
        >
          <img
            src={params.get("url")}
            style={{ width: "300px", height: "400px" }}
            alt=""
          />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>

        <Button style={{ margin: "10px" }} onClick={addText}>
          AddText{" "}
        </Button>
        <Button
          variant="success"
          // onClick={() => exportComponentAsJPEG(memeRef)}
          onClick={downloadImage}
        >
          Save
        </Button>
      </div>
    );
};
export default EditPage;














