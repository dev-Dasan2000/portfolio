import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from "./pages/Contact";
import About from "./pages/About";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/dasantha-jayathilaka" Component={Home}></Route>
                    <Route path="/projects" Component={Projects}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/about" Component={About}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}