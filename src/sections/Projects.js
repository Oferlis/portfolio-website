import ProjectDisplay from "../components/ProjectDisplay";
import { readingList } from "../projects-items/readingList";
import { overlay } from "../projects-items/overlay";
import { sharkio } from "../projects-items/sharkio";
import { portfolioSite } from "../projects-items/portfolioSite";
import SectionSeperator from "../components/sectionSeperator";

export default function Projects() {
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
}
