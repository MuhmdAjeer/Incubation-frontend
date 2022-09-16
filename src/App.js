
import './App.css';
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react';
import Login from './pages/Login';

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
      <Login/>
    </Fragment>
  );
}

export default App;
