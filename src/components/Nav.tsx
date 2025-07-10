import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Nav = () => {

  const [sb, setSB] = useState(false);

  function showSB() {
    setSB(!sb);
  }

  return (
    <nav className="sticky top-0 left-0 bg-black text-white shadow-md z-50">
      <div className="  px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-widest text-green-400">VAX</h1>
        
        

        {/* Navigation Links */}
        <ul className="flex space-x-24 text-lg ml-5 ">
          <li>
            <Link
              to="/"
              className="hover:text-green-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-green-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/songs"
              className="hover:text-green-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-green-400"
            >
              Songs
            </Link>
          </li>
          <li>
            <Link
              to="/albums"
              className="hover:text-green-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-green-400"
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              to="/artists"
              className="hover:text-green-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-green-400"
            >
              Artists
            </Link>
          </li>
        </ul>
        <div className="relative flex items-center space-x-2 ">
          {sb && (
            <input 
              type="text"
              placeholder="Search"
              className="rounded-2xl w-98 h-10  py-2 transition-all duration-300 ease-in-out absolute right-9 top-0 shadow-lg z-50 border-2 border-green-400 shadow-[0_0_12px_3px_rgba(34,197,94,0.7)] focus:outline-none"
              
            />
          )}

          <button type="submit" onClick={showSB} className="bg-green-400 rounded-2xl w-10 h-10  ">
              <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Nav;
