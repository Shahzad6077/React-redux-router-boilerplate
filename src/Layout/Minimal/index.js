import React from "react";

const Minimal = (props) => {
  const { children } = props;
  return (
    <div>
      <h1>Header</h1>
      {children}
    </div>
  );
};

export default Minimal;
