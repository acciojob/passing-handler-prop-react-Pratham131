import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
    const [selectionStyle, setSelectionStyle] = useState({ background: "" });
  
    const updateSelectionStyle = (nextBackground) => {
      setSelectionStyle(nextBackground);
    }
  
    return (
      <div
        data-testid="selection-box"
        className="fix-box"
        onClick={() => applyColor(updateSelectionStyle)}
        style={{ background: selectionStyle.background }}
      >
        {selectionStyle.background}
      </div>
    );
  }
  

export default Selection;

