import React, { Component } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div >
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default About;