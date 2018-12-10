import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Team from "./pages/team";
import Home from './pages/homepage'
import Projects from "./pages/projects";

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
          </Switch>
          </BrowserRouter>

      </div>
    );
  }
}

export default App;
