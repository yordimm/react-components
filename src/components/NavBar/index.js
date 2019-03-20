import React from 'react';
import logo from '../../assets/recursos/assets/images/logo-almundo.svg';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <img className="img-fluid" src={logo} alt="" />
        </nav>
    );
}

export default NavBar;
