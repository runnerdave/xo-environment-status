import React from 'react';
import logo from './logo.svg';

const Footer = (props) => {
    return (
        <footer className="app-footer">
            <img src={logo} className="app-logo" alt="logo"/>
            <h1 className="app-title">{props.title}</h1>
        </footer>
    )
};

export default Footer;