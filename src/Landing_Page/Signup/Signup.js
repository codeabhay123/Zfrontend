import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../../utils';
import './signup.css';   // 👈 Add CSS file

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

        if (!name || !email || !password) {
            return handleError('Name, email and password are required');
        }
                                
        try {
            const url = `https://authzerodha.onrender.com/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err.message || 'Something went wrong');
        }
    };

    return (
        <div className="signup-container ">
            <div className="row w-100">

                {/* Left side image */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <img src="media/image/homeHero.png" alt="Hero" className="mb-5" />

                </div>

                {/* Right side form */}
                <div className="col-md-6 d-flex flex-column justify-content-center px-5">
                    <div className="signup-card ">
                        <h2 className="mb-3 fw-bold text-primary">Create Account</h2>
                        <p className="text-muted mb-4">Join us and track your application</p>

                        <form onSubmit={handleSignup}>
                            <div className="mb-3">
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your name"
                                    value={signupInfo.name}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your email"
                                    value={signupInfo.email}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your password"
                                    value={signupInfo.password}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 py-2 rounded-3">
                                Signup
                            </button>
                        </form>

                        <p className="mt-3 text-center">
                            Already have an account?{" "}
                            <Link to="/login" className="text-decoration-none fw-semibold">Login</Link>
                        </p>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Signup;
