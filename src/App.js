import React, { Component } from 'react';
import './App.css';
import VUlogo from './images/VUlogo.png'
import Body from './body/body'

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
        <div className="App-header">
            <img id="logo" src={VUlogo} alt={"logo"} />
            <div id="about">About</div>
            <div id="contacts">Contacts</div>
            <div id="projects">Projects</div>
        </div>
              <Body />
          <div className="footer">
              <p>2018 VU Chemijos Fakultetas</p>
          </div>
      </div>
    );
  }
}

export default App;
