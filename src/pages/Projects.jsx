import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Project_main from "../components/Project-main"
import '../css/project.css'

export default function Projects() {
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
            <Project_main />
            <Footer isMobile={isMobile} />
        </div>
    )
}