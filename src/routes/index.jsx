import { Header } from "../components/header";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";
import { Skills } from "../pages/skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path='/portifolio' element={<Home />} />

                <Route exact path='/projects' element={<Projects />} />

                <Route exact path='/skills' element={<Skills />} />
            </Routes>
        </BrowserRouter>
    )
}