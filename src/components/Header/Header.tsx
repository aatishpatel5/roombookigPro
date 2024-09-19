
"use client";

import ThemeContext from "@/context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header: React.FC<{ phoneNumber: string }> = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const { data: session } = useSession();

  return (
    <header className="py-4 px-4 container mx-auto text-xl flex flex-wrap items-center justify-between ">
      {/* Logo and user icon section */}
      <div className="flex items-center w-full md:w-2/3 justify-between md:justify-start">
        <Link href={"/"} className="font-serif  text-2xl">
          Taj Hotel
        </Link>

        <ul className="flex items-center ml-8 md:ml-16">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image src={session.user.image} alt={session.user.name!}
                    width={40}  height={40}/>
                  </div>
                ) : (
                  <FaUserCircle className="cursor-pointer text-2xl" />
                )}
              </Link>
            ) : (
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer text-2xl" />
              </Link>
            )}
          </li>
          <li className="ml-4">
            {darkTheme ? (
              <MdOutlineLightMode
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem("hotel-theme");
                }}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <MdDarkMode
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem("hotel-theme", "true");
                }}
                className="cursor-pointer text-2xl"
              />
            )}
          </li>
        </ul>

        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center hover:text-gray-800 absolute right-28 md:right-[30vw] md:absolute transition-transform duration-300 transform hover:scale-125"
        >
          <FaPhoneAlt className="mr-2" />
          <span className="hidden lg:inline">Call: {phoneNumber}</span>
        </a>

        {/* Hamburger Icon for small screens */}
        <div
          className="block md:hidden ml-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </div>
      </div>

      {/* Menu for large screens */}
      <div className="hidden md:flex w-full md:w-1/3 justify-end">
        <ul className="flex flex-row items-center gap-8 font-medium">
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href="/">Home</Link>
          </li>
          {/* <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href="/rooms">Room</Link>
          </li> */}
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute right-4 top-16 flex flex-col items-center gap-4 font-medium bg-black text-white p-4 rounded-md shadow-lg w-40 z-50">
          <li className="hover:bg-gray-700 duration-500 transition-all p-2 w-full text-center">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-gray-700 duration-500 transition-all p-2 w-full text-center">
            <Link href="/rooms">Room</Link>
          </li>
          <li className="hover:bg-gray-700 duration-500 transition-all p-2 w-full text-center">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
};
export default Header;
