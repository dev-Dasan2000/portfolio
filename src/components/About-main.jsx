import TerminalIcon from '../assets/terminal-icon.png'
import DebugIcon from '../assets/debug-icon.png'
import ExtensionIcon from '../assets/extension-icon.png'
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Mail, Phone } from 'lucide-react';
import Certificates from './Certificates'
import Skills from './Skills';
import skillData from '../data/skillData';

export default function About_main() {

    const [isMainOpen, setIsMainOpen] = useState(true);
    const [selectedContent, setSelectedContent] = useState('bio'); 
    const [expandedFolders, setExpandedFolders] = useState({
        bio: true,
        interests: false,
        education: false,
        contacts: false
    });

    const bioContent = [
        "/**",
        " * About me",
        " * Driven Software Engineering undergraduate",
        " * with a passion for creating innovative solutions.",
        " * Eager to learn from experienced professionals",
        " * and contribute to real-world projects.",
        " */"
    ];

    const toggleFolder = (folder) => {
        setExpandedFolders(prev => ({
            ...prev,
            [folder]: !prev[folder]
        }));
        setSelectedContent(folder);
    };

    return (
        <div className="about-main-container">
            <div className="main-container-1">
                <img src={TerminalIcon} />
                <img src={DebugIcon} />
                <img src={ExtensionIcon} />
            </div>
            <div className="main-container-2">
                <div className="folder-column">
                    <div className="main-section">
                        <button onClick={() => setIsMainOpen(!isMainOpen)} className="section-button">
                            {isMainOpen ? <ChevronDown className="chevron-icon" /> : <ChevronRight className="chevron-icon" />}
                            <span>personal-info</span>
                        </button>
                    </div>

                    {isMainOpen && (
                        <div className="section-content">
                            <button 
                                onClick={() => toggleFolder('bio')}
                                className={`section-button ${selectedContent === 'bio' ? 'selected' : ''}`}
                            >
                                {expandedFolders.bio ? <ChevronDown className="chevron-icon" /> : <ChevronRight className="chevron-icon" />}
                                <span className="bio-label">📄 bio</span>
                            </button>

                            <button 
                                onClick={() => toggleFolder('interests')}
                                className={`section-button ${selectedContent === 'interests' ? 'selected' : ''}`}
                            >
                                {expandedFolders.interests ? <ChevronDown className="chevron-icon" /> : <ChevronRight className="chevron-icon" />}
                                <span className="interests-label">📂 interests</span>
                            </button>

                            <button 
                                onClick={() => toggleFolder('education')}
                                className={`section-button ${selectedContent === 'education' ? 'selected' : ''}`}
                            >
                                {expandedFolders.education ? <ChevronDown className="chevron-icon" /> : <ChevronRight className="chevron-icon" />}
                                <span className="education-label">📂 education</span>
                            </button>
                            
                            <button 
                                onClick={() => toggleFolder('contacts')}
                                className={`section-button ${selectedContent === 'contacts' ? 'selected' : ''}`}
                            >
                                {expandedFolders.contacts ? <ChevronDown className="chevron-icon" /> : <ChevronRight className="chevron-icon" />}
                                <span className="contacts-label">📂 contacts</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="main-container-3">
                <div className="content-column">
                    <div className="content-header">
                        {selectedContent}
                        <button className="close-button">×</button>
                    </div>
                    <div className="content-display">
                        {selectedContent === 'bio' && (
                            <div className="bio-content">
                                {bioContent.map((line, index) => (
                                    <div key={index} className="line">
                                        <span className="line-number">{index + 1}</span>
                                        <span className="line-content">{line}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {selectedContent === 'interests' && (
                            <div className='interests-content'></div>
                        )}
                        {selectedContent === 'education' && (
                            <div className='education-content'>
                                <span>Price of Wales College, Moratuwa (2011 - 2019)</span>
                                <span>Colombo International Nautical & Engineering Campus (2022 - 2026)</span>
                            </div>
                        )}
                        {selectedContent === 'contacts' && (
                            <div className="contacts-content">
                                <div className="contact-item">
                                    <Mail className="contact-icon" />
                                    <span>dasanthajayathilaka2000@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <Phone className="contact-icon" />
                                    <span>+94701941067</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="main-container-4">
                <div className='certificate-header'></div>
                <div className='certificate-content'>
                    <span>// certifications:</span>
                    <Certificates />
                    <span>// skills:</span>
                    <div className='skills-container'>
                        {skillData.map(data => (
                            <Skills
                                key={data.id} 
                                {...data}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}