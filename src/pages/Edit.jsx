import React, { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";


const EditPage = ()=>{
    const [params] = useSearchParams();
    // console.log(params.get("url"));
    const [count ,setCount] = useState(0);
    const addText =()=>{
            setCount(count+1);
    }
    const memeRef= createRef();

    return(
      <div>
         <div className="mb-5 mt-5" ref={memeRef}>
        <img  src={params.get("url")} style={{width:"250px"}} alt=""/>
        {Array(count).fill(0).map((e)=>(<Text/>))}
        </div>
       
        <Button  style={{margin:"10px"}} onClick={addText}>AddText </Button>
        <Button  variant="success" onClick={()=> exportComponentAsJPEG(memeRef)}>Save</Button>
 </div>
      
    )
};
export default EditPage;














