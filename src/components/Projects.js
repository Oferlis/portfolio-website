export default function Projects() {
    return (<div id="projects" className="flex flex-row h-96 items-center place-content-around my-4 md:mx-20 bg-[#c9e4eb] rounded-lg font-montserrat">
        <div>My Projects</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 scroll-m-0">
            <div>
                <img className="h-auto max-w-full  rounded-lg" src="logo192.png" alt="example project"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="logo192.png" alt="example project"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="logo192.png" alt="example project"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="logo192.png" alt="example project"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="logo192.png" alt="example project"/>
            </div>
            <div>
                <img className="h-auto max-w-full rounded-lg" src="logo192.png" alt="example project"/>
            </div>
        </div>
    </div>)
}