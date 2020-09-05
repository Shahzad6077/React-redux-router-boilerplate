import React from "react";

const Main = (props) => {
  const { children } = props;
  return (
    <div>
      <h1>Header</h1>
      <h3>Sidebar</h3>
      {children}
      <h3>Footer</h3>
    </div>
  );
};

export default Main;
