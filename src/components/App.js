import React from 'react';
//import codeWars from '../apis/codeWars'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import PersonalIntrests from './Personal'
import DonutChart from 'react-d3-donut';
import './App.scss';
import './NavBar.scss';
import NavComponent from './NavBar';


//import  styled , { keyframes } from 'styled-components';
import Competency from './codeWars';
//import { relative } from 'path';
//import { resolve } from 'q';
const Remarkable = require('remarkable');
let md = new Remarkable();
//import { ReactComponent as GeorgePic } from '../assets/georgeClean.png';


class App extends React.Component {
    state = {
        isLoaded: false,
        isKatasLoaded: false,
        codewarsUserData: [{
            count: 20 ,      // Value of the property. Required.
            color: 'green',  // Color code for the pie's color. Required.
            name: ' name' // Optional value. Used to display in the tooltip.
     },
     {
        count: 5 ,      // Value of the property. Required.
        color: 'red',  // Color code for the pie's color. Required.
        name: 'My name' // Optional value. Used to display in the tooltip.
    },
    {
        count: 10 ,      // Value of the property. Required.
        color: '#000000',  // Color code for the pie's color. Required.
        name: ' name' // Optional value. Used to display in the tooltip.
    }],
        completedKatas: "",
        options: [],
        description: [],
        currentKata: "",
        codeWarsDivWidth: {width: 500+ 'px'},
        changeDivColor: this.changeDivColor,
        styleCodeWarsDiv: {backgroudColor: "white"},
        color: 'white',
        currentLanguage: "",
        data:  [{
            count: 20 ,      // Value of the property. Required.
            color: 'white',  // Color code for the pie's color. Required.
            name: ' name' // Optional value. Used to display in the tooltip.
             }],
        loadingGraphStyles: "ui loading segment",
        burgerToggle: this.burgerToggle
       // resizeKataIframe: this.resizeKataIframe
    }

 

    changeDivColor(e){
        let color =  e.currentTarget.id === 'javascript' ? 'rgba(255, 0, 0, 0.2)' : e.currentTarget.id === 'python' ? 'rgba(0, 255, 0, 0.3)' : e.currentTarget.id === 'typescript' ? 'rgba(255,255,204, 0.03)' : 'rgba(255,255,204, 0.2)';
        this.setState({
           color: color,
           currentLanguage:  e.currentTarget.id
        });
        //TODO: MAKE INTO A PROMISE
         setTimeout(() => {
             this.listOfOptions();
         }, 300); 

    }

    listOfOptions () {
        const options = this.state.description.map( (kata,i) => {
            if( kata['completedLanguage'].includes(this.state.currentLanguage)){
                return (<option key = {i} value = {i} >  {kata.name}  </option>);
            } 
            if( this.state.currentLanguage === 'AllLang'){
                return (<option key = {i} value = {i} >  {kata.name}  </option>);
            }
            return null;
        });

         this.setState({ completedKatas: options });

    }

    async componentWillMount (){
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://www.codewars.com/api/v1/users/ivoryblakk',
            targetUrl2 = 'https://www.codewars.com/api/v1/code-challenges/',
            completedKatasUrl = '/code-challenges/completed?page=0',
            textList = [],
            oKatas = [];
        await fetch(proxyUrl + targetUrl + completedKatasUrl)
        .then(res => res.json())
        .then(json => {
            // eslint-disable-next-line
            json.data.map((index,i) => {
                oKatas[i] ={};
                oKatas[i]['slug'] = index.slug;
                oKatas[i]['name'] = index.name;
                oKatas[i]['completedLanguage'] =   index.completedLanguages;

                fetch(proxyUrl + targetUrl2 + index.slug)
                .then(res => res.json())
                .then(json => {
                    oKatas[i]['description'] = json.description;
                });
                textList.push(<option key = {i} value = {i} >  {index.name}  </option>);
            });
       

         //   var KataIframeWidth = document.getElementById('codeWarsDiv').innerWidth;
            this.setState({
                isKatasLoaded: true,
                completedKatas: textList,
                description: oKatas
               // codeWarsDivWidth: KataIframeWidth
            })

        });
        await fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(json => {
            console.log("User Info",json)
             this.setState({
                 isLoaded: true,
                 codewarsUserData: json,
                 loadingGraphStyles: "column"
             })

             this.graphData()
        });
    }

