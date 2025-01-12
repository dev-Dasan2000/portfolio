import React from 'react'
import DownArrowLogo from '../assets/down-arrow-icon.png'
import CrooIcon from '../assets/cross-icon.png'
import Form from '../components/Form'
import formData from '../data/formData'
import projectData from '../data/projectData'
import Project from '../components/Project'
import { useState } from 'react';

export default function Project_main() {

    const [selectedTechs, setSelectedTechs] = useState([]);

    const handleCheckboxChange = (value, isChecked) => {
        if (isChecked) {
            setSelectedTechs(prev => [...prev, value]);
        } else {
            setSelectedTechs(prev => prev.filter(tech => tech !== value));
        }
    };

    const handleClearAll = () => {

        setSelectedTechs([]);
        
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    return (
        <main className="project-main-container">
            <div className="top-project">
                <div className='top-div-1'>
                    <img src={DownArrowLogo} alt='arrow-icon' className='down-arrow-icon' />
                    <span>projects</span>
                </div>
                <div className='top-div-2'>
                    {selectedTechs.length > 0 && (
                        <>
                            <div className="tech-tags">
                                {selectedTechs.map((tech, index) => (
                                    <span key={tech}>
                                        <span className="tech-tag">{tech}</span>
                                        {index !== selectedTechs.length - 1 && <span className="semicolon">; </span>}
                                    </span>
                                ))}
                            </div>
                            <button 
                                className="close-button"
                                onClick={handleClearAll}
                                type="button"
                            >
                                <img src={CrooIcon} className='cross-icon' alt='cross-icon' />
                            </button>
                        </>
                    )}
                </div>
                <div className='top-div-3'></div>
            </div>
            <div className="bottom-project"> 
                <div className='bottom-div-1'>
                    <form>
                        <div className="form-container">
                            {formData.map(data => (
                                <Form 
                                    key={data.id} 
                                    {...data}
                                    onChange={handleCheckboxChange}
                                />
                            ))}
                        </div>         
                    </form>
                </div>
                <div className='bottom-div-2'>
                    {projectData.map(proj =>(
                        <Project
                            key={proj.id}
                            {...proj}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}