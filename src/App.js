import { BrowserRouter } from "react-router-dom";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import "./App.css";
import BlogPosts from "./sections/BlogPosts";
import SideButtons from "./components/sideButtons";
import Skills from "./sections/Skills";

function App() {
  return (
    <BrowserRouter>
      <main id="home">
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <div className="">
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <BlogPosts />
          <Contact />
          <SideButtons />
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
