import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='logo'>
                <h3 className='logo-text'>Новостник</h3>
                <p>Single Page Application</p>
            </div>
            <div className='info'>
                <p>Made by</p>
                <h3>Dmitrii Rudyuk</h3>
            </div>
        </footer>
    )
}

export default Footer;