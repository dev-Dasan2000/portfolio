import Header from "../components/Header"
import Footer from "../components/Footer"
import Contact_main from "../components/Contact-main"
import '../css/contact.css'

export default function Contact() {
    return (
        <div className="main-container">
            <Header />
            <Contact_main />
            <Footer />
        </div>
    )
}