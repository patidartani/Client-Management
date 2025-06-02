import React from "react";
import "../login/Login.css";
import Header from "../../component/header/Header";
import Footer from "../footer/Footer";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="Login-main">
        <div className="login-content">
          <div className="login-form">
            <h5>SignUp</h5>
            <form>
              <div className="ipt">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="ipt">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="ipt">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Your Password" />
              </div>
              <div className="login-btn">
                <button>Signup</button>
              </div>
              <div className="last">
                <span>
                 Already have an account? <a href="/login">Login</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
