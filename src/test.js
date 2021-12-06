import React from 'react';
import { Link } from 'react-router-dom';

import useFirebase from '../hooks/useFirebase';


import NavigationBar from '../pages/NavigationBar/NavigationBar';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useFirebase({});
    return (
        <div>
        <NavigationBar></NavigationBar>
        <div className="login-form">
           
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to this website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button onClick={signInUsingGoogle}
                    className="btn-regular"
                   
                >Google Sign In</button>
            </div>
        </div>
        </div>
    
    );
};

export default Login;