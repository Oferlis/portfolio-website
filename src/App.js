import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Footer from "./sections/Footer";
import "./App.css";
import BlogPosts from "./sections/BlogPosts";
import Technologies from "./sections/Technologies";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

          <section id="four">
            <svg
              class="separator"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="120"
              viewBox="0.2 0 178 30"
              preserveAspectRatio="none"
            >
              <g transform="translate(-14.514284,-115.36352)">
                <path
                  className="color1"
                  d="m 14.74107,115.49581 h 178.02679 v 30.61607 h -29.10417 v -12.47321 h -10.58333 v -8.31548 h -13.98512 v 13.98512 h -20.41072 v -13.98512 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 121.54343 H 51.40476 v 15.875 H 29.860117 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
                />
                <path
                  className="color2"
                  d="M 14.741071,112.54762 H 192.76786 v 30.61607 H 163.66369 V 130.69048 H 153.08036 V 122.375 h -13.98512 v 13.98512 H 118.68452 V 122.375 h -8.31547 v 7.18155 h -7.18155 v 10.9613 H 85.422617 v -10.9613 H 68.791666 V 118.59524 H 51.40476 v 15.875 H 29.860118 v -9.82739 h -8.693452 v -7.55952 h -6.520089 v -4.53571 z"
                />
              </g>
            </svg>
          </section>
          <Technologies />
          <Projects />
          <BlogPosts />
          <Contact />
          {showButton && (
            <button
              className="upButton"
              onClick={handleScrollToTop}
              title="Scroll to Top"
            >
              ↑
            </button>
          )}
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
