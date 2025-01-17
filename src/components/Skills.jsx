export default function Skills(props) {
    return (
        <div className="skill-icon-container">
            <img className="skill-image" src={props.src} alt={props.alt} />
        </div>
    )
}