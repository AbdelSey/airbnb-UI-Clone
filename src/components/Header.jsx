import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center justify-center">
        <div className="w-[450px] m-4 md:w-[1450px] md:container h-[2px]">
          <nav className="flex items-center justify-between m-3">
            <div className="flex space-x-2 cursor-pointer">
              <h1 className="text-[35px] font-semibold text-rose-500 cursor-pointer">
                <FaReact />
              </h1>
              <h1 className="font-bold text-rose-500 text-xl hidden md:block">
                {" "}
                LandDnD{" "}
              </h1>
            </div>

            <ul className="flex space-x-4 font-semibold pointer-none">
              <Link to="/" className="hidden md:flex">
                <h1 className="cursor-pointer"> Become A Host</h1>
              </Link>

              <Link to="/" className="cursor-pointer">
                <h1> Help </h1>
              </Link>

              <Link to="/" className="cursor-pointer">
                <h1> Sign up </h1>
              </Link>

              <Link to="/" className="cursor-pointer">
                <h1> Log in </h1>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
