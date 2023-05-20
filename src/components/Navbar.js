export default function Navbar() {
    return (
    <header className="flex flex-row w-full justify-between rounded-b-lg bg-black sticky top-0 text-white font-montserrat px-2">
        <h3 className="py-2">Ofer Lis</h3>
        <div className="flex justify-start items-end">
            <nav className="flex justify-around">
                <a className="flex px-4 py-2" href="/about">About</a>
                <a className="flex px-4 py-2" href="/project">Projects</a>
                <div className="flex px-4 border-4 rounded-full border-white py-1">
                    <a href="/contact">Say Hi</a>
                </div>
            </nav>
            
        </div>
    </header>)
}