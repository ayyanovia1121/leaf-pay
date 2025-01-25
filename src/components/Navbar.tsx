'use client';
import React from "react";
import Image from "next/image";
import { logo, menu, close } from "../assets";
import Link from "next/link";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
const [togle, setTogle] = useState(false);
  return (
    <div className="flex justify-center items-center sm:px-16 px-6">
      <div className="xl:max-[1280px] w-full">
        <nav className="w-full flex py-6 justify-between items-center">
          <Image src={logo} alt="logo" className="w-[128px] h-[32px]" />
          <div className="sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((navItem, index) => (
              <Link key={navItem.id} href={navItem.link}>
                <span
                  className={`text-white font-poppins font-normal text-sm ${
                    index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } !cursor-pointer`}
                >
                  {navItem.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={togle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setTogle((prev) => !prev)}
            />
            <div
              className={`${
                togle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <div className="flex flex-col justify-end items-center flex-1">
                {navLinks.map((navItem, index) => (
                  <Link key={navItem.id} href={navItem.link}>
                    <span
                      className={`text-white font-poppins font-normal text-sm ${
                        index === navLinks.length - 1 ? "mr-0" : "mb-4"
                      } !cursor-pointer`}
                    >
                      {navItem.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
