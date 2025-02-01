import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import Home_main from "../components/Home-main"
import Footer from "../components/Footer"
import '../css/home.css'

export default function Home() {
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
            <Home_main />
            <Footer isMobile={isMobile} />
        </div>
    )
}