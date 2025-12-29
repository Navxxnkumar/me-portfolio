import React from 'react'
import { Link } from 'react-scroll'
import './Animation.css';
import sla from '../../Assets/sla.jpg';
import naan from '../../Assets/naan.png';
import mern from '../../Assets/mern.jpeg';
import Autoshow from './Autoshow';
import hustler from '../../Assets/hustler.jpeg';
import cyber from '../../Assets/cyber.png';
import ZoomUpObserver from './ZoomUp';

export const Homecertificates = () => {
  return (
    <section id='certifications' className='relative z-30 py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <Autoshow>
        <div className='text-center mb-20'>
          <h4 className="text-fuchsia-500 text-xs font-bold tracking-[0.5em] uppercase mb-4">Stellar Achievements</h4>
          <h2 className='text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Digital <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>Credentials</span>
          </h2>
          <div className='w-35 h-1 rounded-full bg-linear-to-r from-fuchsia-600 to-purple-600 mx-auto mt-6 shadow-[0_0_15px_rgba(192,38,211,0.5)]'></div>
          <p className='text-gray-400 mt-6 md:text-lg text-sm font-medium max-w-2xl mx-auto opacity-80'>
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </div>
      </Autoshow>


      <div className='relative'>
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 rounded-full bg-white w-1 h-full'></div>
        <div className='flex flex-col sm:flex-row items-center mb-16 sm:justify-start'>
          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
            <img src={sla} alt="My college" className='h-full w-full object-cover rounded-full' />
          </div>

          <ZoomUpObserver>
            <div className='  w-full  md:w-[270px] lg:w-[350px] p-4 sm:p-8 rounded-2xl  
            border-2  border-white/70 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
             md:mr-10 md:ml-10 lg:mr-5 lg:ml-5 ml-8 transform transition-transform duration-300 hover:scale-105 '>
              <div className='flex justify-center'>
                <div className='  w-full h-full  rounded-md bg-white overflow-hidden'>
                  <img src={mern} alt="My college" className='w-full h-full object-cover' />
                </div>
              </div>
              <div className='flex flex-col   md:space-x-4 space-x-5'>
                <div className='flex flex-col justify-between mt-4'>
                  <div>
                    <h3 className='text-lg md:text-md     font-semibold text-white'>MERN Full Stack</h3>
                    <h4 className='text-xs md:text-md   text-gray-300'>SLA Institute</h4>
                  </div>
                  <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>JULY 2025 - DEC 2025</p>
                </div>
              </div>
              <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>Completed a 6-month MERN stack training covering MySQL,MongoDB, ExpressJS, ReactJS, NodeJS, HTML, CSS, JavaScript, Bootstrap.</p>
            </div>
          </ZoomUpObserver>
        </div>

        <div className='flex flex-col sm:flex-row items-center mb-16 sm:justify-end'>
          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
            <img src={sla} alt="My college" className='h-full w-full object-cover rounded-full' />
          </div>

          <ZoomUpObserver>
            <div className='  w-full  md:w-[270px] lg:w-[350px] p-4 sm:p-8 rounded-2xl  
            border-2  border-white/70 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
             md:mr-10 md:ml-10 lg:mr-5 lg:ml-5 ml-8 transform transition-transform duration-300 hover:scale-105 '>
              <div className='flex justify-center'>
                <div className='  w-full h-full  rounded-md bg-white overflow-hidden'>
                  <img src={hustler} alt="My college" className='w-full h-full object-cover' />
                </div>
              </div>
              <div className='flex flex-col   md:space-x-4 space-x-5'>
                <div className='flex flex-col justify-between mt-4'>
                  <div>
                    <h3 className='text-lg md:text-md     font-semibold text-white'>Innovative Thinking & Creative Problem</h3>
                    <h4 className='text-xs md:text-md   text-gray-300'>SLA Institute</h4>
                  </div>
                  <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>JULY 2025 - DEC 2025</p>
                </div>
              </div>
              <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>Honored with the "Creative Hustler" award by SLA for demonstrating original thinking and fresh approaches to complex challenges during my training. This recognition highlights my commitment to tackling technical problems with a creative mindset and commendable dedication.</p>
            </div>
          </ZoomUpObserver>

        </div>

        <div className='flex flex-col sm:flex-row items-center mb-16 sm:justify-start'>
          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
            <img src={naan} alt="My college" className='h-full w-full object-cover rounded-full' />
          </div>

          <ZoomUpObserver>
            <div className='  w-full  md:w-[270px] lg:w-[350px] p-4 sm:p-8 rounded-2xl  
            border-2  border-white/70 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
             md:mr-10 md:ml-10 lg:mr-5 lg:ml-5 ml-8 transform transition-transform duration-300 hover:scale-105 '>
              <div className='flex justify-center'>
                <div className='  w-full h-full  rounded-md bg-white overflow-hidden'>
                  <img src={cyber} alt="My college" className='w-full h-full object-cover' />
                </div>
              </div>
              <div className='flex flex-col   md:space-x-4 space-x-5'>
                <div className='flex flex-col justify-between mt-4'>
                  <div>
                    <h3 className='text-lg md:text-md     font-semibold text-white'>Cyber Security</h3>
                    <h4 className='text-xs md:text-md   text-gray-300'>Naan Mudhalvan</h4>
                  </div>
                  <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>May 2023</p>
                </div>
              </div>
              <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>Completed specialized training covering the essentials of Cyber Security and Digital Safety. Verified expertise in fundamental security practices through a partnership program between Microsoft and Madurai Kamaraj University.</p>
            </div>
          </ZoomUpObserver>
        </div>
      </div>
    </section >
  )
}
