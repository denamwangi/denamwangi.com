import React, { Component } from 'react';
import { Link } from "react-scroll";

class HeaderLink extends Component {

  render() {
  	let {name} = this.props;

  	return (
		<React.Fragment>
          
            <Link
              activeClass="active"
              to={name}
              spy={true}
              smooth={true}
              offset={-80}
              duration= {500}
            > 
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
       </React.Fragment>
  	)
  }
};

export default HeaderLink;