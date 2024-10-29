"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdDownload } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-50 sticky top-0">
      <header className="pb-5 md:pb-0 text-gray-600 body-font bg-yellow-100">
        <div className="container mx-auto flex flex-wrap p-2 items-center">
          {/* Logo Section */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <a className="flex title-font font-medium items-center text-gray-900">
              <Image
                src="/accets/images/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-[70px]"
              />
              <span className="ml-3 text-xl">Zehra Portfolio</span>
            </a>

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-900 focus:outline-none"
            >
              <RxHamburgerMenu size={28} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-yellow-500">
              Home
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-yellow-500">
              About
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-yellow-500">
              Skills
            </Link>
            <Link href={"#projects"} className="mr-5 hover:text-yellow-500">
              Projects
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-yellow-500">
              Contact
            </Link>
          </nav>

          {/* Download CV Button for Desktop */}
          <a
            href="/accets/cv/hareem_zehra_cv.pdf"
            download
            className="hidden md:inline-flex items-center bg-yellow-500 hover:bg-yellow-700 text-white border-0 py-2 px-3 focus:outline-none text-base mt-4 md:mt-0"
          >
            Download CV <IoMdDownload className="text-lg ml-2" />
          </a>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-yellow-100 text-center p-5">
            <Link
              href={"/"}
              className="block py-2 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="block py-2 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href={"#skills"}
              className="block py-2 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href={"#projects"}
              className="block py-2 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href={"#contact"}
              className="block py-2 hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="/accets/cv/hareem_zehra_cv.pdf"
              download
              className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-3 mt-3 mx-auto inline-flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              Download CV <IoMdDownload className="text-lg ml-2" />
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
