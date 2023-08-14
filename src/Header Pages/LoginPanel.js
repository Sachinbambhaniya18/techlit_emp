
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark} from '@fortawesome/free-solid-svg-icons';
import Login from '../Components/user/Login';
import SignUp from '../Components/user/SignUp';
import { motion } from 'framer-motion';

const LoginPanel = ({onClose}) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleSignUp = () => {
    setIsLogin(false);
  };

  return (
    <div className='Login-container'>
      <motion.button 
      className='Jump-back' onClick={onClose}
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      whileHover={{
         rotate: 90
      }}
      ><FontAwesomeIcon icon={faXmark} size="2xl" /></motion.button>
      <motion.div 
      className="Login-panel"
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
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
      </motion.div>
    </div>
  )
}

export default LoginPanel;