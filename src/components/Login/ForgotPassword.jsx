import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [send, setSend] = useState("false");
  console.log(send);

  const sett = () => {
    navigate("/forgot");
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (send === "false") {
      navigate("/loginbyemail");
    } else {
      navigate("/login");
    }
  };

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
                <a href="/" className="link-back" onClick={handleBack}>
                  <img src="assets/img/ic-back.svg" alt="" /> Back
                </a>
                <h2>Reset Password</h2>
                <p>
                  We need your email to send you link to reset your password
                </p>

                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name=""
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <a
                      href={sett}
                      className="btn btn-secondary-purple d-block"
                      onClick={() => setSend("true")}
                    >
                      Reset Password
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
export default ForgotPassword;
