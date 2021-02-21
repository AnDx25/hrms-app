import logo from './logo.svg';
import './App.css';
import Home from './screens/home/Home'
import Recuirtment from './screens/recuirtment/Recuirtment'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/dashboard'
function Controlller() {
  return (
    <div>
      <Router>
        <DashboardLayout>
        <Switch>
          <Route exact path="/" render={(props)=><Home {...props}/>}/>
          <Route path="/recuirtment" render={(props)=><Recuirtment {...props}/>}/>
        </Switch>
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default Controlller;
