import About from "../../components/about/about"
import Banner from "../../components/banner/banner"
import ContactUs from "../../components/contactUs/contactUs"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import Projects from "../../components/projects/projects"
import Services from "../../components/services/services"



function Home () {
    return (
        <>

      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <ContactUs/>
        
        </>
    )
}
export default Home