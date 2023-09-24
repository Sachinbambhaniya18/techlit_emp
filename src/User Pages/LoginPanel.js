
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Login from '../Components/user/Login';
import SignUp from '../Components/user/SignUp';
import { motion as m } from 'framer-motion';
import { Logo } from '../Components/svg icons/logo';

const dropIn = {
  hidden: {
    y: "5vh",
    // opacity: 0
  },
  visible: {
    y: "0vh",
    // opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 1000
    }
  },
  exit: {
    y: "-5vh",
    // opacity: 0
  }
}
const LoginPanel = ({ onClose, title = "Login - TechLit Emporium" }) => {
  const [loginValidation, setloginValidation] = useState("");

  const handleLogin = () => {
    setloginValidation("Login");
  };

  const handleSignUp = () => {
    setloginValidation("Sign Up");
  };

  useEffect(()=>{
    return () =>{
      setloginValidation("Login")
    }
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    return () => {
      document.title = originalTitle;
    };
  }, [title])
  return (
    <div className='Login-holder'>
      <div className="Login-container" onClick={onClose}></div>
      <m.button
        className='Jump-back' onClick={onClose}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover={{
          rotate: 90
        }}
      ><Icon icon={faXmark} size="2xl" /></m.button>
      <m.div
        className="Login-panel"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="Info">
          <div className="LoginOpt">
            <button className="User" onClick={handleLogin}>
              Login
            </button>
            <p className="Sign-in-caption" onClick={handleLogin}>Get access to your Cart, Recommendations and more...</p>
          </div>
          <div className="SignUp">
            <button className="User" onClick={handleSignUp}>
              Sign Up
            </button>
            <p className="Sign-in-caption" onClick={handleSignUp}>Looks like you're new here!<br /></p>
          </div>
        </div>
        <div className="Credentials">
          <div className="Logo-holder">
            <div className='Login-logo'>
              <Logo />
            </div>
          </div>
          {loginValidation === "Login" ? <Login /> : <SignUp />}
        </div>
      </m.div>
    </div>
  )
}

export default LoginPanel;