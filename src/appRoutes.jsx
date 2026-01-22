import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import About from "./components/about/about"
import Services from "./components/services/services"
import Projects from "./components/projects/projects"
import ContactUs from "./components/contactUs/contactUs"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function AppRoutes () {
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/services" element = {<Services/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/projects" element = {<Projects/>} />
            <Route path="/contact" element = {<ContactUs/>} />
        </Routes>
        <Footer/>
        </>
    )
}

export default AppRoutes