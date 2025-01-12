import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/dasantha-jayathilaka" Component={Home}></Route>
                    <Route path="/projects" Component={Projects}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}