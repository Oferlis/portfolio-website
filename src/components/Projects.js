import { useState } from "react"
import { Fade } from "react-awesome-reveal"

export default function Projects() {
    const project1 = 
    <Fade>
    <div>
        blabalaala
    </div>
    </Fade>
    const project2 = <Fade><div>
                    blabalaala222222
                    </div>
                    </Fade>
    const project3 = 
                    <Fade>
                    <div>
                    blabalaala3333333
                    </div>
                    </Fade>
    const project4 = <Fade>
                        <div>
                        blabalaala444444
                        </div>
                        </Fade>

    const [displayProject, setDisplayProject] = useState(project1)



    return (<div id="projects" className="div-ex projects-div">
            <div className="my-auto py-4 w-1/2">
            <h1 className="md:text-4xl text-2xl mb-4 ">My Projects </h1>
            <ul className="w-5/6">
                <li className="py-2" onClick={() => setDisplayProject(project1)}>Projects 1</li>
                <li className="py-2" onClick={() => setDisplayProject(project2)}>Projects 2</li>
                <li className="py-2" onClick={() => setDisplayProject(project3)}>Projects 3</li>
                <li className="py-2" onClick={() => setDisplayProject(project4)}>Projects 4</li>

            </ul>
            </div>
            <div className="my-auto px-auto mr-3 bg-slate-500 px-auto w-full">
                <div>
                    {displayProject}
                </div>
            </div>
        
    </div>)

}