     graphData = () => {
         let data = [];
        for(let key in this.state.codewarsUserData.ranks.languages){
           data.push({
             name: key,
             count:  this.state.codewarsUserData.ranks.languages[key].score ,
             color: this.getRandomColor()
            })
        }
        console.log('data graph', data)
        this.setState({
            data: data
        })
      }

      getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    
    // resizeKataIframe(){
    //     const KataIframe = document.getElementById('kataIframe');
    //     console.log('KataIframe', KataIframe)
    //     //alert();
    //     let KataIframeWidth = document.getElementById('codeWarsDiv').width;
    //     console.log('KataIframe', KataIframe)
    //     KataIframe.style.width = KataIframeWidth + 'px';
    //     console.log('KataIframeWidth', KataIframeWidth)
    //     // this.setState({
    //     //     codeWarsDivWidth:{ width: KataIframeWidth + 'px'}
    //     // })
   
    // }

    onSelectKata = (e) => {
        let id = e.currentTarget.value;
        e.preventDefault();
        let kataString =  this.state.description[id]['description'].indexOf('`') > -1 ? md.render(this.state.description[id]['description']): this.state.description[id]['description'];
 
        this.setState({
         currentKata:  kataString
         });
        //s this.resizeKataIframe()
    }

    render () {

        const styleCodeWarsDiv = {
            background: this.state.color,
            animation: 'changeColor',
            display: 'flex'
          };
        
        const katas = this.state.completedKatas;
        const data = this.state.data
        //const burgerToggle= this.burgerToggle;
        
     return (
    <>
        <NavComponent  burgerToggle = {this.state.burgerToggle}/>
        <div className="ui container" id="header__box">
          
            <div id="header__gradient"/>
           
        </div>
        <div id="welcomeIntro"  >
            <span style = {{fontSize: 'calc( 25px + 4vw)', fontFamily: 'Playball, cursive' }}> <b>George T. Ingram</b></span>
            <br/>
            <br/>
                <ul>
                    <span><i>Front End Developer</i></span>  <br/>
                    <span><i>Software Developer</i> </span>  <br/>
                    <span><i>International Traveler</i></span> <br/>
                    <span><i>Community Activist</i></span> <br/>
                </ul>
            </div> 

        <div id = 'back' >
            <br/>
            <br/>
            <div className="ui container" > 
                <AboutMe/>
            </div>
            <br/>
            <br/>
            
            <div className="ui container" > 
                <Projects  />
            </div>
            <br/>
            <br/>
            <div className="ui container" > 
                <Skills />
            </div>
            
            <br/>
            <br/>
           
            <div id ="codeWarsDiv" className="ui raised padded text segment container" style = {styleCodeWarsDiv} > 
                <div id ="codeWarsKatas"  className ="ui stackable container grid" style = {styleCodeWarsDiv}>
                    <div className = 'two column row'> 
                        <div className= "column">
                        <Competency katas = {katas} isKatasLoaded = {this.state.isKatasLoaded} onSelectKata = {this.onSelectKata} currentKata = {this.state.currentKata}  
                            resizeKataIframe ={this.state.resizeKataIframe} styleCodeWarsDiv ={styleCodeWarsDiv} changeDivColor = {this.state.changeDivColor.bind(this)} 
                            currentLanguage = {this.state.currentLanguage}  listOfOptions = {this.listOfOptions} codewarsUserData = {data} /> 
                        </div>
                        <div id='codewarsD3' className= {this.state.loadingGraphStyles}>
                            { (this.state.data.length !== 1) &&
                                <div style= {{textAlign: 'center'}} >
                                    <h2>Programming languages</h2>
                                <DonutChart
                                    innerRadius={100}
                                    outerRadius={140}
                                    transition={false}
                                    svgClass="CodeWwarsPie"
                                    pieClass="pie"
                                    displayTooltip={true}
                                    strokeWidth={2}
                                    data={this.state.data} />
                                    </div>
                             }
                             <img src="https://www.codewars.com/users/ivoryblakk/badges/large" alt="ivoryblakk codewars"/>
                        </div>
                    </div>
                </div>  
            </div>
            <br/>
            <br/>
            <div className="ui container" > 
                <PersonalIntrests />
            </div>
            <br/>
            <br/>
          
              
           

         <div id='footer' className="ui inverted vertical footer segment form-page" style= {{background: "grey"}}>
            <div className="ui container">
                 George Ingram of A.G.I produciton LLC © 2019
            </div>
        </div>    
        </div>

       
      </>  
     );
    }
}

export default App; 
