import { useState } from "react";
import ProjectDisplay from "../components/ProjectDisplay";
import { readingList } from "../projects-items/readingList";
import { overlay } from "../projects-items/overlay";
import { sharkio } from "../projects-items/sharkio";
import { portfolioSite } from "../projects-items/portfolioSite";
import SectionSeperator from "../components/sectionSeperator";

export default function Projects() {
  // const [displayProject, setDisplayProject] = useState(readingList);
  // let isSelected = false;
  // const handleItemClicked = (item) => {
  //   setDisplayProject(item);
  //   isSelected = true;
  // };

  // return (
  //   <div id="projects" className="div-ex row-div proj-div">
  //     <div className="my-auto py-4 w-1/3">
  //       <h1 className="md:text-4xl text-2xl mb-4 ">My Projects </h1>
  //       <ul className="">
  //         <li
  //           className={`proj-list-item ${isSelected ? "selected" : ""}`}
  //           onClick={() => handleItemClicked(readingList)}
  //         >
  //           Reading List
  //         </li>
  //         <li
  //           className="proj-list-item"
  //           onClick={() => handleItemClicked(overlay)}
  //         >
  //           Overlay
  //         </li>
  //         <li
  //           className="proj-list-item"
  //           onClick={() => handleItemClicked(sharkio)}
  //         >
  //           Sharkio
  //         </li>
  //         <li
  //           className="proj-list-item"
  //           onClick={() => handleItemClicked(portfolioSite)}
  //         >
  //           Portfolio site
  //         </li>
  //       </ul>
  //     </div>
  //     <ProjectDisplay content={displayProject} />
  //   </div>
  // );

  return <SectionSeperator sectionName="Projects" />;
  // <PRoject compnent></>
}
