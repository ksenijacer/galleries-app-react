import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUser } from "./store/auth/slice";
import { selectIsAuthenticated, selectActiveUser } from "./store/auth/selectors";
import NavBar from "./components/NavBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const activeUser = useSelector(selectActiveUser);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getActiveUser());
    }
  }, 
  []);

  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <PublicRoute exact path="/register">
            <Register/>
          </PublicRoute>
          <PublicRoute exact path="/login">
            <Login/>
          </PublicRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
