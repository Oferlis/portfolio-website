import { BrowserRouter } from "react-router-dom";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import "./App.css";
import BlogPosts from "./sections/BlogPosts";
import Technologies from "./sections/Technologies";
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
          {/* <section id="third">
            <svg
              class="separator"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="140"
              viewBox="0.5 0.2 176 30"
              preserveAspectRatio="none"
            >
              <g transform="translate(-13.668562,-111.38266)">
                <path
                  className="color2"
                  d="M 13.898015,111.51495 H 190.83044 v 26.19241 l -45.97036,-14.43255 -42.22858,7.48354 -45.970361,-14.96709 -31.003265,16.03617 z"
                />
              </g>
            </svg>
          </section> */}

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
