
import './App.css';
import { Fragment } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='Signup' element={<Signup/>}/>
      </Routes>
        {/* </AuthContext> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
