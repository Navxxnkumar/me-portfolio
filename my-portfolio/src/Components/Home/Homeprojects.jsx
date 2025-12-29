
import { useState, useEffect } from 'react';
import { projects } from '../../Constant';
import ProjectModal from "../ProjectModal/ProjectModal";
import Autoshow from './Autoshow';
import { FiExternalLink, FiLayers, FiArrowRight } from "react-icons/fi";
import './Animation.css';

export const Homeprojects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const elements = document.querySelectorAll(".mission-card-wrapper");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          } else {
            entry.target.classList.remove("reveal-active");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  return (
    <>
      <section id='projects' className='relative z-30 py-24 px-[7vw] lg:px-[20vw] overflow-hidden'>

        <Autoshow>
          <div className='text-center mb-20'>
            <h4 className="text-fuchsia-500 text-xs font-bold tracking-[0.5em] uppercase mb-4">Mission Logs</h4>
            <h2 className='text-4xl md:text-5xl font-black text-white tracking-tighter'>
              Deployed <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>Systems</span>
            </h2>
            <div className='w-24 h-1.5 rounded-full bg-linear-to-r from-fuchsia-600 to-purple-600 mx-auto mt-6 shadow-[0_0_20px_rgba(192,38,211,0.6)]'></div>

            <p className='text-gray-400 mt-8 md:text-lg text-sm font-medium max-w-2xl mx-auto leading-relaxed'>
              Strategic deployments across the digital frontier. High-performance architectures built with the MERN stack.
            </p>

            <div className="mt-6 flex justify-center items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-fuchsia-500 animate-ping"></span>
              <p className="text-white/60 font-mono text-[0.75rem] uppercase tracking-widest">Select system to expand data</p>
            </div>
          </div>
        </Autoshow>

        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{ "--stagger": index }}
              className="mission-card-wrapper cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className='group relative h-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-fuchsia-500/50 hover:bg-white/8 flex flex-col'>
                <div className='relative h-64 w-full overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1'
                  />

                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiExternalLink className="text-fuchsia-400 text-xl" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-[#020205] via-transparent to-transparent opacity-80"></div>

                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono font-bold text-white/80 tracking-widest uppercase">System.{index + 1}</span>
                  </div>
                </div>

                <div className='p-8 relative grow'>
                  <div className="flex items-center gap-3 mb-4">
                    <FiLayers className="text-fuchsia-500 text-2xl" />
                    <h3 className='text-2xl font-bold text-white group-hover:text-fuchsia-400 transition-colors'>
                      {project.title}
                    </h3>
                  </div>

                  <p className='text-gray-400 mb-8 line-clamp-3 leading-relaxed text-sm md:text-base'>
                    {project.description}
                  </p>

                  <div className='mt-auto flex flex-wrap gap-2'>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className='text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg bg-fuchsia-500/5 border border-fuchsia-500/20 text-fuchsia-300 transition-all group-hover:bg-fuchsia-500/10'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-transparent via-fuchsia-500 to-transparent group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};