
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import Login from '../Components/user/Login';
import SignUp from '../Components/user/SignUp';
import { motion as m } from 'framer-motion';

const dropIn = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible:{
    scale: 1,
    opacity: 1,
    transition:{
      duration: 0.3,
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    scale: 0,
    opacity: 0
  }
}
const LoginPanel = ({onClose, title = "Login - TechLit Emporium"}) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSignUp = () => {
    setIsLogin(!isLogin);
  };
  useEffect(()=>{
    document.title = title;
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
            <img src="/assets/images/logo/TechLit_Login.png" alt="logo" className='Login-logo' />
          </div>
          {isLogin ? <Login /> : <SignUp />}
        </div>
      </m.div>
    </div>
  )
}

export default LoginPanel;