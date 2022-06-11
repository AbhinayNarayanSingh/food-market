import React from "react";

const PageHeading = ({ h2, p }) => {
  return (
    <div className="page-heading">
      <h2>{h2}</h2>
      <p>{p}</p>
    </div>
  );
};

export default PageHeading;
