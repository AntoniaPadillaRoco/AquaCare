import React, { useState } from "react";
// Icons
import ProductsID from "../pages/ProductsID";

import {
  RiMenu3Fill,
  RiCloseLine,

} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50 bg-ran">
      <div className="xl:w-1/6 text-center -mt-4 ">
        <img
          src="AquaCare-logo.png"
          className="text-2xl font-bold relative p-1"
        />
      </div>
      <nav
        className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >

        <a href="#home" className="">
          Inicio
        </a>
        <a href="#services" className="">
          Sobre nosotros
        </a>
        <a href="#aboutUs" className="">
          Servicios
        </a>
        <a href="#services" className="">
          Contacto
        </a>
      </nav>

        <nav>
          Ya tienes tu producto? Haz click <a href = "ProductsID" className="text-prim" > aqui</a>
        </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
