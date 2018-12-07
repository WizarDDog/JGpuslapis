import React, { Component } from 'react';
import chemistry from '../images/chemistry.gif'
import './body.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(faArrowCircleRight, faArrowCircleLeft);

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="body">
                <div id='left'><FontAwesomeIcon icon="arrow-circle-left"/></div>
                <img id="img" src={chemistry} alt={chemistry} />
                <div id='right'><FontAwesomeIcon icon="arrow-circle-right"/></div>
            </div>
        )
    }
}

export default Body;