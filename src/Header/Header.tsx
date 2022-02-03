import React from 'react';
import image from '../images/image.png';


const Header = () => {
    return <header>
        <div className='fixed'>
            <div className='img-box'>
                <img src={image} alt="Image" />
            </div>
        </div>
    </header>;
};

export default Header;
