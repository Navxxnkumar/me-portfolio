// import React from 'react'
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FiSend } from "react-icons/fi";
// import { Link } from 'react-scroll';


// export const Homefooter = () => {
//   return (
//     <footer className='relative z-30 footer md:footer-horizontal text-white footer-center text-base-content p-4'>
//       <aside className='text-center'>
//         <p className='mb-8'>Made with ❤️ by  <span className='text-fuchsia-400 pl-1 cursor-pointer text-md font-bold'>Nav</span></p>
//         <nav className='mb-8 flex justify-center flex-wrap '>
//           <Link to={'home'} smooth={true} duration={500} className='text-sm font-medium cursor-pointer text-white hover:text-fuchsia-400 mx-2'>Home</Link>
//           <Link to={'about'} smooth={true} duration={500} className='text-sm font-medium cursor-pointer text-white hover:text-fuchsia-400 mx-2'>About</Link>
//           <Link to={'Knowledge'} smooth={true} duration={500} className='text-sm font-medium cursor-pointer text-white hover:text-fuchsia-400 mx-2'>Knowledge</Link>
//           <Link to={'projects'} smooth={true} duration={500} className='text-sm font-medium cursor-pointer text-white hover:text-fuchsia-400 mx-2'>Projects</Link>
//           <Link to={'certifications'} smooth={true} duration={500} className='text-sm font-medium cursor-pointer text-white hover:text-fuchsia-400 mx-2'>Certifications</Link>
//         </nav>
//         <div className='mb-5 flex gap-4 justify-center'>
//           <a href="https://www.linkedin.com/in/naveenkumar-s-069307332" target="_blank" rel="noopener noreferrer"
//             className="p-3 bg-gray-800/0 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700/0 transition-all duration-300 hover:scale-110 border-2 border-gray-700 hover:border-[#8245ec] relative group">
//             <FaLinkedin />
//             <div className='absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
//           </a>

//           <a href="https://github.com/Navxxnkumar" target="_blank" rel="noopener noreferrer"
//             className="p-3 bg-gray-800/0 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700/0 transition-all duration-300 hover:scale-110 border-2 border-gray-700 hover:border-[#8245ec] relative group">
//             <FaGithub />
//             <div className='absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
//           </a>
//           <a href="mailto:navxxnkumar@gmail.com" target="_blank"
//             className="p-3 bg-gray-800/0 backdrop-blur-sm rounded-full text-gray-400 hover:text-white hover:bg-gray-700/0 transition-all duration-300 hover:scale-110 border-2 border-gray-700 hover:border-[#8245ec] relative group">
//             <FiSend />
//             <div className='absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm'></div>
//           </a>
//         </div>
//         <div className='border-t border-white/50 mt-4 pt-3 text-sm text-gray-400  '>
//           <p>© 2025 Navxxnkumar. All rights reserved.</p>
//         </div>
//       </aside>
//     </footer>
//   )
// }
import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend, FiArrowUp } from "react-icons/fi";
import { Link } from 'react-scroll';

export const Homefooter = () => {
  const footerLinks = [
    { name: "Identity", to: "about" },
    { name: "Arsenal", to: "knowledge" },
    { name: "Missions", to: "projects" },
    { name: "Stellar", to: "certificates" },
    { name: "Signal", to: "contact" }
  ];

  return (
    <footer className="relative z-30 w-full pt-12 pb-8 px-4 mt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-linear-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="group cursor-pointer flex flex-col items-center mb-8"
        >
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 group-hover:bg-fuchsia-500/10 transition-all duration-500 shadow-2xl">
            <FiArrowUp className="text-white group-hover:-translate-y-1 transition-transform" />
          </div>
          <span className="mt-4 text-xl font-black bg-linear-to-r from-white to-fuchsia-400 bg-clip-text text-transparent tracking-tighter">
            Navxxnkumar
          </span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-fuchsia-400 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-6 mb-12">
          {[
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/naveenkumar-s-069307332", label: "LinkedIn" },
            { icon: <FaGithub />, url: "https://github.com/Navxxnkumar", label: "GitHub" },
            { icon: <FiSend />, url: "mailto:navxxnkumar@gmail.com", label: "Email" }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group relative p-4 bg-white/5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative z-10 text-xl">{social.icon}</div>
              <div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-[10px] font-mono tracking-widest uppercase text-white/30">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            System Online: 2026 Release
          </div>

          <p className="text-center">
            Designed with <span className="text-[12px] text-fuchsia-500 animate-pulse">❤</span> by <span className='text-purple-500 font-bold'>Nav</span>
          </p>

          <div className="mt-4 md:mt-0">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>

      {/* Background Ambient Orb */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </footer>
  );
};