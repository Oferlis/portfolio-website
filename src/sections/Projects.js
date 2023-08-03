// import { useState } from "react";

import ProjectDisplay from "../components/ProjectDisplay";
import { readingList } from "../projects-items/readingList";
import { overlay } from "../projects-items/overlay";
import { sharkio } from "../projects-items/sharkio";
import { portfolioSite } from "../projects-items/portfolioSite";
import SectionSeperator from "../components/sectionSeperator";

export default function Projects() {
  // const [carValue, setCarValue] = useState(0);

  // const handleCarInc = (e) => {
  //   if (e.target.value === "4") {
  //     setCarValue(0);
  //   } else {
  //     setCarValue(e.target.value + 1);
  //   }
  // };
  if (window.innerWidth > 768) {
    return (
      <div id="projects" className="proj-div">
        <SectionSeperator sectionName="Projects" />
        <div className="row-div proj-container">
          <ProjectDisplay content={readingList} />
          <ProjectDisplay content={sharkio} />
          <ProjectDisplay content={overlay} />
          <ProjectDisplay content={portfolioSite} />
        </div>
      </div>
    );
  } else {
    return (
      <div id="projects" className="proj-div">
        mobile view
      </div>
    );
  }
}
