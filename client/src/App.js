import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";

function App() {
    return (
      <Router>
        <div>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
            </div>
          </Router>

    );
  }

export default App;