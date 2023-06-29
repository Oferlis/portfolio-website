import { useState } from "react"
import ProjectDisplay from "./ProjectDisplay"
import {readingList} from "../projects-items/readingList"
import { overlay } from "../projects-items/overlay"
import { sharkio } from "../projects-items/sharkio"
import { portfolioSite } from "../projects-items/portfolioSite"

export default function Projects() {                
    const [displayProject, setDisplayProject] = useState(readingList)

    return (<div id="projects" className="div-ex projects-div">
            <div className="my-auto py-4 w-1/3">
            <h1 className="md:text-4xl text-2xl mb-4 ">My Projects </h1>
            <ul className="w-5/6">
                <li className="proj-list-item" onClick={() => setDisplayProject(readingList)}>Reading List</li>
                <li className="proj-list-item" onClick={() => setDisplayProject(overlay)}>Overlay</li>
                <li className="proj-list-item" onClick={() => setDisplayProject(sharkio)}>Sharkio</li>
                <li className="proj-list-item" onClick={() => setDisplayProject(portfolioSite)}>Portfolio site</li>

            </ul>
            </div>
            <ProjectDisplay content={displayProject}/>
        
    </div>)
}