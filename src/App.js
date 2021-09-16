import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Services from "./components/pages/Services";
import Reserve from "./components/pages/Reserve";
import Restaurants from "./components/pages/Restaurants";
import Hotel from "./components/pages/Hotel";
import Attraction from "./components/pages/Attraction";
import NYC from "./components/pages/NYC";
import Barcelona from "./components/pages/Barcelona";
import Rome from "./components/pages/Rome";
import Istanbul from "./components/pages/Istanbul";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
        <Route path="/reserve" component={Reserve} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/attraction" component={Attraction} />
        <Route path="/nyc" component={NYC} />
        <Route path="/barcelona" component={Barcelona} />
        <Route path="/rome" component={Rome} />
        <Route path="/istanbul" component={Istanbul} />
      </Switch>
    </Router>
  );
}

export default App;
