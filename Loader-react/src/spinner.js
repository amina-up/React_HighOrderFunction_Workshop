import React from "react";

//HOC high order Component
//definition
function FromSpinner(WrappedComponent) {
  function Loading({ isLoading }) {
    return isLoading ? <div className="loader"></div> : <WrappedComponent />;
  }
  return Loading;
}
export default FromSpinner;
