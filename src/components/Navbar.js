import { useState } from "react"
import { HashLink } from "react-router-hash-link"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState("hidden")

    const isShowMenu = () => {
        if (showMenu === 'hidden') setShowMenu('')
        else setShowMenu("hidden")
    }

    return (
        <nav className="border-gray-200 absoulte w-full" >
            <div id="home" className="flex flex-wrap items-center justify-between md:justify-start md:mx-24 mx-auto p-4 font-montserrat ">
                <HashLink smooth to="/#home">
                <img src={process.env.PUBLIC_URL + "/images/ofer_pic.png"} alt="me" className="h-8 mr-3"/>
                </HashLink>
                <button onClick={isShowMenu} type="button" className="inline-flex md:items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={ showMenu + " w-full md:block md:w-auto"} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 md:mx-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                    <HashLink smooth to="/#home" onClick={()=> setShowMenu('hidden')} className="block py-2 pl-3 pr-4 bg-blue-400 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"> Home </HashLink>
                    </li>
                    <li>
                    <HashLink smooth to="/#about" onClick={()=> setShowMenu('hidden')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About</HashLink>
                    </li>
                    <li>
                    <HashLink smooth to="/#skills" onClick={()=> setShowMenu('hidden')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</HashLink>
                    </li>
                    <li>
                    <HashLink smooth to="/#projects" onClick={()=> setShowMenu('hidden')} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</HashLink>
                    </li>
                    <li>
                    <HashLink smooth to="/#contact" onClick={()=> setShowMenu('hidden')} className="block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Say Hi</HashLink>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ofer-lis/" target="_blank" rel="noreferrer noopener">
                        <img src={process.env.PUBLIC_URL + "/images/LinkedIn_icon.svg"} className="md:h-6 h-10 block py-2 md:py-0 pl-3 pr-4 " alt="my LinkedIn profile"/> 
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Oferlis" target="_blank" rel="noreferrer noopener">
                        <img src={process.env.PUBLIC_URL + "/images/github_icon.svg"} className="md:h-6 h-10 block py-2 md:py-0 md:pl-1 pl-3 pr-4" alt="my Github profile"/>
                        </a>
                    </li>
                </ul>
                </div>
                
            </div>
        </nav>


    )
}