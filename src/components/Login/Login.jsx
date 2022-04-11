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
      <section class="account-section login">
        <div class="container-fluid">
          <div class="row d-flex justify-content-end">
            <div class="col-md-8 pt-4">
              <a href="/" class="logo">
                <img src="assets/img/logo-login.svg" alt="" />
              </a>
              <div class="form-account pt-5">
                <h2>Log in</h2>
                <p></p>
                <form>
                  <div class="form-group">
                    <label>Phone Number</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="">
                          <img src="assets/img/flag-my.png" alt="" />
                          +62
                        </span>
                      </div>
                      <input
                        type="number"
                        class="form-control br-0"
                        placeholder="Enter your phone number"
                        aria-label="Username"
                        aria-describedby=""
                        style={{ borderLeft: "none" }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <a href="/#" class="btn btn-secondary-purple d-block">
                      Login
                    </a>
                    <p class="text-center">or login with</p>
                    <div class="d-flex">
                      <a
                        href="/"
                        class="btn btn-outline-grey"
                        onClick={handleLogin}
                      >
                        <img src="assets/img/ic-email.svg" alt="" /> Email
                      </a>
                      <a href="/" class="btn btn-outline-grey">
                        <img src="assets/img/ic-google.svg" alt="" /> Google
                      </a>
                    </div>
                    <p class="text-center">
                      By tapping "login" you agree to our{" "}
                      <a href="/">Terms of service</a> &{" "}
                      <a href="/">Privacy Policy</a>
                    </p>
                    <a href="/#" class="btn btn-primary-custom d-block">
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
