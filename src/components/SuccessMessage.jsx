import React from 'react';

const SuccessMessage = ({ onNewMessage }) => {
    return (
        <div className="success-container">
            <div className="title-container">
                <h2>Thank you!</h2>
                <span role="img" aria-label="peace">✌️</span>
            </div>
            <p className="success-message">
                Your message has been received. You will receive answer really soon!
            </p>
            <button 
                onClick={onNewMessage}
                className="new-message-button"
            >
                send-new-message
            </button>
        </div>
    );
};

export default SuccessMessage;