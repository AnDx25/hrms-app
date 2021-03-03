import React,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Home from './screens/home/Home'
import Recuirtment from './screens/recuirtment/Recuirtment'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/dashboard'
import Login from './screens/login/Login';
function Controlller() {
  // const [isLoggedIn,setIsLoggedIn]=useState(false)
  
  return (
    
      
      <Router>
        {/* {console.log("Check",isLoggedIn)} */}
      <Switch>
      
      <Route path="/login" render={(props)=><Login {...props}  />}/>
        <DashboardLayout>
          <Route exact path="/" render={(props)=><Home {...props}/>}/>
          <Route path="/recuirtment" render={(props)=><Recuirtment {...props}/>}/>
        </DashboardLayout>
        </Switch>
      </Router>
    
  );
}

export default Controlller;
