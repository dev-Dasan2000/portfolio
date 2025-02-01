import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Contact_main from "../components/Contact-main"
import '../css/contact.css'

export default function Contact() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="main-container">
            <Header />
            <Contact_main />
            <Footer isMobile={isMobile} />
        </div>
    )
}