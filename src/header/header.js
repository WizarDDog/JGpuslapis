import React, { Component } from 'react';
import './header.css';
import VUlogo from '../images/VUlogo.png'
import {Link} from 'react-router-dom'
import { MenuItem, DropdownButton } from 'react-bootstrap'



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName: "header",
            menu: true,
        }
    }

    showMenu(){
        this.menu()
    }

    noMenu(){
        this.setState({menu: !this.state.menu})
    }

    menu(){
        if(this.state.menu === true){
            return <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
            </div>
        }
        if(this.state.menu === false){
           return <div>{}</div>
        }
    }

    renderDropdownButton(title, i) {
        return (
            <DropdownButton className="dropdown"
                title={'Projects'}
                key={i}
                id={`dropdown-basic-${i}`}
            >
                <Link   to="/projects" id="projectLinks">New Projects</Link>
                <Link   to="/projects" id="projectLinks">Other Projects</Link>
                <Link   to="/projects" id="projectLinks">2015-2018</Link>
                <MenuItem divider />
                <Link   to="/projects/working" id="projectLinks">Working Now</Link>
            </DropdownButton>
        );
    }

    render() {
        return (
                <div className="App-header">
                    <img id="logo" src={VUlogo} alt={"logo"} />
                    <Link to="/contacts" id="contacts">Contacts</Link>
                    <Link to="/about" id="about">About</Link>
                    <div id='projects' >{this.renderDropdownButton()}</div>
                    <Link to="/team" id="team">Team</Link>
                    <Link to="/" id="home">Home</Link>


                </div>


        );
    }
}

export default Header;