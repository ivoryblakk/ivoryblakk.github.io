import React from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const NavComponent = () => {
   const  burgerToggle =() => {

		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}

		return (
			<nav style= {{fontSize: 'calc( 12px + .4vw)'}}>
				<div className="navWide">
					<div className="wideDiv">
						<a href="#aboutMe">About Me</a>
						<a href="#skills">Skills</a>
						<a href="#codewars">Languages</a>
                        <a href="#community">Community</a>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={burgerToggle}></i>
					<div className="narrowLinks">
                        <a href="#aboutMe">About Me</a>
						<a href="#skills">Skills</a>
						<a href="#codewars">Languages</a>
                        <a href="#community">Community</a>
					</div>
				</div>
			</nav>
		);


};


export default NavComponent;