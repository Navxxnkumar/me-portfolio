import React, { useState, useEffect, useRef } from 'react';
import './Animation.css';
import Autoshow from './Autoshow';
import { GrSend } from "react-icons/gr";
import { MdRocketLaunch, MdRocket, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useForm } from '@formspree/react';

export const Homecontact = () => {
  const [send, setSend] = useState({ user_name: "", user_email: "", subject: "", message: "" });
  const [err, setErr] = useState({});
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [state, handleSubmitFormspree] = useForm("mojqvlvw");

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        } else {
          // Remove this line if you want the animation to happen ONLY ONCE
          entry.target.classList.remove('reveal-visible');
        }
      });
    }, { threshold: 0.20 }); // Triggers when 15% of the element is visible

    const elements = document.querySelectorAll('.reveal-hidden');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current.disconnect();
  }, []);

  const handleChange = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const seterr = {};
    if (!send.user_name.trim()) seterr.user_name = "Please Send your Full-Name..!";
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(send.user_email)) seterr.user_email = "Please Send Valid-Email..!";
    if (!send.subject.trim()) seterr.subject = "Please Send Your-Subject..!";
    if (!send.message.trim()) seterr.message = "Please Send Me a Msg or Feedback..!";
    setErr(seterr);
    return Object.keys(seterr).length === 0;
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (validation()) {
      console.log(send);

      await handleSubmitFormspree(e);

      setSend({ user_name: "", user_email: "", subject: "", message: "" });
      setErr({});
    }
  };

  if (state.succeeded) {
    return (
      <div className="text-white text-center p-8 bg-white/5 rounded-3xl">
        <MdRocketLaunch className="text-5xl text-fuchsia-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-gray-400 mt-2">I'll get back to you as soon as possible.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 text-fuchsia-400 underline"
        >
          Send another?
        </button>
      </div>
    );
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id='contact' className='relative z-30 py-24 pb-24 mt-25 px-[10vw] md:px-[6vw] lg:px-[18vw]'>
      {/* <Autoshow> */}
      <div className='reveal-hidden'>
        <div className='text-center mb-20'>
          <h4 className="text-fuchsia-500 text-xs font-bold tracking-[0.5em] uppercase mb-4">Cosmic Frequency</h4>
          <h2 className='text-4xl md:text-5xl font-bold text-white tracking-tight'>
            Leave a <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>Legacy Message</span>
          </h2>
          <div className='w-35 h-1 rounded-full bg-linear-to-r from-fuchsia-600 to-purple-600 mx-auto mt-6 shadow-[0_0_15px_rgba(192,38,211,0.5)]'></div>
          <p className='text-gray-400 mt-6 md:text-lg text-sm font-medium max-w-2xl mx-auto opacity-80'>
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.
          </p>
          <div className="mt-6 flex justify-center items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-fuchsia-500 animate-ping"></span>
            <p className="text-white/60 font-mono text-[0.75rem] uppercase tracking-widest">Wanna bridge the distance?</p>
          </div>
        </div>
      </div>
      {/* </Autoshow> */}

      <div className='pt-10 flex flex-col-reverse md:flex-row justify-between gap-x-12 items-start'>
        <div className='w-full md:w-1/2 flex flex-col gap-y-10'>

          {/* Mission Card */}
          <div className='reveal-hidden delay-1'>
            <div
              className='relative w-full max-w-md mt-16 md:mt-0 group'
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className='relative overflow-hidden bg-[#0d081f]/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl transition-all duration-500'>
                <div
                  className='pointer-events-none absolute inset-0 z-0 transition-opacity duration-500'
                  style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(130, 69, 236, 0.15), transparent 40%)`,
                  }}
                />
                <div className='relative z-10'>
                  <h3 className='text-2xl text-white font-bold text-center mb-8 tracking-tight'>
                    Ready For <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>A Mission!</span>
                  </h3>
                  <div className='space-y-6'>
                    <div className='flex items-center gap-5 group/item'>
                      <div className='shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-lg group-hover/item:border-fuchsia-500/50 transition-all duration-300'>
                        <MdRocketLaunch className='text-fuchsia-400 text-2xl group-hover/item:rotate-45 transition-transform animate-pulse' />
                      </div>
                      <div className='text-left'>
                        <p className='text-white/90 font-medium'>A LightYear Jump From</p>
                        <p className='text-sm text-fuchsia-300/60 italic'>Paal Kova Universe...</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-5 group/item'>
                      <div className='shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 shadow-lg group-hover/item:border-purple-500/50 transition-all duration-300'>
                        <MdRocket className='text-purple-400 text-2xl rotate-45 group-hover/item:rotate-0 transition-transform' />
                      </div>
                      <div className='text-left'>
                        <p className='text-white/90 font-medium'>Landed In The</p>
                        <p className='text-sm text-purple-300/60 font-mono italic'>Chennai-Hub..!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-fuchsia-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-1000'></div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="reveal-hidden delay-2 w-full max-w-md mt-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-linear-to-r from-transparent to-fuchsia-500"></div>
              <h4 className="text-white/60 uppercase tracking-[0.4em] text-[11px] font-bold">
                Interstellar <span className="text-fuchsia-400">Frequencies</span>
              </h4>
              <div className="animate-ping w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_fuchsia]"></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <MdEmail />, label: 'Mail', color: 'border-blue-500', link: 'mailto:navxxnkumar@gmail.com' },
                { icon: <FaGithub />, label: 'Github', color: 'border-slate-400', link: 'https://github.com/Navxxnkumar' },
                { icon: <FaLinkedinIn />, label: 'LinkedIn', color: 'border-indigo-500', link: 'https://www.linkedin.com/in/naveenkumar-s-069307332' },
              ].map((social, idx) => (
                <a
                  href={social.link}
                  key={idx}
                  className="group relative flex flex-col items-center justify-center p-5 rounded-lg bg-white/3 border border-white/5 transition-all duration-500 hover:bg-white/10"
                >
                  <span className={`absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 ${social.color} opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 rounded-tl-sm`}></span>
                  <span className={`absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 ${social.color} opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 rounded-tr-sm`}></span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 ${social.color} opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-300 rounded-bl-sm`}></span>
                  <span className={`absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 ${social.color} opacity-0 group-hover:w-4 group-hover:h-4 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300 rounded-br-sm`}></span>

                  <div className="text-2xl text-white/50 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 z-10">
                    {social.icon}
                  </div>
                  <span className="text-[10px] mt-3 text-white/30 tracking-widest uppercase font-semibold group-hover:text-white/80 z-10 transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { icon: <FaInstagram />, label: 'Instagram', color: 'border-pink-500', link: 'https://www.instagram.com/mr.crazy._____.boy?igsh=MXFsZDF3Z2tpajZ5Zg==' },
                { icon: <FaWhatsapp />, label: 'WhatsApp', color: 'border-emerald-500', link: 'mailto:+91 90957 23350' },
              ].map((social, idx) => (
                <a
                  href={social.link}
                  key={idx}
                  className="group relative flex items-center gap-4 px-6 py-4 rounded-lg bg-white/3 border border-white/5 transition-all duration-500 hover:bg-white/10"
                >
                  <span className={`absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 ${social.color} opacity-0 group-hover:w-3 group-hover:h-3 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}></span>
                  <span className={`absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 ${social.color} opacity-0 group-hover:w-3 group-hover:h-3 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300`}></span>

                  <div className="text-2xl text-white/50 group-hover:text-white group-hover:rotate-360 transition-all duration-700 z-10">
                    {social.icon}
                  </div>
                  <div className="flex flex-col z-10">
                    <span className="text-xs text-white/60 font-bold tracking-widest group-hover:text-white transition-colors uppercase ">{social.label}</span>
                    <span className="text-[8px] text-white/20 uppercase tracking-[0.2em]">Ready to Sync</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className='reveal-hidden delay-3 relative w-full max-w-md bg-white/2 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_-12px_rgba(130,69,236,0.5)]'>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-fuchsia-600/10 blur-[80px] rounded-full pointer-events-none"></div>

          <h3 className='text-2xl font-bold text-white text-center tracking-tight mb-6'>
            Send Me <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>A Msg!</span>
          </h3>

          <form onSubmit={handleSumbit} className='flex flex-col space-y-2'>
            {[
              { name: 'user_name', type: 'text', placeholder: 'Your Name', value: send.user_name, err: err.user_name },
              { name: 'user_email', type: 'email', placeholder: 'Your Email', value: send.user_email, err: err.user_email },
              { name: 'subject', type: 'text', placeholder: 'Subject', value: send.subject, err: err.subject }
            ].map((input) => (
              <div key={input.name} className="flex flex-col">
                <input
                  type={input.type}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className='w-full rounded-xl px-4 py-3 bg-white/5 text-white border border-white/10 focus:outline-none focus:border-fuchsia-500/50 focus:ring-4 focus:ring-fuchsia-500/5 transition-all duration-300 placeholder:text-gray-600'
                />
                <p className={`text-fuchsia-400 text-[10px] uppercase tracking-widest mt-1 ml-2 transition-all duration-300 ${input.err ? "opacity-100 h-4" : "opacity-0 h-0"}`}>
                  {input.err}
                </p>
              </div>
            ))}

            <div className="flex flex-col">
              <textarea
                name="message"
                rows={4}
                value={send.message}
                onChange={handleChange}
                placeholder='Message Me'
                className='w-full rounded-xl px-4 py-3 bg-white/5 text-white border border-white/10 focus:outline-none focus:border-fuchsia-500/50 focus:ring-4 focus:ring-fuchsia-500/5 transition-all duration-300 placeholder:text-gray-600 resize-none'
              ></textarea>
              <p className={`text-fuchsia-400 text-[10px] uppercase tracking-widest mt-1 ml-2 transition-all duration-300 ${err.message ? "opacity-100 h-4" : "opacity-0 h-0"}`}>
                {err.message}
              </p>
            </div>

            <button
              type="submit" disabled={state.submitting}
              className="group relative w-full mt-4 py-4 bg-linear-to-r from-fuchsia-600 to-purple-600 rounded-xl overflow-hidden shadow-lg transition-all active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center justify-center gap-2 text-white font-bold tracking-widest uppercase text-xs">
                <GrSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>{state.submitting ? "Sending..." : "Blast Off!"}</span>
              </div>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};