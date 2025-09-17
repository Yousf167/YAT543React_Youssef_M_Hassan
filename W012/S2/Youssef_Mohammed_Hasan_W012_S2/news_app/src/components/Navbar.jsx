import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const screenConfig = (() => {
        if (window.innerWidth > 768) {
            return ['translate-x-0', 'w-[250px]', 'z-20']
        }
        return ['translate-x-0', 'w-full', 'z-20']
    })()
    return (
        <>
            <button
                onClick={toggleMenu}
                className={`flex
                            items-center
                            rounded-full 
                            fixed 
                            top-3 
                            right-5
                            z-50 
                            text-white 
                            transition-all 
                            duration-300 
                            hover:bg-white 
                            hover:text-blue-700 
                            ${isMenuOpen ? "bg-white text-blue-700" : ""}`}
                aria-label="Toggle menu"
            >
                {/* {
                    window.innerWidth > 320 &&
                    <p className={`${isMenuOpen ? "text-blue-700" : ""}`}>Categories</p>
                } */}
                <div className={`w-10 h-10 flex flex-col items-center justify-center space-y-1 rounded-full transition-all duration-300 ${isMenuOpen ? "pb-2" : ""}`}>
                    <span
                        className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-3' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 ' : ''
                            }`}
                    ></span>
                </div>
            </button>
            <nav className="top-0 fixed p-4 flex justify-between items-center w-full h-min bg-sky-500 dark:bg-blue-950 text-white z-10">
                {/* Logo */}
                <h1 className="text-2xl">TopNews</h1>

            </nav>

            {/* Menu Overlay */}
            <div className={`fixed top-0 right-0 ${screenConfig[1] + " " + screenConfig[2]} h-full bg-gradient-to-b from-sky-500 via-sky-700 to-sky-950 dark:bg-gradient-to-br dark:from-purple-800 dark:via-blue-900 dark:to-sky-950 transform transition-transform duration-300 ${isMenuOpen ? screenConfig[0] : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-[100vh] space-y-8 text-white text-[16px]">
                    <Link
                        to="/tech"
                        className="border-2 w-40 hover:bg-white hover:text-sky-500 hover:border-white rounded-full py-1 text-center transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Tech
                    </Link>
                    <Link
                        to="/sports"
                        className="border-2 w-40 hover:bg-white hover:text-sky-500 hover:border-white rounded-full py-1 text-center transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sports
                    </Link>
                    <Link
                        to="/politics"
                        className="border-2 w-40 hover:bg-white hover:text-sky-500 hover:border-white rounded-full py-1 text-center transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Politics
                    </Link>
                    <Link
                        to="/crimes"
                        className="border-2 w-40 hover:bg-white hover:text-sky-500 hover:border-white rounded-full py-1 text-center transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Crime
                    </Link>
                    <Link
                        to="/entertainment"
                        className="border-2 w-40 hover:bg-white hover:text-sky-500 hover:border-white rounded-full py-1 text-center transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Entertainment
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;

//<div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-sky-500 via-sky-700 to-sky-950 dark:bg-gradient-to-br dark:from-purple-800 dark:via-blue-900 dark:to-sky-950 transform transition-transform duration-300 ${screenConfig}`}>