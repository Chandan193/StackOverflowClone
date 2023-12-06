// Auth2.jsx
import React, { useState } from 'react';
import './Auth.css';
// import icon from '../../assets/icon.png';
import AboutAuth from './AboutAuth';

const Auth2 = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <section className='auth-section'>
      {isSignUp && <AboutAuth />}
      <div className='auth-container-2'>
        {/* {!isSignUp && <img src={icon} alt='stack overflow' className='login-logo' />} */}
        <form>
          <label htmlFor='name'>
            <h4>Display Name</h4>
            <input type="text" id='name' name='name' />
          </label>
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              <h4 style={{ color: '#007ac6', fontSize: '13px' }}>forgot password?</h4>
            </div>
            <input type="password" name='password' id='password' />
            <p style={{ color: '#666767', fontSize: 13 }}>Passwords must contain at least eight characters, <br /> including at least 1 letter and 1 number.</p>
          </label>
          <button type='submit' className='auth-btn'>
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
          <label htmlFor="check">
            <input type="checkbox" id='check' />
            <p style={{ color: '#666767', fontSize: 13 }}>
              Opt-in to receive occasional product <br />
              updates, user research invitations, company <br />
              announcements, and digests.
            </p>
          </label>
          {isSignUp && (
            <p style={{ color: '#666767', fontSize: 13 }}>
              By clicking “Sign up”, you agree to our
              <span style={{ color: '#007ac6' }}> terms of <br /> service</span> and acknowledge that you have read and <br /> understand our
              <span style={{ color: '#007ac6' }}> privacy policy </span> and
              <span style={{ color: '#007ac6' }}> code of conduct</span>.
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth2;
