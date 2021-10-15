import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SavingsPage from "./pages/SavingsPage";
import SpendingPage from "./pages/SpendingPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import { MenuBar } from "./components/MenuBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/savings" component={SavingsPage} />
        <Route path="/spending" component={SpendingPage} />
        <Route path="/investing" component={InvestmentsPage} />
      </Switch>
      <MenuBar />
    </Router>
  );
}

export default App;
