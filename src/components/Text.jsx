import React, { useState } from "react";
// import Draggable from "react-draggable";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("double click to edit");

  return (
    
    <div>
        {editMode ? (<input value ={val} onDoubleClick={(e)=>setEditMode(false)} onChange={(e)=>setVal(e.target.value)} />) : (<h1 onDoubleClick={e=>setEditMode(true)}>{val}</h1>)}
    
    </div>
  );
};

export default Text;
