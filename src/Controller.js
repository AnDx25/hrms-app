import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import DashboardLayout from './components/dashboardLayout/dashboard'
function Controlller() {
  return (
    <div>
      <Router>
        <DashboardLayout>
        <Switch>
          <Route/>
        </Switch>
        </DashboardLayout>
      </Router>
    </div>
  );
}

export default Controlller;
