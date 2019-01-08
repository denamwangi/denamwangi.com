import React, { Component } from 'react';

import HeaderLink from './headerLink';

class Header extends Component {

	render() {
  	const sections = ['about', 'experience', 'education', 'talks', 'contact'];
  	return (
	  <header className="App-header">
	    <ul>
		  {sections.map(section => (
			<li className="nav-item">
				<HeaderLink name={section}/>
			</li>
		  ))}
	    </ul>
	  </header>
  	);
	}}

export default Header;