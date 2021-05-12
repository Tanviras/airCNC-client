import React, { createContext } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import SearchResult from './pages/SearchResult';
import NotFound from './pages/NotFound';
import HomeDetails from './pages/HomeDetails';
import Booking from './pages/Booking';
import { useState } from 'react';
import HostingHome from './pages/HostingHome/HostingHome';
import HostingExperience from './pages/HostingExperience/HostingExperience';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute';

export const SearchContext = createContext();
export const UserContext = createContext();

function App() {
  const [searchData, setSearchData] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <SearchContext.Provider value={{searchData, setSearchData}}>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route path="/search-result">
            <SearchResult/>
          </Route>

          <Route path="/home/:key">
            <HomeDetails/>
          </Route>

          <Route path="/booking">
            <Booking/>
          </Route>

          <PrivateRoute path="/host-home">
            <HostingHome></HostingHome>
          </PrivateRoute>

          <PrivateRoute path="/host-experience">
            <HostingExperience></HostingExperience>
          </PrivateRoute>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

      </Switch>

    </Router>
    </UserContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
