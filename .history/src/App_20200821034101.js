import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import SearchPage from "./pages/searchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return 
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route path="/search">
          <SearchPage/>
        </Route>
      </Switch>
    </Router>
  ;
}

export default App;
