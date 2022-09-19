import React, { Fragment,useContext } from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom' 
import "./Signup.css";
import axios from '../../constants/axios';
import { AuthContext } from "../../Contexts/AuthContext";


const validate = (values) => {
  const errors = {};
  if (!values.email) errors.email = "Required";
  if (!values.password) errors.password = "Required";
  if (!values.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ){
    errors.email = 'Invalid email'
  }
  if(!values.name) errors.name = 'Required'
  if(values.password.length < 8) errors.password = 'Minimum of 8 characters required'
  if(values.confirmPassword === '') errors.confirmPassword = 'Re-enter the password'
  if(values.password !== values.confirmPassword) errors.confirmPassword = 'Passwords must be same'
    return errors;
};
const Signup = () => {
  const {signup,error} = useContext(AuthContext)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name : "",
      email: "",
      password: "",
      confirmPassword:""
    },
    validate,
    onSubmit: (values) => {
      signup(values)
    },
  });
  return (
    <Fragment>
      <div className="login-box sm:w-4/12 w-4/5">
        <div className="login-header">
          <h1
            className="login-header font-extrabold"
            style={{ fontSize: "24px" }}
          >
            User Signup
          </h1>
          <h6>Hey,Create an account and get signed in</h6>
        </div>

        <form className="input-box p-2" onSubmit={formik.handleSubmit}>
        {error && <p className="text-red-600" >{error}</p>}
        {formik.errors.name && formik.touched.name ? (
            <TextField
              sx={{ marginTop: 2 }}
              
              id="name"
              name="name"
              label="Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              error
              helperText={formik.errors.name}
              variant="standard"
            />
          ) : (
            <TextField
              sx={{ marginTop: 2 }}
             
              id="name"
              name="name"
              label="Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="standard"
            />
          )}


          {/* Email input  */}
          {formik.errors.email && formik.touched.email ? (
            <TextField
              sx={{ marginTop: 2 }}
              
              id="email"
              name="email"
              label="Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              error
              helperText={formik.errors.email}
              variant="standard"
            />
          ) : (
            <TextField
              sx={{ marginTop: 2 }}
             
              id="email"
              name="email"
              label="Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="standard"
            />
          )}

          {/* Password input */}
          {formik.errors.password && formik.touched.password ? (
            <TextField
              sx={{ marginTop: 2 }}
              type="password"
              id="password"
              name="password"
              label="Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              error
              helperText={formik.errors.password}
              variant="standard"
            />
          ) : (
            <TextField
              sx={{ marginTop: 2 }}
              type="password"
              id="password"
              name="password"
              label="Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              variant="standard"
            />
          )}

          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <TextField
              sx={{ marginTop: 2 }}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              error
              helperText={formik.errors.confirmPassword}
              variant="standard"
            />
          ) : (
            <TextField
              sx={{ marginTop: 2 }}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="confirmPassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              variant="standard"
            />
          )}

          <Button type="submit" sx={{ mt: 2 }} variant="contained">
            Login
          </Button>
        </form>
        <p onClick={()=>navigate('/')} className="text-center hover:text-black hover:cursor-pointer text-gray-700 pt-2">
          Already have an account? Login
        </p>
      </div>
    </Fragment>
  );
};

export default Signup;
