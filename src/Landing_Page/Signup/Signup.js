import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils';
import './signup.css';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name.trim() || !email.trim() || !password.trim()) {
      return handleError('Name, email and password are required');
    }

    try {
      const url = 'https://authzerodha.onrender.com/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate('/login'), 1000);
      } else if (error?.details) {
        handleError(error.details[0].message);
      } else {
        handleError(message || 'Something went wrong');
      }
    } catch (err) {
      handleError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="signup-container">
      <div className="row w-100 g-0">

        {/* Left image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
          
        <img src="media/image/homeHero.png" alt="Test" />// ✅ Must be in public/media/image/
           // alt="Signup Visual"
           // className="img-fluid signup-image"
         
        </div>

        {/* Right form */}
        <div className="col-md-6 d-flex flex-column justify-content-center px-5">
          <div className="signup-card p-4 shadow-sm rounded-3">
            <h2 className="mb-3 fw-bold text-primary">Create Account</h2>
            <p className="text-muted mb-4">Join us and track your application</p>

            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  value={signupInfo.name}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={signupInfo.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={signupInfo.password}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2 rounded-3">
                Signup
              </button>
            </form>

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none fw-semibold">
                Login
              </Link>
            </p>
          </div>
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        </div>

      </div>
    </div>
  );
}

export default Signup;
