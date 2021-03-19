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

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/rideDetail/:id">
          <RideDetail></RideDetail>
        </Route>
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
  );
}

export default App;
