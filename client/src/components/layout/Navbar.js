import React from 'react';
import PropTypes from "prop-types";
import marmelade from './marmalade_mlogo-9d6497c863288240dba11c7ab0836aaa.svg';




const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
          <div className="grid-2">
            <img className="" src={marmelade} alt="marmelade-logo"/>
            <h1>
                <i className={icon}></i> {title}
            </h1>
        </div>
       
      </nav>
    )
}

Navbar.defaultProps = {
    title: "Address Book",
    icon: "fas fa-address-card",
  };

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar