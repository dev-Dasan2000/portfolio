import React, { useState } from 'react';
import DownArrowLogo from '../assets/down-arrow-icon.png'
import EmailIcon from '../assets/email-icon.png'
import PhoneIcon from '../assets/phone-icon.png'
import LinkIcon from '../assets/external-link-icon.png'
import ContactForm from './ContactForm'
import CodePreview from './CodePreview';

export default function Contact_main() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const handleFormDataChange = (newData) => {
        setFormData(newData);
    };

    const Display1 = () => {
        document.querySelector('.dropdown-1-content').style.display = document.querySelector('.dropdown-1-content').style.display === 'block' ? 'none' : 'block';
    }

    const Display2 = () => {
        document.querySelector('.dropdown-2-content').style.display = document.querySelector('.dropdown-2-content').style.display === 'block' ? 'none' : 'block';
    }

    return (
        <div className="contact-main-container">
            <div className="top-contact">
                <div className="contact-top-div-1">
                    <img src={DownArrowLogo} alt='arrow-icon' className='down-arrow-icon' />
                    <span>contacts</span>
                </div>
                <div className="contact-top-div-2"></div>
                <div className="contact-top-div-3"></div>
            </div>
            <div className="bottom-contact">
                <div className="contact-bottom-div-1">
                    <div className="container-1">
                        <div className="email">
                            <img src={EmailIcon} alt='arrow-icon' className='down-arrow-icon' />
                            <span>dasanthajayathilaka2000@gmail.com</span>
                        </div>
                        <div className="phone">
                            <img src={PhoneIcon} alt='arrow-icon' className='down-arrow-icon' />
                            <span>+94701941067</span>
                        </div>
                    </div>
                    <div className="container-2">
                        <img src={DownArrowLogo} alt='arrow-icon' className='down-arrow-icon' />
                        <span>find-me-also-in</span>
                    </div>
                    <div className="container-3">
                        <img src={LinkIcon} alt='arrow-icon' className='external-link-icon' />
                        <span><a href='https://www.instagram.com/dasan_jayathilaka/' target='_blank'>Instagram account</a></span>
                    </div>
                </div>
                <div className="contact-bottom-div-2">
                    <ContactForm onFormDataChange={handleFormDataChange} />
                </div>
                <div className="contact-bottom-div-3">
                    <div className="form-and-preview">
                        <CodePreview formData={formData} />
                    </div>
                </div>
            </div>
            <div className='mobile-contact-container'>
                <div className='container-header'>_contact-me</div>
                <button 
                    className='dropdown-1'
                    onClick={Display1}
                >
                    <img src={DownArrowLogo} alt='arrow-icon' className='down-arrow-icon' />
                    <span>contacts</span>
                </button>
                <div className='dropdown-1-content'>
                    <div className="email">
                        <img src={EmailIcon} alt='arrow-icon' className='down-arrow-icon' />
                        <span>dasanthajayathilaka2000@gmail.com</span>
                    </div>
                    <div className="phone">
                        <img src={PhoneIcon} alt='arrow-icon' className='down-arrow-icon' />
                        <span>+94701941067</span>
                    </div>
                </div>
                <button 
                    className='dropdown-2'
                    onClick={Display2}
                >
                    <img src={DownArrowLogo} alt='arrow-icon' className='down-arrow-icon' />
                    <span>find-me-also-in</span>
                </button>
                <div className='dropdown-2-content'>
                    <div className="container-3">
                        <img src={LinkIcon} alt='arrow-icon' className='external-link-icon' />
                        <span><a href='https://www.instagram.com/dasan_jayathilaka/' target='_blank'>Instagram account</a></span>
                    </div>
                </div>
                <div>
                    <ContactForm onFormDataChange={handleFormDataChange} />
                </div>
            </div>
        </div>
    )
}