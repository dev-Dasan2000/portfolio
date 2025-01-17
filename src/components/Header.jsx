import React from 'react';

export default function Header() {
    return (
        <header className="header-container">
            <nav className="nav-container">
                <a href="/dasantha-jayathilaka" className="nav-link">dasantha-jayathilaka</a>
                <a href="/" className="nav-link">_hello</a>
                <a href="/about" className="nav-link">_about-me</a>
                <a href="/projects" className="nav-link">_projects</a>
                <a className="nav-link"></a>
                <a href="/contact" class="nav-link">_contact-me</a>
            </nav>
        </header>
    )
}