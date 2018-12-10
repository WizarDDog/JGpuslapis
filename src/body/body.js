import React, { Component } from 'react';

import './body.css'

import chem1 from '../images/chemistry.gif'
import chem2 from '../images/chemistry2.jpg'
import chem3 from '../images/chemistry1.jpg'


import {library} from '@fortawesome/fontawesome-svg-core'
import {faArrowCircleRight, faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(faArrowCircleRight, faArrowCircleLeft);


class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide: chem1,
            fade: "fade",
        }
    }

    changeSlide1 = () => {
        if(this.state.slide === chem1){
            this.setState({slide: chem2,fade: "fade1"});
        }
        if(this.state.slide === chem2){
            this.setState({slide: chem3,fade: "fade2"});
        }
        if(this.state.slide === chem3){
            this.setState({slide: chem1,fade: "fade"})
        }
    }


    changeSlide0= () =>{
        if(this.state.slide === chem1){
            this.setState({slide: chem3,fade: "fade1"})
        }
        if(this.state.slide === chem2){
            this.setState({slide: chem1,fade: "fade2"})
        }
        if(this.state.slide === chem3){
            this.setState({slide: chem2,fade: "fade0"})
        }
    }

    render(){
        return(
            <div className="body">
                <div id='left' onClick={()=> this.changeSlide0()}><FontAwesomeIcon icon="arrow-circle-left"/>
                </div>
                <div className={this.state.fade} id="slideShow">
                        <img src={this.state.slide} alt={"logo"}/>
                    </div>
                <div id='right' onClick={()=> this.changeSlide1()}><FontAwesomeIcon icon="arrow-circle-right"/>
                </div>
            </div>
        )
    }
}

export default Body;