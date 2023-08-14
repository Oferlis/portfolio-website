import { useEffect, useState } from "react";

const SideButtons = (props) => {
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
    <div className="sideButtonGroup">
      <button
        className="sideButton"
        onClick={() => window.open("https://github.com/Oferlis")}
        title="Scroll to Top"
      >
        <img
          className="side-icon"
          src={process.env.PUBLIC_URL + "/svgs/github.svg"}
          alt="GitHub"
        />
      </button>
      <button
        className="sideButton"
        onClick={() => window.open("https://www.linkedin.com/in/ofer-lis/")}
        title="Github"
      >
        <img
          className="side-icon-linkedin"
          src={process.env.PUBLIC_URL + "/svgs/linkedin.svg"}
          alt="LinkedIn"
        />
      </button>
      {showButton && (
        <button
          className="sideButton"
          onClick={handleScrollToTop}
          title="LinkedIn"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default SideButtons;
