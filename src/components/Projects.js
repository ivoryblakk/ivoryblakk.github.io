import React from 'react';
import SIDweb from '../assets/SIDweb.png'
import textEditor from '../assets/textEditor.png'
//import logo from './logo.png'

const Project = () => {
    return (
        <>
        <div  className ='ui raised very padded text container segment'>
            <h2>Projects</h2>
            <div className="ui unstackable items">
                <div className="item">
                    <div className="image">
                    <img alt="camp" src= {SIDweb}/>
                    </div>
                    <div className="content">
                    <a   href="https://sidinc.org" className="header">Science Institute of Discovery</a>
                    <div className="meta">
                        <span>Wordpress</span>
                    </div>
                    <div className="description">
                        <p> This is a simple website created in wordpress with a theme</p>
                    </div>
                    <div className="extra">
                        Additional Details
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                    <img  alt="Sedition Games Text Editor" src={textEditor}/>
                    </div>
                    <div className="content">
                    <a  href="https://sidinc.org" className="header">Dev Tools</a>
                    <div className="meta">
                        <span>Jquery & Jquery UI Application</span>
                    </div>
                    <div className="description">
                        <p>I created a dev tool that assisted in the localization for all games created by Chance Interactive</p>
                    </div>
                    <div className="extra">
                        Additional Details
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                    <img  alt="camp" src= ""/>
                    </div>
                    <div className="content">
                    <a  href="https://sidinc.org" className="header">Music App</a>
                    <div className="meta">
                        <span>React Application</span>
                    </div>
                    <div className="description">
                        <p>This is a application that shows list of songs</p>
                    </div>
                    <div className="extra">
                        Additional Details
                    </div>
                    </div>
                </div>
             </div>
        </div>
        </>
    );
}

export default Project; 