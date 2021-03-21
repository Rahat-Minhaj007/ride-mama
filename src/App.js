import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import RideDetail from './components/RideDetail/RideDetail';
import PriceDetail from './components/PriceDetail/PriceDetail';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const destinationContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [userDestination,setUserDestination] = useState({});
  console.log(userDestination);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
    <destinationContext.Provider value = {[userDestination,setUserDestination]}>
     
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/rideDetail/:id">
          <RideDetail></RideDetail>
        </PrivateRoute>
        <Route path="/price/:id">
          <PriceDetail></PriceDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>

    </Router>
    </destinationContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
