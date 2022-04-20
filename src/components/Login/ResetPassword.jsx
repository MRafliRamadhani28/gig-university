import React, { useState } from "react";

function ResetPassword() {
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [check, setCheck] = useState({
    active: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      password: e.target.value,
    });
  };
  const handleValidation = () => {
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    if (uppercaseRegExp.test(input.password)) {
      setCheck({
        active: true,
      });
    }
    if (lowercaseRegExp.test(input.password)) {
      check.active = true;
    }
    if (digitsRegExp.test(input.password)) {
      check.active = true;
    }
    if (specialCharRegExp.test(input.password)) {
      check.active = true;
    }
    if (minLengthRegExp.test(input.password)) {
      check.active = true;
    }
    // const passwordInputValue = e.target.value.trim();
    // const passwordInputFieldName = e.target.vaule;
    // const NewPasswordInput = {
    //   ...input,
    //   [passwordInputFieldName]: passwordInputValue,
    // };
    // setInput(NewPasswordInput);
  };

  // const handleValidation = (e) => {
  //   const passwordInputValue = input.password;
  //   const passwordInputConfirm = input.confirmPassword;

  //   const uppercaseRegExp = /(?=.*?[A-Z])/;
  //   const lowercaseRegExp = /(?=.*?[a-z])/;
  //   const digitsRegExp = /(?=.*?[0-9])/;
  //   const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
  //   const minLengthRegExp = /.{8,}/;

  //   const passwordLength = passwordInputValue.length;
  //   const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
  //   const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
  //   const digitsPassword = digitsRegExp.test(passwordInputValue);
  //   const specialCharPassword = specialCharRegExp.test(passwordInputValue);
  //   const minLengthPassword = minLengthRegExp.test(passwordInputValue);

  //   if (passwordLength === 0) {
  //     errMsg = "Password is empty";
  //   } else if (uppercasePassword) {
  //     errMsg = "At least one Uppercase";
  //   } else if (lowercasePassword) {
  //     errMsg = "At least one Lowercase";
  //   } else if (digitsPassword) {
  //     errMsg = "At least one digit";
  //   } else if (specialCharPassword) {
  //     errMsg = "At least one Special Characters";
  //   } else if (minLengthPassword) {
  //     errMsg = "At least minumum 8 characters";
  //   } else {
  //     errMsg = "";
  //   }
  // };
  return (
    <div className="">
      <section className="account-section forgot">
        <div className="container-fluid">
          <div className="row d-flex justify-content-end">
            <div className="col-md-8 pt-4">
              <a href="/" className="logo">
                <img src="assets/img/logo-login.svg" alt="" />
              </a>
              <div className="form-account pt-5">
                <a href="/" className="link-back">
                  <img src="assets/img/ic-back.svg" alt="" /> Back
                </a>
                <h2>Change Password</h2>
                <p>Please fill out the form below to set your new password.</p>
                <form>
                  <div className="form-group">
                    <label>New Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control border-end-0"
                        placeholder="Enter your password"
                        aria-label="Username"
                        aria-describedby=""
                        onChange={handleChange}
                        onKeyUp={handleValidation}
                      />
                      <div className="input-group-append border-start-0">
                        <span className="input-group-text" id="">
                          <i
                            className="fa fa-eye-slash eye"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="password-checker">
                      <div className="row">
                        <div className="col-4">
                          <div className={check ? "item active" : "item"}>
                            <span className="icon"></span>
                            <span className="text">Uppercase</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className={check ? "item active" : "item"}>
                            <span className="icon"></span>
                            <span className="text">Min. 8 Characters</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className={check ? "item active" : "item"}>
                            <span className="icon"></span>
                            <span className="text">Special Characters</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className={check ? "item active" : "item"}>
                            <span className="icon"></span>
                            <span className="text">Lowercase</span>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className={check ? "item active" : "item"}>
                            <span className="icon"></span>
                            <span className="text">Number</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Confirmation New Password</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control border-end-0"
                        placeholder="Enter your password"
                        aria-label="Username"
                        aria-describedby=""
                      />
                      <div className="input-group-append border-start-0">
                        <span className="input-group-text" id="">
                          <i
                            className="fa fa-eye-slash eye"
                            aria-hidden="true"
                          ></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <a href="/#" className="btn btn-secondary-purple d-block">
                      Change Password
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ResetPassword;
