import Header from "../components/Header"
import Home_main from "../components/Home-main"
import Footer from "../components/Footer"
import '../css/home.css'

export default function Home() {
    return (
        <div className="main-container">
            <Header />
            <Home_main />
            <Footer />
        </div>
    )
}