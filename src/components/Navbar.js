export default function Navbar() {
    return (
    <header className="flex justify-start place-content-center max-w-5xl font-montserrat mx-36 mt-12 mb-16" width="100%">
        <img src='ofer_pic.png' alt="me" className="" width="100px" height="100px"/>
        <div className="flex flex-col mx-4 my-2">
        <h1 className="py-2 text-3xl text-black">Ofer Lis</h1>
        <div className="flex text-lg">
            <nav className="flex justify-around text-[#5e5e5e]">
                <a className="flex pr-4 my-2" href="/about">About</a>
                <a className="flex px-4 my-2" href="/skills">Skills</a>
                <a className="flex px-4 my-2" href="/project">Projects</a>
                <div className="flex px-4 my-2">
                    <a href="/contact">Say Hi</a>
                </div>
            </nav>
        </div>
            
        </div>
    </header>)
}