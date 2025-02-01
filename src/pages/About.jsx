import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import About_main from "../components/About-main"
import '../css/about.css'

export default function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="main-container">
            <Header />
            <About_main />
            <Footer isMobile={isMobile} />
        </div>
    )
}