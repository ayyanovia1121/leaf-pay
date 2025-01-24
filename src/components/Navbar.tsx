import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { navLinks } from "../constants";
const Navbar = () => {

  return (
    console.log(navLinks),
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="xl:max-[1280px] w-full">
        <nav className="w-full flex py-6 justify-between items-center">
          <Image src={logo} alt="logo" className="w-[128px] h-[32px]" />
          <div className="sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((navItem) => (
              <Link
                key={navItem.id}
                href={navItem.link}
                className={`font-poppins`}
              >
                <span className=" text-white text-sm !cursor-pointer mr-10">{navItem.title}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
