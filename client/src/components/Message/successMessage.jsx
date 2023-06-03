import React from "react";

const successMessage = ({ msg }) => {
  return (
    <div className="alert alert-success" role="alert">
      {msg}
    </div>
  );
};

export default successMessage;
