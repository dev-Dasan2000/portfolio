import LinkedInLogo from '../assets/linkedin-icon.png' 
import FacebookLogo from '../assets/facebook-icon.png'
import GithubLogo from '../assets/github-icon.png'

// Footer.jsx
export default function Footer({ isMobile }) {
    if (isMobile) {
        return (
            <div className='mobile-nav-container-footer'>
                <div className="nav-link-footer-2">
                    <a className='mobile-navigation-links'>find me in:</a>
                    <a className='mobile-navigation-links' href="https://www.linkedin.com/in/dasantha-jayathilaka-249464274/" target='_blank'>
                        <img src={LinkedInLogo} alt='linkedin-icon' className='linkedin-icon' />
                    </a>
                    <a className='mobile-navigation-links' href="https://www.facebook.com/dasan2000" target='_blank'>
                        <img src={FacebookLogo} alt='facebook-icon' className='facebook-icon' />
                    </a>
                    <a className='mobile-navigation-links' href="https://github.com/dev-Dasan2000" target='_blank'>
                        <img src={GithubLogo} alt='github-icon' className='github-icon' />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <footer className="footer-container">
            <div className="nav-container-footer">
                <a className="nav-link-footer">find me in:</a>
                <a href="https://www.linkedin.com/in/dasantha-jayathilaka-249464274/" target='_blank' className="nav-link-footer">
                    <img src={LinkedInLogo} alt='linkedin-icon' className='linkedin-icon' />
                </a>
                <a href="https://www.facebook.com/dasan2000" target='_blank' className="nav-link-footer">
                    <img src={FacebookLogo} alt='facebook-icon' className='facebook-icon' />
                </a>
                <a className="nav-link-footer"></a>
                <a href="https://github.com/dev-Dasan2000" target='_blank' className="nav-link-footer">
                    @dev-Dasan2000 <img src={GithubLogo} alt='github-icon' className='github-icon' />
                </a>
            </div>
        </footer>
    );
}