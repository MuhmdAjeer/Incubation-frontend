import React, { Fragment } from 'react';
import Loginn from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';

const Login = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <Loginn></Loginn>
        </Fragment>
    );
}

export default Login;
