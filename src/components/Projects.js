import { useState } from "react"

export default function Projects() {
    const project1 = <div>
        blabalaala
    </div>
    const project2 = <div>
                    blabalaala222222
                    </div>
    const project3 = <div>
                    blabalaala3333333
                    </div>
    const project4 = <div>
                        blabalaala444444
                        </div>

    const [displayProject, setDisplayProject] = useState(project1)



    return (<div id="projects" className="div-ex">
            <div className="my-auto py-4 w-5/6">
            <h1 className="md:text-4xl text-2xl mb-4 ">My Projects </h1>
            <ul className="w-5/6">
                <li className="py-2" onClick={() => setDisplayProject(project1)}>Projects 1</li>
                <li className="py-2" onClick={() => setDisplayProject(project2)}>Projects 2</li>
                <li className="py-2" onClick={() => setDisplayProject(project3)}>Projects 3</li>
                <li className="py-2" onClick={() => setDisplayProject(project4)}>Projects 4</li>

            </ul>
            </div>
            <div className="my-auto px-auto mr-3">
                <div>
                    {displayProject}
                </div>
            </div>
        
    </div>)

}