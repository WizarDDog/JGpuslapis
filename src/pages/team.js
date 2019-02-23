import React, { Component } from 'react';
import Header from '../header/header'
import './team.scss'
import portrait from './images/portrait.jpg'
import portrait1 from './images/portrait2.jpg'
import portrait2 from './images/portrait3.jpg'
import portrait3 from './images/portrait4.jpg'



class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: [portrait, 
                portrait1, portrait2, portrait3
            ]
        }
    }


    render() {
        const {gallery} = this.state
        return (
            <div class="team">
                <Header/>
                <div className="allGallery">
                {gallery.map((item) => 
                <div style={{'padding-bottom': 50}}>
                <div className="gallery">
                    <button disabled  >
                        <img src={item} alt="Cinque Terre" width="300" height="200"/>
                    </button>
                    <div className="desc">Add a description of the image here</div>
                </div>
                  <div className="descOtherOutside">WWWWWWWWWWWWWWWWWWWWWWW</div>
                  {/* <div className="descOtherHidden">TTTTTTTTTTTTTTTTTTTTT</div> */}
                </div>
                )}
                </div>
            </div>
        );
    }
}

export default Team;

