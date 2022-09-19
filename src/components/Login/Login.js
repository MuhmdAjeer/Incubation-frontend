import React, { Fragment ,useContext} from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {AuthContext} from '../../Contexts/AuthContext'

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
  if(values.password.length < 8) errors.password = 'Minimum of 8 characters required'
    return errors;
};
const Login = () => {
  const {login,error} = useContext(AuthContext)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      login(values)
    }
  });
  return (
    <Fragment>
      <div className="login-box sm:w-4/12 w-4/5">
        <div className="login-header">
          <h1
            className="login-header font-extrabold"
            style={{ fontSize: "24px" }}
          >
            User Login
          </h1>
          <h6>Hey,Enter your details to get sign in to your account</h6>
        </div>

        <form className="input-box p-2" onSubmit={formik.handleSubmit}>
          {/* Email input  */}
          {error && <p className="text-red-600" >{error}</p>}
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

          <Button type="submit" sx={{ mt: 2 }} variant="contained">
            Login
          </Button>
        </form>
        <p onClick={()=>navigate('/Signup')}  className="text-center hover:text-black hover:cursor-pointer text-gray-700 pt-2">
          Dont have an account? Create one
        </p>
      </div>
    </Fragment>
  );
};

export default Login;
