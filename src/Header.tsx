import React from 'react';
import image from './images/image.png';


const Header = () => {
    return <header>
        <div className='fixed'>
            <div className='img-box'>
                <img src={image} alt="Image" />
            </div>
        </div>

        <h1>Full-Stack Engineer</h1>
        <p>REMOTE OPTIONAL /PRODUCT – ENGINEERING /FULL-TIME</p>

    </header>;
};

export default Header;
