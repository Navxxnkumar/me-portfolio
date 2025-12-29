import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Openings.css';
import { MdRocketLaunch, MdRocket } from "react-icons/md";

export const Openings = () => {
  const navigate = useNavigate();

  const handleEnterUniverse = () => {
    navigate('/home');
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#020205]/80  overflow-hidden px-4 md:px-0">
      <div className="absolute inset-0 The class bg-[radial-gradient(circle_at_center,rgba(192,38,211,0.1)_0%,transparent_80%)] md:bg-[radial-gradient(circle_at_center, rgba(192,38,211,0.12)_0%,_transparent_65%)]"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl">

        <div className="mb-8 md:mb-10 flex items-center gap-2 md:gap-3 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-white/5 bg-white/3 backdrop-blur-md animate-fade-in">
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-fuchsia-500"></span>
          </span>
          <span className="text-[8px] md:text-[10px] font-mono text-fuchsia-100 tracking-[0.3em] md:tracking-[0.4em] uppercase">
            Hello! <span className="opacity-40">Welcome On-Board</span>
          </span>
        </div>


        <div className="relative mb-12 transition-transform duration-700 hover:scale-3d hover:-rotate-180">
          <div className="absolute -inset-10 bg-fuchsia-600/20 blur-[100px] rounded-full animate-pulse"></div>
          <div className="w-32 h-32 md:w-42 md:h-42 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 border-t-2 border-fuchsia-500 rounded-full animate-spin duration-3000"></div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">N</h1>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 animate-fade-up px-2">
          <div className='flex items-center justify-center gap-4'>
            <div className="h-px w-8 bg-linear-to-r from-transparent to-fuchsia-500"></div>
            <h4 className="text-[10px] md:text-xs font-bold tracking-[1em] text-fuchsia-400 uppercase">System Online</h4>
            <div className="h-px w-8 bg-linear-to-l from-transparent to-fuchsia-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1]">
            Naveenkumar <br />
            <span className="text-transparent -tracking-wide bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-400">
              Universe
            </span>
          </h2>
          <p className="text-gray-400 text-[10px] md:text-sm font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
            Initializing modern <span className="text-white/70">digital experiences</span>
          </p>
        </div>

        <button
          onClick={handleEnterUniverse}
          className="mt-12 md:mt-6 group relative px-8 md:px-12 py-4 md:py-5 overflow-hidden rounded-full bg-white/3 border border-white/10 text-white transition-all duration-700 "
        >
          <div className="absolute inset-0 bg-linear-to-r from-fuchsia-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative flex items-center gap-3 md:gap-4 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase">
            Launch System
            <div className="relative w-5 h-5 md:w-6 md:h-6 flex items-center justify-center overflow-hidden">
              <MdRocket className="absolute text-base md:text-xl transition-all duration-500 group-hover:-translate-y-12 opacity-100 group-hover:opacity-0" />
              <MdRocketLaunch className="absolute text-base md:text-xl text-fuchsia-400 opacity-0 -translate-x-8 translate-y-8 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-45 " />
            </div>
          </span>
        </button>
      </div>

      <div className="hidden sm:block absolute bottom-6 left-6 md:bottom-10 md:left-10 w-12 h-12 md:w-20 md:h-20 border-l border-b border-white/5 rounded-bl-2xl md:rounded-bl-3xl"></div>
      <div className="hidden sm:block absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-20 md:h-20 border-r border-t border-white/5 rounded-tr-2xl md:rounded-tr-3xl"></div>
    </section>
  );
};