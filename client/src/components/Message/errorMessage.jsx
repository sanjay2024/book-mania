import React from "react";

const errorMessage = ({ error }) => {
  return (
    <div class="alert alert-warning" role="alert">
      {error}
    </div>
  );
};

export default errorMessage;
