import React from "react";

const Amount = ({ isHidden, children }) => {
  return (
    <span style={{ visibility: isHidden, marginLeft: "10px" }}>{children}</span>
  );
};

export default Amount;
