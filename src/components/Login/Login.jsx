import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/loginbyemail");
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
                <h2>Log in</h2>
                <p></p>
                <form>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                          <img src="assets/img/flag-my.png" alt="" />
                          +62
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control br-0"
                        placeholder="Enter your phone number"
                        aria-label="Username"
                        aria-describedby=""
                        style={{ borderLeft: "none" }}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <a href="/#" className="btn btn-secondary-purple d-block">
                      Login
                    </a>
                    <p className="text-center">or login with</p>
                    <div className="d-flex">
                      <a
                        href="/"
                        className="btn btn-outline-grey"
                        onClick={handleLogin}
                      >
                        <img src="assets/img/ic-email.svg" alt="" /> Email
                      </a>
                      <a href="/" className="btn btn-outline-grey">
                        <img src="assets/img/ic-google.svg" alt="" /> Google
                      </a>
                    </div>
                    <p className="text-center">
                      By tapping "login" you agree to our{" "}
                      <a href="/">Terms of service</a> &{" "}
                      <a href="/">Privacy Policy</a>
                    </p>
                    <a href="/#" className="btn btn-primary-custom d-block">
                      Create an account
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

export default Login;
