import { Link } from "react-router-dom";
import AddNote from "./AddNote";

function Navbar() {
      return (
            <nav className="flex items-center justify-around mb-4 h-20 fixed top-0 w-full bg-white shadow-lg">
                  <div className="bg-gray-300 flex items-center rounded-xl justify-evenly h-12 w-[90%] lg:w-[75%]">
                        <button className="w-20 h-10 rounded-xl text-center hover:bg-black text-gray-500 hover:text-white transition-all flex items-center justify-center">
                              <i className="fas fa-search m-0"></i>
                        </button>
                        <input className="text-black rounded-md w-[90%] h-8 mr-5" placeholder="Search"></input>
                  </div>
                  <Link className="rounded-4xl border-2 transition-all text-blue-500 hover:bg-blue-500 px-5 py-3 hover:text-white" to="add">+ Add</Link>
            </nav>
      );
}

export default Navbar;