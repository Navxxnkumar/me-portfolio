import React, { useEffect, useState } from 'react';
import './Animation.css';
import Autoshow from './Autoshow';

import html from '../../Assets/Html.png';
import css from '../../Assets/css-3.png';
import js from '../../Assets/js.png';
import react from '../../Assets/react.svg';
import vite from '../../Assets/vite.svg';
import bootstrap from '../../Assets/bootstrap.png';
import tailwind from '../../Assets/tailwindcss.svg';
import node from '../../Assets/nodejs.svg';
import express from '../../Assets/express-js.png';
import mysql from '../../Assets/mysql.png';
import mongodb from '../../Assets/mongod.svg';
import git from '../../Assets/git.png';
import github from '../../Assets/github.png';
import vscode from '../../Assets/vscode.svg';
import canva from '../../Assets/canva.png';
import netlify from '../../Assets/netlify.svg';
import firebase from '../../Assets/firebase.svg';
import vercel from '../../Assets/vercel.svg';
import { SkillItem } from './Skill';

export const Homeknowledge = () => {
  const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JAVA SCRIPT" },
    { img: react, name: "REACT" },
    { img: vite, name: "VITE JS" },
    { img: bootstrap, name: "BOOTSTRAP" },
    { img: tailwind, name: "TAILWIND" },
    { img: node, name: "NODE JS" },
    { img: express, name: "EXPRESS JS" },
    { img: mysql, name: "MYSQL" },
    { img: mongodb, name: "MONGODB" },
    { img: git, name: "GIT" },
    { img: github, name: "GITHUB" },
    { img: vscode, name: "VS CODE" },
    { img: canva, name: "CANVA" },
    { img: netlify, name: "NETLIFY" },
    { img: firebase, name: "FIREBASE" },
    { img: vercel, name: "VERCEL" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, [skills.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        } else {
          entry.target.classList.remove('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.skill-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id='knowledge' className='relative z-30 py-24 px-[5vw] md:px-[10vw] lg:px-[20vw] overflow-hidden'>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <Autoshow>
        <div className='text-center mb-20'>
          <h4 className="text-fuchsia-500 text-xs font-bold tracking-[0.5em] uppercase mb-4">My Knowledge</h4>
          <h2 className='text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Tech <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>Arsenal</span>
          </h2>
          <div className='w-25 h-1 rounded-full bg-linear-to-r from-fuchsia-600 to-purple-600 mx-auto mt-6 shadow-[0_0_15px_rgba(192,38,211,0.5)]'></div>
          <p className='text-gray-400 mt-6 md:text-lg text-sm font-medium max-w-2xl mx-auto opacity-80'>
            A sophisticated stack of technologies I leverage to build high-performance digital experiences.
          </p>
        </div>
      </Autoshow>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-reveal reveal-hidden w-[calc(50%-1.5rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <div className={`
                group relative flex flex-col items-center justify-center p-6 rounded-3xl
                skill-card-glass border transition-all duration-700 h-full
                ${i === activeIndex 
                  ? "border-fuchsia-500/80 bg-fuchsia-500/10 shadow-[0_0_30px_rgba(192,38,211,0.3)] scale-105" 
                  : "border-white/10"}
                hover:border-fuchsia-500/50 hover:-translate-y-3 hover:scale-105
              `}>

              <div className={`absolute inset-0 rounded-3xl bg-linear-to-br from-fuchsia-500/10 to-transparent transition-opacity duration-700 
                ${i === activeIndex ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
              </div>

              <div className="relative mb-4 w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl transition-colors shadow-inner">
                <img
                  src={skill.img}
                  alt={skill.name}
                  className={`w-10 h-10 object-contain transition-transform duration-700 
                    ${i === activeIndex ? "scale-110 rotate-6" : "group-hover:scale-110 group-hover:rotate-6"}`}
                />
              </div>

              <h3 className={`relative text-[10px] font-bold tracking-[0.2em] text-center uppercase transition-colors duration-700
                ${i === activeIndex ? "text-white" : "text-white/40 group-hover:text-white"}`}>
                {skill.name}
              </h3>

              <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full transition-all duration-700
                ${i === activeIndex ? "bg-fuchsia-500 animate-ping" : "bg-white/10 group-hover:bg-fuchsia-500 group-hover:animate-ping"}`}>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};