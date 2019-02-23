import React, { Component } from 'react';

import Body from '../body/body'
import Header from '../header/header'
import Footer from "../footer/footer";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName: "header",
        }
    }


    render() {
        return (
                    <div>
                        < Header />
                        < Body />
                        {/* < Footer /> */}
                    </div>
        );
    }
}

export default Home;
