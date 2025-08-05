import React from "react";

const AuthedLayout = ({ children }) => {
  return <div className="bg-red-500">{children}</div>;
};

export default AuthedLayout;
