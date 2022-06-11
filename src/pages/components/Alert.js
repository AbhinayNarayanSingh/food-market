import React from "react";

const Alert = ({ type, msg }) => {
  return (
    <div className={`Alert ${type && type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
