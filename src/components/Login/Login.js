import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';
const Login = () => {
    const { signInUsingGoogle } = useAuth()
    const location = useLocation();
    console.log(location)
    return (
        <div className="login-form" >
            <div>
                <h2>Login</h2>
                <form onSubmit="">

                    <input type="text" placeholder="your email" /> <br />
                    <input type="password" placeholder="your password" /> <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john? <Link to="/register">Register:Create a Account.</Link></p>


                <div>----or--------</div>
                <button className="btn-regular" onClick={signInUsingGoogle}>Google sign In</button>

            </div>
        </div>
    );
};

export default Login;