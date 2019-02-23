import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import gridRow from "../images/gridrow.jpg";
import gridCol from "../images/gridcol.png";
import gridCol2 from "../images/gridcol2.jpg";
import './about.scss'


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
                <div className="grid">
                    <div className="gridRowFirst">
                        <div className="gridColFirst">
                            <img src={gridCol} alt={"Nuotrauka"}/>
                        </div>
                    </div>
                    <div className="gridRowSecond">
                        <div className="gridCol">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the 
                                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                                including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="gridColTop">
                            <img src={gridRow} alt={"Nuotrauka"}/>
                        </div>
                        <div className="gridColBottom">
                            <img src={gridCol2} alt={"Nuotrauka"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
