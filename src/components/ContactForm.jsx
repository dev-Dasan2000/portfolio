import React, { useState } from 'react';

export default function ContactForm({ onFormDataChange }) {  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
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

    return (
        <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
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
};