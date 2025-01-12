import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from "./pages/Contact";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/dasantha-jayathilaka" Component={Home}></Route>
                    <Route path="/projects" Component={Projects}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}