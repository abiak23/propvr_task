import React from "react";
import "./style.css";
function Button({ name, color, text = "black", fnCall }) {
  return (
    <button
      className="button"
      style={{
        backgroundColor: color,
        color: text,
        borderWidth: 0,
        padding: "10px 25px",
        fontSize: 12,
        fontWeight: "500",
      }}
      onClick={() => fnCall()}
    >
      {name}
    </button>
  );
}

export default Button;
