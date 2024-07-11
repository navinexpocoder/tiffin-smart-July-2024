import React from "react";

function AuthFormInput({
  inputType,
  inputPlaceholder,
  onChangeFunc,
  inputName,
  labelName,
  labelClass,
  inputClass,
}) {
  return (
    <>
      <span>
        <label className={labelClass} htmlFor={inputName}>
          {labelName}
        </label>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          onChange={onChangeFunc}
          className={` h-10 w-[300px] ${inputClass}`}
          name={inputName}
          id={inputName}
        />
      </span>
    </>
  );
}

export default AuthFormInput;
