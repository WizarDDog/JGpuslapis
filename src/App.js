import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Team from "./pages/team";
import Home from './pages/homepage'
import Projects from "./pages/projects";
import About from "./pages/about";
import Contacts from "./pages/contacts";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName: "header",
        }
    }


  render() {
    return (
      <div className="App">
          <BrowserRouter>

          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path="/team"  exact component={Team}/>
              <Route path="/projects"  exact component={Projects}/>
              <Route path="/projects/working"  exact component={Projects}/>
              <Route path="/about"  exact component={About}/>
              <Route path="/contacts"  exact component={Contacts}/>
          </Switch>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
