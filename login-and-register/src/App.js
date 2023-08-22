
import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";





function App() {
  const[user,setLoginUser]=useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={user && user._id ? <Homepage setLoginUser={setLoginUser}/>:<Navigate replace to={"/login"}/>}/>
          <Route exact path='/login' element={ <Login setLoginUser={setLoginUser}/>}/>
          <Route exact path='/register' element={ <Register/>}/>
          

        </Routes>


      </Router>

      
     
      
    </div>
  );
}

export default App;
