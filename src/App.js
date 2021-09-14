import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./components/pages/home";
import Services from "./components/pages/Services";
import Reserve from "./components/pages/Reserve";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
        <Route path="/reserve" component={Reserve} />
      </Switch>
    </Router>
  );
}

export default App;
