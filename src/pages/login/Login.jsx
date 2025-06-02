import React from "react";
import "./Login.css";
import Header from "../../component/header/Header";
import Footer from "../footer/Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="Login-main">
        <div className="login-content">
          <div className="login-form">
            <h5>LogIn</h5>
            <form>
              {/* <div className="ipt">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Enter Your Name" />
              </div> */}
              <div className="ipt">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="ipt">
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Your Password" />
              </div>
              <div className="forget">
                <a href="">Forget Password</a>
              </div>
              <div className="login-btn">
                <button>Login</button>
              </div>
              <div className="last">
                <span>
                  Don't have any account? <a href="/signup">Signup</a>
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

export default Login;
