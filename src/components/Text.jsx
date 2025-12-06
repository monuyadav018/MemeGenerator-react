import React, { useState } from "react";
// import Draggable from "react-draggable";
import {motion} from 'framer-motion'

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("double click to edit");

  return (
    <div>
      {editMode ? (
        <input
          value={val}
          onDoubleClick={(e) => setEditMode(false)}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <motion.h1
          drag
          dragMomentum={false}
          onDoubleClick={() => setEditMode(true)}
          style={{ cursor: "grab" }}
        >
          {val}
        </motion.h1>
      )}
    </div>
  );
};

export default Text;
