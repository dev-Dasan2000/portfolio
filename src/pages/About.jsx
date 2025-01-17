import Header from "../components/Header"
import Footer from "../components/Footer"
import About_main from "../components/About-main"
import '../css/about.css'

export default function About() {
    return (
        <div className="main-container">
            <Header />
            <About_main />
            <Footer />
        </div>
    )
}