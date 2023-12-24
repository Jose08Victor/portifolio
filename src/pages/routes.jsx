import { Home } from "../components/home"
import { Projects } from "../components/projects"
import { Skills } from "../components/skills"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/portifolio' element={<Home />} />

                <Route exact path='/projects' element={<Projects />} />

                <Route exact path='/skills' element={<Skills />} />
            </Routes>
        </BrowserRouter>
    )
}