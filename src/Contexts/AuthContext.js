import React from 'react';
import { useState } from 'react';
import {createContext} from 'react';
import axios from '../constants/axios';
export const AuthContext = createContext({})
export default function AuthContextProvider({children}) {
    const [authStatus,setAuthStatus] = useState(false)
    const [user,setUser] = useState({})
    const [logout,SetLogout] = useState(true)
    const [error,setError] = useState(null)

    
    const login = ({email,password})=>{
        axios.post('/login',{email,password}).then((response)=>{
          setAuthStatus(true)
          setUser(response.data)
          setError(false)
          localStorage.setItem('user',JSON.stringify(response.data))
        }).catch((err)=>{
          console.log(err.response.data.message);
          setError(err.response.data.message)
        })
    }
    const signup = ({name,email,password})=>{
      axios.post('/signup',{name,email,password}).then((response)=>{
        setAuthStatus(true)
          setUser(response.data)
          setError(false)
          localStorage.setItem('user',JSON.stringify(response.data))
      }).catch((err)=>{
          console.log(err.response.data.message);
          setError(err.response.data.message)
      })
    }
    const values = {
      authStatus,setAuthStatus,
      user,setUser,
      logout,SetLogout,
      login,error,setError,
      signup
    }
  return (
    <AuthContext.Provider value={values} >
        {children}
    </AuthContext.Provider>
  )
}
