import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export const Homenavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Identity", to: "about" },
    { name: "Arsenal", to: "knowledge" },
    { name: "Missions", to: "projects" },
    { name: "Stellar", to: "certifications" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-999 transition-all duration-500 ease-in-out px-4 md:px-10 
        ${scrolled ? "py-3" : "py-6"}`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-2xl md:rounded-[40px] border border-white/5 
          ${scrolled
            ? "bg-[#050414]/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,92,246,0.2)] border-white/10"
            : "bg-transparent"}`}
      >
        <div className="px-6 md:px-10">
          <div className="flex justify-between items-center h-16">
            <Link to="home" smooth={true} duration={800} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-fuchsia-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-linear-to-br from-violet-600 to-fuchsia-600 text-white rounded-xl flex items-center justify-center font-bold shadow-lg transition-transform group-hover:rotate-12">
                  N
                </div>
              </div>
              <span className="text-xl md:text-2xl font-black bg-linear-to-r from-white via-fuchsia-200 to-purple-400 bg-clip-text text-transparent tracking-tighter">
                Navxxnkumar
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  spy={true}
                  activeClass="text-fuchsia-400 after:w-full"
                  className="relative text-white/70 text-sm font-bold tracking-widest uppercase cursor-pointer transition-all hover:text-white 
                    after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-fuchsia-500 after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}

              
              <Link
                to="contact"
                smooth={true}
                className="relative group px-6 py-2.5 overflow-hidden cursor-pointer rounded-full bg-white text-[#050414] font-bold text-xs tracking-[0.2em] uppercase transition-all hover:pr-10"
              >
                <span className="relative z-10">Signal Me</span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all">
                  →
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-fuchsia-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
            </nav>

            {/* --- MOBILE TOGGLE --- */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="text-white p-2 focus:outline-none"
              >
                <div className="w-6 flex flex-col items-end gap-1.5">
                  <span className={`h-0.5 bg-white transition-all ${open ? "w-6 rotate-45 translate-y-2" : "w-6"}`}></span>
                  <span className={`h-0.5 bg-white transition-all ${open ? "opacity-0" : "w-4"}`}></span>
                  <span className={`h-0.5 bg-white transition-all ${open ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU --- */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out 
          ${open ? "max-h-96 opacity-100 border-t border-white/10" : "max-h-0 opacity-0"}`}>
          <div className="p-6 space-y-4 bg-[#050414]/90 backdrop-blur-2xl rounded-b-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                onClick={() => setOpen(false)}
                className="block text-center text-white/60 text-md font-bold tracking-widest uppercase hover:text-fuchsia-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              onClick={() => setOpen(false)}
              className="block w-full py-3 text-center bg-linear-to-r from-fuchsia-600 to-purple-600 text-white rounded-xl font-black tracking-[0.3em] uppercase"
            >
              Signal Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};