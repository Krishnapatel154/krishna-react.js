import React from 'react';
const Popup = ({ handleClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Welcome!</h2>
                <p>Welcome to our website. Enjoy your stay!</p>
            </div>
        </div>
    );
}

export default Popup;
