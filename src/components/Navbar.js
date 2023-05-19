export default function Navbar() {
    return (
    <header className="flex flex-row justify-between rounded-lg bg-black w-11/12">
        <h3>Ofer Lis</h3>
        <div className="flex justify-start items-end">
            <nav className="flex justify-around">
                <a className="flex px-4" href="/about">About</a>
                <a className="flex px-4" href="/project">Projects</a>
                <div className="flex px-4 border-4 rounded-full border-white">
                    <a href="/contact">Say Hi</a>
                </div>
            </nav>
            
        </div>
    </header>)
}