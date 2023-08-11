
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Login from '../Components/user/Login';
import SignUp from '../Components/user/SignUp';

const LoginPanel = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleSignUp = () => {
    setIsLogin(false);
  };
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className='Login-container'>
      <button className='Jump-back' onClick={handleBackClick}><FontAwesomeIcon icon={faX} size="xl" /></button>
      <div className="Login-panel">
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
      </div>
    </div>
  )
}

export default LoginPanel;