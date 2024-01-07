import React from "react";

const ColorBlock = ({ color }) => {
  let styles = {
    width: "500px",
    height: "500px",
    backgroundColor: color,
  };

  return <div className="colorBlock" style={styles}></div>;
};

export default ColorBlock;
