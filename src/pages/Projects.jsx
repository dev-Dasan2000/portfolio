import Header from "../components/Header"
import Footer from "../components/Footer"
import Project_main from "../components/Project-main"
import '../css/project.css'

export default function Projects() {
    return (
        <div className="main-container">
            <Header />
            <Project_main />
            <Footer />
        </div>
    )
}