import React, { Component } from 'react';
import './header.scss';
import Logo from '../images/Logo/OMRG su tekstu.png'
import {Link} from 'react-router-dom'
import { DropdownItem, ButtonDropdown , DropdownToggle, DropdownMenu} from 'reactstrap'



class Header extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            headerName: "header",
            menu: true,
            dropdownOpen: false,
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
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
            <ButtonDropdown
                key={i}
                toggle={this.toggle}
                isOpen={this.state.dropdownOpen}
                className="buttonDropDown"

            >
                <DropdownToggle id="dropdown">Projects</DropdownToggle>
                <DropdownMenu style={{width: 220, textAlign: 'center', fontSize: '0.8em', backgroundColor: '#DCDCDC'}}>
                    <Link   to="/projects" id="projectLinks">New Projects</Link>
                    <Link   to="/projects" id="projectLinks">Other Projects</Link>
                    <Link   to="/projects" id="projectLinks">2015-2018</Link>
                    <DropdownItem divider />
                    <Link  to="/projects/working" id="projectLinks">Working Now</Link>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }

    render() {
        return (
                <div className="App-header">
                    <img id="logo" src={Logo} alt={"logo"} />
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