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
