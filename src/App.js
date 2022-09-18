
import './App.css';
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup'


function App() {
  const [api, setapi] = useState('');
  useEffect(()=>{
    axios.get('http://localhost:5000/api').then((response)=>{
      setapi(response.data)
      console.log(response.data);
    })
    .catch((err)=>console.log(err))
  },[])
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='Signup' element={<Signup/>}/>

      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
