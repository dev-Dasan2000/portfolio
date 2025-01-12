import LinkedInLogo from '../assets/linkedin-icon.png' 
import FacebookLogo from '../assets/facebook-icon.png'
import GithubLogo from '../assets/github-icon.png'

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="nav-container-footer">
                <a className="nav-link-footer">find me in:</a>
                <a href="https://www.linkedin.com/in/dasantha-jayathilaka-249464274/" target='_blank' className="nav-link-footer"><img src={LinkedInLogo} alt='linkedin-icon' className='linkedin-icon' /></a>
                <a href="https://www.facebook.com/dasan2000" target='_blank' className="nav-link-footer"><img src={FacebookLogo} alt='facebook-icon' className='facebook-icon' /></a>
                <a className="nav-link-footer"></a>
                <a href="https://github.com/dev-Dasan2000" target='_blank' class="nav-link-footer">@dev-Dasan2000 <img src={GithubLogo} alt='github-icon' className='github-icon' /></a>
            </div>
        </footer>
    )
}