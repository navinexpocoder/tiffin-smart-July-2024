import React from "react";

function AuthFormButton({ btnType, onClickFunc, btnClass, btnName }) {
  return (
    <>
      <button className={`${btnClass}`} type={btnType} onClick={onClickFunc}>
        {btnName}
      </button>
    </>
  );
}

export default AuthFormButton;
