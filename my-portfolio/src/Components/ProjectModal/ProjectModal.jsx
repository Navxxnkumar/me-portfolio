import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FiGithub, FiExternalLink, FiX, FiCpu, FiActivity } from "react-icons/fi";

const ProjectModal = ({ project, onClose }) => {
    
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    return createPortal(
        <div className='fixed inset-0 z-9999 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 transition-all duration-500'>
            <div className="absolute inset-0" onClick={onClose}></div>
            <div className='relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a16] border border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(192,38,211,0.2)] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300'>
                <button
                    onClick={onClose}
                    className='absolute top-6 right-6 z-60 p-2 bg-white/5 border border-white/10 rounded-full text-white hover:bg-fuchsia-500 hover:scale-110 transition-all active:scale-95'
                >
                    <FiX size={20} />
                </button>

                <div className='md:w-1/2 w-full h-[300px] md:h-auto relative bg-[#050510] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/10'>
                    <div className="absolute inset-0 bg-linear-to-br from-fuchsia-500/10 to-transparent"></div>

                    <div className="relative group w-full h-full flex items-center justify-center">
                        <img
                            src={project.image}
                            alt={project.title}
                            className='max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_30px_rgba(192,38,211,0.3)] group-hover:shadow-[0_0_50px_rgba(192,38,211,0.5)] transition-all duration-700'
                        />
                        
                        <div className="absolute inset-0 w-full h-1 bg-fuchsia-500/50 blur-sm animate-[scan_3s_linear_infinite] pointer-events-none rounded-full"></div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='md:w-1/2 w-full p-8 md:p-10 overflow-y-auto custom-scrollbar flex flex-col'>

                    
                    <div className="flex items-center gap-3 mb-2">
                        <FiCpu className="text-fuchsia-500" />
                        <span className="text-[10px] font-mono tracking-[0.4em] text-fuchsia-400 uppercase">Mission Intel</span>
                    </div>

                    <h3 className='text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter'>
                        {project.title}
                    </h3>

                    
                    <div className="relative mb-8">
                        <p className='text-gray-400 text-sm md:text-base leading-relaxed pl-4 border-l-2 border-fuchsia-500/30'>
                            {project.description}
                        </p>
                    </div>

                    
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4 opacity-50">
                            <FiActivity size={14} className="text-white" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Core Technologies</span>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className='px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-fuchsia-300 uppercase tracking-wider hover:bg-fuchsia-500/10 hover:border-fuchsia-500/50 transition-colors'
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    
                    <div className='flex gap-4 mt-auto pt-6'>
                        <a
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 flex items-center justify-center gap-2 cursor-pointer py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95'
                        >
                            <FiGithub className="text-2xl ml-3 md:ml-0"/> Access Source
                        </a>
                        <a
                            href={project.webapp}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 flex items-center justify-center cursor-pointer gap-2 py-4 bg-fuchsia-600 text-white rounded-2xl font-bold text-xs uppercase  tracking-widest shadow-[0_10px_20px_-5px_rgba(192,38,211,0.5)] hover:bg-fuchsia-500 hover:-translate-y-1 transition-all active:scale-95'
                        >
                            <FiExternalLink className="text-2xl ml-3 md:ml-0"/> Launch System
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default ProjectModal;