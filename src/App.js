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
export const destinationContext1 = createContext();
export const destinationContext2 = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [userDestination1,setUserDestination1] = useState({});
  const [userDestination2,setUserDestination2] = useState({});
  console.log(userDestination1);
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
    <destinationContext1.Provider value = {[userDestination1,setUserDestination1]}>
    <destinationContext2.Provider value = {[userDestination2,setUserDestination2]}>
     
     
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
        <PrivateRoute path="/price/:id">
          <PriceDetail></PriceDetail>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>

    </Router>
    </destinationContext2.Provider>
    </destinationContext1.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
