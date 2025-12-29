import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSend, FiDownload, FiTerminal } from "react-icons/fi";
import mee from '../../Assets/nav.jpeg';
import './Animation.css';

const roles = [
  "MERN Enthusiast",
  "Full Stack Developer",
  "Web Architect",
  "React Developer"
];

export const Homehero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const cardRef = useRef(null);


  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return ("Gud Morning, Universe");
    else if (hour < 18) return ("Gud Afternoon, Universe");
    else if (hour < 22) return ("Gud Evening, Universe");
    else return ("Gud Night, Universe");
  })();

  useEffect(() => {
    const currentText = roles[index];
    let timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentText.length) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -15;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 15;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const resetStyles = () => {
    if (cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    const element = document.querySelector(".reveal-right");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className='relative z-30 min-h-screen flex items-center justify-center px-6 lg:px-[15vw] py-24 overflow-hidden'>

      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-12 lg:gap-20'>
        <div className='w-full mt-15 md:mt-0 md:w-3/5 relative text-center md:text-left order-2 md:order-1 space-y-8'>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2 reveal-hidden shadow-[0_0_15px_rgba(217,70,239,0.1)]">
            <FiTerminal className="text-fuchsia-400 text-sm animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-fuchsia-200 uppercase">
              {greeting}
            </span>
          </div>

          <div className="space-y-2 reveal-hidden">
            <h1 className='text-3xl md:text-4xl font-light text-white/60 tracking-tight'>
              I'm
            </h1>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none'>
              <span className='text-transparent bg-clip-text bg-linear-to-r from-white via-fuchsia-300 to-purple-500 '>
                Naveenkumar S
              </span>
            </h2>
          </div>

          <div className="h-8 flex items-center justify-center md:justify-start reveal-hidden delay-1">
            <p className="text-xl md:text-2xl font-mono font-medium flex items-center gap-2">
              <span className="text-white/60">&gt; Identify: </span>
              <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">
                "{text}"
                <span className="text-fuchsia-500 inline-block ml-1 animate-ping">|</span>
              </span>
            </p>
          </div>

          <p className='text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0 reveal-hidden delay-2'>
            A full-stack web developer specializing in the <span className="text-white font-medium border-b border-fuchsia-500/30">MERN Stack</span>.
            passionate about crafting clean, user-friendly interfaces, building scalable APIs, and delivering real-world applications that people actually enjoy using.
          </p>

          <div className='reveal-hidden relative delay-3 flex gap-4 justify-center md:justify-start pb-10'>
            {[
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/naveenkumar-s-069307332" },
              { icon: <FaGithub />, url: "https://github.com/Navxxnkumar" },
              { icon: <FiSend />, url: "mailto:navxxnkumar@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group relative p-3 bg-white/5 rounded-2xl border border-white/10 text-white/70 
                 hover:text-white hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 
                 transition-all duration-300 hover:-translate-y-2 shadow-lg"
              >
                <div className="relative z-10 text-xl">
                  {social.icon}
                </div>
                <div className="absolute inset-0 z-0 rounded-2xl bg-fuchsia-500/20 blur-xl 
                      opacity-0 group-hover:opacity-100 transition-all duration-500 
                      scale-50 group-hover:scale-110 pointer-events-none">
                </div>
              </a>
            ))}
            <div className="absolute bottom-0 left-0 w-full md:w-58 h-px bg-linear-to-r from-fuchsia-500/50 to-transparent pointer-events-none"></div>
          </div>

          <div className="reveal-hidden delay-4 flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-2">
            <a
              href="/naveenkumar_s.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FiDownload className="transition-transform group-hover:rotate-12" /> CV.RAW
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-fuchsia-500 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>

            <Link
              to="contact"
              smooth={true}
              className='group px-8 py-4 bg-[#050414] border border-white/10 rounded-2xl font-bold text-white hover:border-fuchsia-500/50 transition-all cursor-pointer relative overflow-hidden'
            >
              <span className="relative z-10">SIGNAL ME</span>
              <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-2/5 mt-20 md:mt-0 flex justify-center order-1 md:order-2 reveal-right">
          <div className="relative group">

            <div className="absolute -inset-8 bg-fuchsia-600/20 blur-[60px] rounded-full animate-pulse transition-opacity duration-1000"></div>
            {/* <div className="absolute -inset-10 bg-purple-600/10 blur-[80px] rounded-full animate-pulse delay-700"></div> */}

            {/* Rotating Tech HUD Rings */}
            <div className="absolute -inset-6 border-[1.5px] border-dashed border-fuchsia-500/30 rounded-full animate-[spin_30s_linear_infinite] opacity-50"></div>
            <div className="absolute -inset-10 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse] opacity-30"></div>
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetStyles}
              className="relative w-60 h-64 sm:w-80 sm:h-80 rounded-[3rem] md:rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out z-10 bg-[#050414]"
              style={{ willChange: 'transform' }}
            >
              <img
                src={mee}
                alt="Naveenkumar"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-1000 ease-in-out group-hover:scale-110"
              />

              {/* Holographic Overlay Layer */}
              <div className="absolute inset-0 bg-linear-to-t from-fuchsia-950/40 via-transparent to-transparent opacity-60"></div>

              {/* Inner Label */}
              <div className="absolute bottom-10 left-0 w-full text-center">
                <p className="text-[9px] font-mono text-white/40 tracking-[0.6em] uppercase translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Vanguard Profile
                </p>
              </div>
            </div>

            <div className="absolute md:-top-2 -top-15 right-8 md:-right-12 z-20 bg-white/5 backdrop-blur-2xl border border-white/10 px-5 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl animate-float group-hover:border-fuchsia-500/50 transition-colors duration-500">
              <div className="relative">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]"></span>
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              </div>
              <span className="text-[10px] font-black text-white uppercase tracking-widest whitespace-nowrap">
                Ready for Missile
              </span>
            </div>

            {/* 5. Bottom Tech Decoration */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-linear-to-r from-transparent via-fuchsia-500/50 to-transparent rounded-full blur-[2px] animate-pulse"></div>
          </div>
        </div>

      </div>
    </section>
  );
};