import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import MovieDetail from "./components/views/MovieDetail/MovieDetail";
import FavoritePage from "./components/views/FavoritePage/FavoritePage";
import Navbar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";

import Auth from "./hoc/auth";
import Favorite from "./components/views/MovieDetail/Section/Favorite";
function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)}></Route>
          <Route exact path="/favorite" component={Auth(Favorite, true)} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
