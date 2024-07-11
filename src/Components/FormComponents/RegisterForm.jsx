import React, { useState } from "react";
import { AuthFormButton, AuthFormInput } from "../TinyComp";

function RegisterForm() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    fullname: "",
    password: "",
    mobileNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handeSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form
        onSubmit={handeSubmit}
        className="bg-slate-600 h-[500px] w-[300px] "
      >
        <AuthFormInput
          inputType={"text"}
          inputPlaceholder={"Enter Email"}
          onChangeFunc={handleChange}
          inputName={"email"}
          labelClass={""}
          inputClass={""}
          labelName={"Email"}
        />
        <AuthFormInput
          inputType={"text"}
          inputPlaceholder={"Enter Username"}
          onChangeFunc={handleChange}
          inputName={"username"}
          labelClass={""}
          inputClass={""}
          labelName={"Username"}
        />
        <AuthFormInput
          inputType={"text"}
          inputPlaceholder={"Enter Full Name"}
          onChangeFunc={handleChange}
          inputName={"fullname"}
          labelClass={""}
          inputClass={""}
          labelName={"FullName"}
        />
        <AuthFormInput
          inputType={"text"}
          inputPlaceholder={"Enter Mo Number"}
          onChangeFunc={handleChange}
          inputName={"mobileNumber"}
          labelClass={""}
          inputClass={""}
          labelName={"Mobile Number"}
        />
        <AuthFormInput
          inputType={"password"}
          inputPlaceholder={"Enter Password"}
          onChangeFunc={handleChange}
          inputName={"password"}
          labelClass={""}
          inputClass={""}
          labelName={"Password"}
        />
        <br />
        <AuthFormButton
          btnType={"submit"}
          btnName={"LogIn"}
          onClickFunc={null}
          btnClass={"bg-red-800"}
        />
      </form>
    </>
  );
}

export default RegisterForm;
