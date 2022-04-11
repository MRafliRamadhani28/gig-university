import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function LoginbyEmail() {
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
                <a href="/" class="link-back">
                  <img src="assets/img/ic-back.svg" alt="" /> Back
                </a>
                <h2>Login by email</h2>
                <p>Fill the form below to login by email</p>
                <form>
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      name=""
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <div class="input-group">
                      <input
                        type="password"
                        class="form-control border-end-0"
                        placeholder="Enter your password"
                        aria-label="Username"
                        aria-describedby=""
                      />
                      <div class="input-group-append border-start-0">
                        <span class="input-group-text" id="">
                          <i class="fa fa-eye-slash eye" aria-hidden="true">
                            <FontAwesomeIcon icon={["fas", "fa-eye-slash"]} />
                          </i>
                        </span>
                      </div>
                    </div>
                    <p class="text-end">
                      <a href="/">Forgot Password?</a>
                    </p>
                  </div>
                  <div class="form-group">
                    <a href="/#" class="btn btn-secondary-purple d-block">
                      Login
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
export default LoginbyEmail;
