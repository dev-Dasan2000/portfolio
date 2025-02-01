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
    
        window.addEventListener('resize', handleResize);
    
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