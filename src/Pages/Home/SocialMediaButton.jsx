// SocialMediaButton.js (or any name you prefer)
import React from 'react';
import './SocialMediaButton.css';

const SocialMediaButton = ({ buttonText, icon, link }) => {
    return (
        <div className="social-media-button">
            <a href={link} target="_blank" rel="noopener noreferrer" className="button">
                {buttonText}
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer" className="icon">
                {icon}
            </a>
        </div>
    );
}

export default SocialMediaButton;
