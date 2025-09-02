import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils.js';
import './login.css';

function Login() {
    const [loginInfo,setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `https://authzerodha.onrender.com/auth/login`;

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);

                // Navigate without refreshing page
                setTimeout(() => {
                   navigate('/home');   // 👈 change route here
                }, 1000);

            } else if (error) {
                const details = error?.details[0]?.message;
                handleError(details);
            } else {
                handleError(message);
            }
        } catch (err) {
            handleError(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="login-container container-fluid vh-100 d-flex align-items-center ">
            <div className="row w-100">
                
                {/* Left Side Image */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img 
                        src="/media/image/console.png" 
                        alt="Login Visual" 
                        className="img-fluid"
                        style={{ maxHeight: "500px" }}
                    />
                </div>

                {/* Right Side Form */}
                <div className="col-md-6 d-flex flex-column justify-content-center px-5">
                    <div className="login-card bg-white">
                        <h2 className="fw-bold mb-3">Welcome Back</h2>
                        <p className="text-muted mb-4">Login to continue</p>

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your email"
                                    value={loginInfo.email}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your password"
                                    value={loginInfo.password}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 py-2 rounded-3">
                                Login
                            </button>
                        </form>

                        <p className="mt-3 text-center">
                            Don’t have an account?{" "}
                            <Link to="/signup" className="text-decoration-none fw-semibold">Signup</Link>
                        </p>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default Login;
