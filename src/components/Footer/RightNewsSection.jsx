import React from 'react'

const RightNewsSection = ({ imageUrl, title, description }) => {
    return (
        <div className="right-section">
            <img src={imageUrl} alt="Keep up with the latest" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default RightNewsSection