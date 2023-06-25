import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiBarChart2Line,
  RiEarthLine,
  RiCustomerService2Line,
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiCalendarTodoLine,
  
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${ showMenu ? "left-0" : "-left-full"} transition-all`}>
            <div>
                <h1 className="text-center text-2xl font-bold text-white mb-10">
                    <img src="AquaCare-logo.png" className="text-2xl font-bold relative p-1 bg-back"/>
                </h1>
                <ul>
                <li>
                    <Link
                        to="/User"
                        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                    >
                        <RiCalendarTodoLine className="text-prim" /> Resumen
                    </Link>
                    </li>

                    <li>
                    <Link
                        to="graficos"
                        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                    >
                        <RiBarChart2Line className="text-prim" /> Analíticas
                    </Link>
                    </li>

                    <li>
                    <Link
                        to="consejos"
                        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                    >
                        <RiEarthLine className="text-prim" /> Consejos
                    </Link>
                    </li>

                    <li>
                    <Link
                        to="ayuda"
                        className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                    >
                        <RiCustomerService2Line className="text-prim" /> Ayuda
                    </Link>
                    </li>
                </ul>
            </div>
            <nav>
            <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
                <RiLogoutCircleRLine className="text-prim" /> Volver al Inicio.
            </Link>
            </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-prim text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
