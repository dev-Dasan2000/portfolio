import LinkedInLogo from '../assets/linkedin-icon.png' 
import GithubLogo from '../assets/github-icon.png'

export default function Project(props) {
    return (
        <div className="project-container">
            <div className="project-name-container"><span>Project {props.id} // _{props.name}</span></div>
            <div className="project-detail-container">
                <div className="project-image"><img className="image" src={props.img} alt="project-image" /></div>
                <div>
                    <div className="details-container">
                        <p className="details">{props.para}</p>
                    </div>
                    <div className="social-container">
                        <a href={props.href} target="_blank"><img className="github-social-icon" src={GithubLogo} alt="github-icon" /></a>
                        <a href="https://www.linkedin.com/in/dasantha-jayathilaka-249464274/" target="_blank"><img className="linkedin-social-icon" src={LinkedInLogo} alt="linkedin-icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}