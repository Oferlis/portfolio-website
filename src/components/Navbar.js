import { useState } from "react"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState("hidden")

    const isShowMenu = () => {
        if (showMenu === 'hidden') setShowMenu('')
        else setShowMenu("hidden")
    }

    return (
    // <header className="flex justify-start place-content-center max-w-5xl font-montserrat mx-36 mt-12 mb-16" width="100%">
    //     <img src='ofer_pic.png' alt="me" className="" width="100px" height="100px"/>
    //     <div className="flex flex-col mx-4 my-2">
    //     <h1 className="py-2 text-3xl text-black">Ofer Lis</h1>
    //     <div className="flex text-lg">
    //         <nav className="flex justify-around text-[#5e5e5e]">
    //             <a className="flex pr-4 my-2" href="/about">About</a>
    //             <a className="flex px-4 my-2" href="/skills">Skills</a>
    //             <a className="flex px-4 my-2" href="/project">Projects</a>
    //             <div className="flex px-4 my-2">
    //                 <a href="/contact">Say Hi</a>
    //             </div>
    //         </nav>
    //     </div>
            
    //     </div>
    // </header>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src="ofer_pic.png" alt="me" className="h-8 mr-3"/>
                <button onClick={isShowMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={ showMenu + " w-full md:block md:w-auto"} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                    <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                    <a href="#skills" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                    </li>
                    <li>
                    <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                    </li>
                    <li>
                    <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>


    )
}