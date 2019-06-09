import React from 'react';
// import CodeWarsPieGraph  from './PieGraph';
// import CodeWarsDoughnutGraph  from './PieGraph2';


//import createReactClass from 'create-react-class';

//import { ReactComponent as JavaScriptLogo } from '../assets/JavaScript_logo.svg';

const Competency = (props) => {
    const { katas, changeDivColor , currentKata, onSelectKata} = props;


        return (
            <>
            <div id='codewars' >
                <h2> Completed Katas from Code Wars </h2>

                <span><input type ='radio' name="lang" id='AllLang' onChange = {(e) => changeDivColor(e)} /> All Lang </span>
                <span><input type ='radio' name="lang" id='javascript'  onChange = { (e) => changeDivColor(e)} />Javascript </span>
                <span><input type ='radio'  name="lang" id='python'  onChange = { (e) => changeDivColor(e)} />Python   </span>
               <span> <input type ='radio' name="lang" id ='typescript'  onChange = { (e) => changeDivColor(e)} />Typescript </span>
                
                <select  id="search-select" onChange={ onSelectKata} style ={{width: 300, maxWidth: 500}}>
                   {katas}
                </select> 

                <iframe title="kataIframe" id = "kataIframe" srcDoc= { currentKata} className = {{maxWidth: 500}}/>
            
            
            </div>      
            </>
        )
}


export default Competency; 