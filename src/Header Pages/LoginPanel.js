
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Login from '../Components/user/Login';
import SignUp from '../Components/user/SignUp';
import { motion as m } from 'framer-motion';
import { Logo } from '../Components/svg icons/logo';
import { Link } from 'react-router-dom';
const dropIn = {
  hidden: {
    y: "5vh",
    opacity: 0
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      type: "spring",
      // duration: 0.3,
      damping: 30,
      stiffness: 1000
    }
  },
  exit: {
    y: "-5vh",
    opacity: 0
  }
}
const LoginPanel = ({ onClose, title = "Login - TechLit Emporium" }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleSignUp = () => {
    setIsLoggedIn(!isLoggedIn);
  };
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
      ><FontAwesomeIcon icon={faXmark} size="2xl" /></m.button>
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
            <Link className='Login-logo'>
              <Logo />
            </Link>
          </div>
          {isLoggedIn ? <Login /> : <SignUp />}
        </div>
      </m.div>
    </div>
  )
}

export default LoginPanel;