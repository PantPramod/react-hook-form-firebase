import React from 'react';
import './Footer.css';

const Footer = () => {
    return <div className='main-footer'>
        <div className='footer'>
            <a href="https://render.com/" className='render'>Render Home Page</a>
            <a href="https://lever.co/" className="image-link"><span>Jobs powered by </span>
                <img alt="Lever logo" src="/img/lever-logo-full.svg" />
            </a>
        </div>
    </div>;
};

export default Footer;
