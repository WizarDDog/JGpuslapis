import React, { Component } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import './team.css'
import portrait from './images/portrait.jpg'
import portrait1 from './images/portrait2.jpg'
import portrait2 from './images/portrait3.jpg'
import portrait3 from './images/portrait4.jpg'



class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div >
                <Header/>
                <div className="allGallery">
                <div className="gallery">
                    <button disabled  >
                        <img src={portrait} alt="Cinque Terre" width="300" height="200"/>
                    </button>
                    <div className="desc">Add a description of the image here</div>
                </div>
                    <div className="gallery">
                         <button disabled>
                            <img src={portrait1} alt="Forest" width="300" height="200"/>
                         </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                        <button disabled>
                            <img src={portrait2} alt="Northern Lights" width="300" height="200"/>
                        </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                        <button disabled>
                            <img src={portrait3} alt="Mountains" width="300" height="200"/>
                        </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                    <div className="gallery">
                        <button disabled>
                            <img src={portrait} alt="Cinque Terre" width="300" height="200"/>
                        </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>
                    <div className="gallery">
                        <button disabled>
                            <img src={portrait1} alt="Forest" width="300" height="200"/>
                        </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                        <button disabled>
                            <img src={portrait2} alt="Northern Lights" width="300" height="200"/>
                        </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                    <div className="gallery">
                        <button disabled>
                            <img src={portrait3} alt="Mountains" width="300" height="200"/>
                        </button>
                        <div className="desc">Add a description of the image here</div>
                    </div>

                </div>
                <Footer/>
            </div>
        );
    }
}

export default Team;

