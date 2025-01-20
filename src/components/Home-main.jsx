import '../css/home.css'
import SnakeGame from './SnakeGame'

export default function Home_main() {
    return (
        <main className="home-main-container">
            <div className="left-home">
                <div className="intro">
                    <p className="greeting">Hi all. I am</p>
                    <h1 className="name">Dasantha Jayathilaka</h1>
                    <p className="role">&gt; A Software Engineering undergraduate of CINEC</p>
                </div>
                <div className="additional-info">
                    <p className="comment">// find my profile on Github:</p>
                    <p className="code">const githubLink = <span className="link">"https://github.com/dev-Dasan2000"</span></p>
                </div>
            </div>
            <div className="right-home">
                <SnakeGame />
            </div>
        </main>
    )
}