import React, { Fragment } from 'react';
import {Input } from '@mui/material';
import {useFormik} from 'formik'
import './Login.css'
import axios from 'axios';
const validate = (values)=>{
    const errors = {}
    if(!values.email) errors.email = 'required'
    if(!values.password) errors.password ='required'
    return errors
}
const Login = () => {
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit: values =>{
            axios.post('http://localhost:5000/login',values).then((response)=>{
                console.log(response); 
            })
        }
    });
    return (
        <Fragment>
            <div className="login-box sm:w-4/12 w-4/5">
                <div className="login-header">
                <h1 className='login-header font-extrabold' style={{fontSize:'24px'}}>User Login</h1>
                <h6>Hey,Enter your details to get sign in to your account</h6>
                </div>
                    <form className='input-box p-2' onSubmit={formik.handleSubmit} >
                    <label htmlFor="email">Email</label>
                    <Input ></Input>
                    <input className='input rounded' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange}  type="email" name="email" id="email" />
                    {formik.errors.email && formik.touched.email && <p style={{color:'red',margin:0}} >{formik.errors.email}</p>}
                    <label htmlFor="password">Password</label>
                    <input className='input rounded' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" name="password" id="password" />
                    {formik.errors.password && formik.touched.password && <p style={{color:'red',margin:0}} >{formik.errors.password}</p>}
                    <button className='login-btn inline py-2 px-4 rounded hover:bg-green-600 bg-green-700 text-white mx-auto' type='submit'>Login</button>
    
                    </form>
                    <p className='text-center hover:text-black text-gray-700 pt-2'>Dont have an account? Create one</p>

            </div>
        </Fragment>
    );
}

export default Login;
