import React, { Component } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import "./projects.css"

import Project1 from "./images/project.jpg"
import Project2 from "./images/project1.jpg"


class Projects extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
        this.state = {
            scroll: false,
            url: true
        }
    }

    handleScroll(){
        if(window.location.href === "http://localhost:3000/projects/working" && this.state.url){
            console.log("ok")
            this.myRef.current.scrollIntoView({behavior: 'smooth' })
            this.setState({url: false})
        }
    }

    componentDidMount(){
        this.handleScroll()
    }

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div id="project1">
                        <div id="h2a">
                            <h2 >What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        </div>
                            <img id="projectImage1" src={Project1} alt={"Logo"}/>
                        <div id="p1">
                             <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div  id="project1">
                        <div id="h2a">
                            <h2 >What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        </div>
                        <img id="projectImage1" src={Project2} alt={"Logo"}/>
                        <div id="p1">
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div id="project1" ref={this.myRef}>
                        <div  id="h2a" >
                            <h2 >What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        </div>
                        <img id="projectImage1" src={Project1} alt={"Logo"}/>
                        <div id="p1">
                            <p>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap
                                into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Projects;

