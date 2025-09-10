"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      {/* Main wrapper for background and rounded corners */}
      <div className="relative w-full max-w-5xl mx-auto bg-muted rounded-lg duration-700">
        <nav className="px-6 py-4 flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/" className="text-xl font-bold text-primary z-20">
            Troscán
          </Link>

          {/* Center: Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary font-semibold duration-500 hover:text-secondary hover:duration-500"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Desktop "Contact Us" Button */}
          <div className="hidden md:block">
            <button className="py-4 px-6 rounded-lg bg-primary text-accent text-sm duration-700 hover:bg-secondary hover:duration-700 cursor-pointer">
              <Link
                href="#"
              >
                Contact Us
              </Link>
            </button>
          </div>

          {/* Right: Mobile Hamburger Button */}
          <div className="md:hidden z-20">
            <button
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-8 bg-primary cursor-pointer rounded-lg flex flex-col justify-center items-center space-y-1.5 focus:outline-none"
            >
              {/* Humberger menu-r line 2ta, ja 'X' hoye jabe */}
              <span
                className={`block h-0.5 w-5 bg-accent transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-[4px]" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-accent transition-transform duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {/* Eta shudhu mobile-e dekhabe and menu open thakle */}
        <div
          className={`md:hidden duration-700 overflow-hidden will-change-scroll ${
            isMenuOpen ? "max-h-screen pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 px-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block w-full text-center py-2 text-primary font-semibold text-sm duration-500 hover:text-secondary hover:duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" asChild>
              <Link
                href="#"
                className="text-center text-sm text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
