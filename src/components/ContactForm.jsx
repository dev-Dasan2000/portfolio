import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import SuccessMessage from './SuccessMessage'

export default function ContactForm({ onFormDataChange }) {  
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const serviceId = 'service_uc9o8ha';
        const templateId = 'template_2y1c421';
        const publicKey = 'ZrUfZU4muN9wYzy57';
        
        try {
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                publicKey
            );

            if (response.status === 200) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const handleNewMessage = () => {
        setIsSubmitted(false); 
    };
      
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value
        };
        setFormData(newFormData);
        onFormDataChange(newFormData); 
    };

    if (isSubmitted) {
        return <SuccessMessage onNewMessage={handleNewMessage} />;
    }

    return (
        <div className="contact-form-container">
            <form className='contact-form-element' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">_name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">_email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="form-label">_message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">
                    submit-message
                </button>
            </form>
        </div>
    );
}