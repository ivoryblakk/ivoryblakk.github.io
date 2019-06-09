import React from 'react';
import SIDwork from '../assets/Sidwork.png';

const PersonalIntrests = () => {
        return (
            <>
                <div id ='community' className ='ui raised very padded text container segment'>
                
                <h2> Community Work </h2> <img alt="Co-Director" class="ui top medium left floated image" src={SIDwork}/>
                <p> I have had the privilage to work with the Science Insititute of Discovery as Co-Director. The institution has 
                    been running for over 15 years. We have been able to provide stipends and an educational summer experince. 
                    We expose minority and at risk kids to different fields of Science. Currently, I have been teaching 
                    the coding class during the summer at the institution.   </p>
                </div>
            </>
        );
};

export default PersonalIntrests;