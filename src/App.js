import React, { useState, useEffect } from "react";
import Header from "./component/header";

import Grid from "./component/grid";
import Footer from "./component/footer";
import Carousal from "./component/carousal";
import Home from "./component/home";
import About from "./component/about";
import Profile from "./component/profile";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    {/* //HashRouter */}
    <Header />
    <Switch>
    <Route exact path="/">
    
            <Home />
            </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
    
    
    </Switch>
    <Footer />
    
    </BrowserRouter>
    
  );
}
