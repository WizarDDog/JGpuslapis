import React, { Component } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import './contacts.scss'


class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div >
                <Header/>
                    <div className='contacts-wrapper'>
                        <div>Google maps</div>
                        <div>something on right</div>
                        <div>something on bottom</div>
                    </div>
            </div>
        );
    }
}

export default Contacts;
