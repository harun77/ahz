import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/dashboard');

        if (!captchaValue) {
            alert('Please verify that you are not a robot!');
            return;
        }

        console.log('Logging in with:', email, password, captchaValue);
    };


    return (
        <div className="login-box">
            <p>LOGIN FORM</p>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <input
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>

                <div className="input-group">
                    <ReCAPTCHA
                        sitekey="YOUR_SITE_KEY_HERE"
                        onChange={value => setCaptchaValue(value)}
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;