export default function Navbar() {
    return (
    <header className="flex flex-row justify-between">
        <h3>Ofer Lis</h3>
        <div className="flex justify-start">
            <nav className="flex justify-around">
                <a className="flex px-4" href="/about">About</a>
                <a className="flex px-4" href="/project">Projects</a>
                <div className="flex px-4">
                    <a href="/contact">Say Hi</a>
                </div>
            </nav>
            
        </div>
    </header>)
}