import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div class="login-form">
            <div>
                <h2>Create Account</h2>

                <form onSubmit="">

                    <input type="text" placeholder="your email" /> <br />
                    <input type="password" placeholder="your password" /> <br />
                    <input type="password" placeholder=" Re-Enter your password" /> <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login Here</Link></p>


                <div>----or--------</div>
                <button className="btn-regular">Google sign In</button>

            </div>



        </div >
    );
};

export default Register;