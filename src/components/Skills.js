import React from 'react';
import { ReactComponent as CSS } from '../assets/CSS.3.svg';
import { ReactComponent as HTML5 } from '../assets/HTML5_logo.svg';
import { ReactComponent as Jquery } from '../assets/Jquery.svg';
import { ReactComponent as ReactIcon } from '../assets/React-icon.svg';
import { ReactComponent as JavaScriptLogo } from '../assets/JavaScript_logo.svg';
import { ReactComponent as ReduxLogo } from '../assets/ReduxLogo.svg';
import { ReactComponent as NodejsLogo } from '../assets/NodejsLogo.svg';
import { ReactComponent as Python } from '../assets/Python.svg';
//import { ReactComponent as GeorgeIngram } from '../assets/GeorgeIngram.svg';
import { ReactComponent as TypescriptLogo } from '../assets/TypescriptLogo.svg';
import { ReactComponent as SassLogo } from '../assets/SassLogo.svg';
import { ReactComponent as VectorLogo } from '../assets/VectorLogo.svg';
import { ReactComponent as Inkscape } from '../assets/Inkscape.svg';

import { ReactComponent as JQueryUILogo } from '../assets/JQueryUILogo.svg';

//import { ReactComponent as BootstrapLogo } from '../assets/Bootstrap_logo.svg';

const Skills = () => {
    return (
        <>
      
        <div id ='skills' className ='ui raised very padded text container segment' >
        <h2>Technologies  Learned</h2>
        <br/>
           <CSS  className ="skills" style = {{height:"4em", width: "4em"}} />
           <SassLogo className ="skills" style = {{height:"4em", width: "5em", padding:".5em" }}/>
           <HTML5 className ="skills" style = {{height:"4em", width: "4em"}} />
           <TypescriptLogo  className ="skills"style = {{height:"4em", width: "4em"}} />
           <JavaScriptLogo  className ="skills"style = {{height:"4em", width: "4em"}} />
           <Jquery className ="skills" style = {{height:"4em", width: "4em"}} />         
           <NodejsLogo className ="skills" style = {{height:"4em", width: "5em", padding:".5em" }}/>
           <ReactIcon className ="skills" style = {{height:"4em", width: "4em"}}/>
           <ReduxLogo className ="skills" style = {{height:"4em", width: "4em", padding:".9em"}} />
           <Python className ="skills" style = {{height:"4em", width: "4em"}}/>
           <VectorLogo className ="skills" style = {{height:"4em", width: "4em", padding:"0px"}}/>
           <Inkscape className ="skills" style = {{height:"4em", width: "4em"}}/>
           <JQueryUILogo className ="skills"style = {{height:"4em", width: "4em", transform: 'scale(2.5,2.5)', padding:"0px"}}/>
          

      
         
        </div>
        </>
    );
}

export default Skills; 