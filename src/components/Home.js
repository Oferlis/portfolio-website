import Navbar from "./Navbar"
import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"

export default function Home() {
    return (<main id="home" className="bg-[#EEEFF1] body-font" >
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
    <div className= 'flex flex-col'>
      <Navbar/>
      <About/>
      <Contact/> 
      <Footer/>
    </div>
  </main>)
}