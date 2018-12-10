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
                <MenuItem id="menuItem" eventKey="1">New Projects</MenuItem>
                <MenuItem id="menuItem" eventKey="2">Other Projects</MenuItem>
                <MenuItem id="menuItem" eventKey="3">2015-2018</MenuItem>
                <MenuItem divider />
                <MenuItem id="menuItem" eventKey="4">Working Now</MenuItem>
            </DropdownButton>
        );
    }

    render() {
        return (
                <div className="App-header">
                    <img id="logo" src={VUlogo} alt={"logo"} />
                    <div id="contacts">Contacts</div>
                    <div id="about">About</div>
                    <div id='projects' >{this.renderDropdownButton()}</div>
                    <Link to="/team" id="team">Team</Link>
                    <Link to="/" id="home">Home</Link>


                </div>


        );
    }
}

export default Header;