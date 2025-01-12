import '../css/home.css'
import SnakeGame from './SnakeGame'

export default function Home_main() {
    return (
        <main className="home-main-container">
            <div className="left-home">
                <div className="intro">
                    <p class="greeting">Hi all. I am</p>
                    <h1 class="name">Dasantha Jayathilaka</h1>
                    <p class="role">&gt; A Software Engineering undergraduate of CINEC</p>
                </div>
                <div className="additional-info">
                    <p class="comment">// complete the game to continue</p>
                    <p class="comment">// you can also see it on my Github page</p>
                    <p class="code">const githubLink = <span className="link">"https://github.com/dev-Dasan2000"</span></p>
                </div>
            </div>
            <div className="right-home">
                <SnakeGame />
            </div>
        </main>
    )
}