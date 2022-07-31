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
import CreateGallery from './pages/CreateGallery';
import Galleries from './pages/Galleries';
import Gallery from './pages/Gallery';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    isAuthenticated && dispatch(getActiveUser());
  }, []);

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

          <Route exact path="/"> 
            <Redirect to="/galleries"/>
          </Route>


          <Route exact path="/galleries">
            <Galleries/>
          </Route>

          <PrivateRoute exact path="/my-galleries">
            <Galleries/>
          </PrivateRoute>

          <PrivateRoute exact path="/create">
            <CreateGallery/>
          </PrivateRoute>

          <PrivateRoute exact path="/edit-gallery/:id">
            <CreateGallery/>
          </PrivateRoute>

          <Route path="/authors/:id">
            <Galleries />
          </Route>

          <Route path="/galleries/:id">
            <Gallery />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
