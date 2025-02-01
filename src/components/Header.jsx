import React, { useState } from 'react';
import HamIcon from '../assets/navigation-icon.png'
import CancleButton from '../assets/cross-circle-icon.png'
import Footer from './Footer';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header-container">
            <nav className="nav-container" style={{ display: window.innerWidth <= 768 ? 'none' : 'grid' }}>
                <a href="/dasantha-jayathilaka" className="nav-link">dasantha-jayathilaka</a>
                <a href="/" className="nav-link">_hello</a>
                <a href="/about" className="nav-link">_about-me</a>
                <a href="/projects" className="nav-link">_projects</a>
                <a className="nav-link"></a>
                <a href="/contact" className="nav-link">_contact-me</a>
            </nav>
            <div className='mobile-nav-container'>
                <div className='name-container'>dasantha-jayathilaka</div>
                <button 
                    className='navigation-button'   
                    onClick={toggleNav}
                >
                    <img 
                        className='hamburger-navigation-icon' 
                        src={isNavOpen ? CancleButton : HamIcon} 
                        alt='hamburger-navigation' 
                    />
                </button>
            </div>
            {isNavOpen && (
                <div className='mobile-nav-links'>
                    <div className='mobile-nav-links-1'>
                        <a href="/" className="nav-link">_hello</a>
                        <a href="/about" className="nav-link">_about-me</a>
                        <a href="/projects" className="nav-link">_projects</a>
                        <a href="/contact" className="nav-link">_contact-me</a>
                    </div>
                    <div className='mobile-nav-links-2'></div>
                    <div className='mobile-nav-links-3'>
                        <Footer isMobile={true} />
                    </div>
                </div>
            )}
        </header>
    )
}