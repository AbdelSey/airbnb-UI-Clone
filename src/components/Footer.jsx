import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="md:font-extralight md:text-lg md:h-[130px] md:w-[1500px] h-[90px] w-[450px] ">
      <div>
        <div className="border-b-2"></div>

        {/* footer container */}

        <div className="flex justify-between mt-4">
          {/* left side of footer */}

          <div className="text-[14.4px] font-medium md:flex md:space-x-4">
            <h1 className="  ">© 2022 Landnd, Inc. All rights reserved</h1>

            <div className="space-x-2 flex ">
              <div className="flex space-x-2">
                <h1 className="hidden md:block"> · </h1>

                <Link to="/" className="hover:underline">
                  Privacy
                </Link>
              </div>
              <div className="flex space-x-2">
                <h1> · </h1>

                <Link to="/" className="hover:underline">
                  Terms
                </Link>
              </div>
              <div className="flex space-x-2">
                <h1> · </h1>

                <Link to="/" className="hover:underline">
                  Site Map
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-3 md:text-xl">
              <h1 className="cursor-pointer">
                <FaFacebookF />
              </h1>
              <h1 className="cursor-pointer">
                {" "}
                <FaTwitter />
              </h1>
              <h1 className="cursor-pointer">
                <FaInstagramSquare />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
