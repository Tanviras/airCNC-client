// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Experiences from "./Components/Experiences/Experiences";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
          <Home></Home>
          </Route>

          <Route path='/addExperiences'>
          <Experiences></Experiences>
          </Route>


        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
