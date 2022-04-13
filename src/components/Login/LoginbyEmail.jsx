import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginbyEmail() {
  const navigate = useNavigate();
  const username = "rapli@gmail.com";
  const password = "rapli123";

  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleChangeUser = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      username: e.target.value,
    });
  };
  const handleChangePass = (e) => {
    e.preventDefault();
    setValue({
      ...value,
      password: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    if (value.username === username && value.password === password) {
      navigate("/home");
      alert("Yeayy Anda berhasil login!!!");
    } else {
      navigate("/loginbyemail");
      alert("Username dan Kata sandi Anda salah!!!");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleForgot = (e) => {
    e.preventDefault();
    navigate("/forgot");
  };

  return (
    <div className="">
      <section className="account-section login">
        <div className="container-fluid">
          <div className="row d-flex justify-content-end">
            <div className="col-md-8 pt-4">
              <a href="/" className="logo">
                <img src="assets/img/logo-login.svg" alt="" />
              </a>
              <div className="form-account pt-5">
                <a href="/" className="link-back" onClick={handleBack}>
                  <img src="assets/img/ic-back.svg" alt="" /> Back
                </a>
                <h2>Login by email</h2>
                <p>Fill the form below to login by email</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name=""
                      placeholder="Enter your email"
                      onChange={handleChangeUser}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <div className="input-group">
                      <input
                        type={show ? "text" : "password"}
                        className="form-control border-end-0"
                        placeholder="Enter your password"
                        aria-label="Username"
                        aria-describedby=""
                        onChange={handleChangePass}
                      />
                      <div className="input-group-append border-start-0">
                        <span className="input-group-text" id="">
                          <i
                            onClick={() => setShow(!show)}
                            style={{ cursor: "pointer" }}
                          >
                            {!show ? (
                              <FontAwesomeIcon icon={["fas", "fa-eye-slash"]} />
                            ) : (
                              <FontAwesomeIcon icon={["fas", "fa-eye"]} />
                            )}
                          </i>
                        </span>
                      </div>
                    </div>
                    <p className="text-end" onClick={handleForgot}>
                      <a href="/">Forgot Password?</a>
                    </p>
                  </div>
                  <div className="form-group">
                    <button
                      href="/#"
                      type="submit"
                      className="btn btn-secondary-purple d-block"
                    >
                      Login
                    </button>
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
export default LoginbyEmail;
