import React from 'react'
import cimg from '../../Assets/anjac-logo.jpg';
import simg from '../../Assets/school-logo.jpg';
import ScrollCard from './Scroll';
import Autoshow from './Autoshow';


export const Homeaboutme = () => {
  return (
    <section id='about' className='gpu-boost relative z-30 py-24 pb-24 mt-25 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      
      <Autoshow>
        <div className='text-center mb-20'>
          <h4 className="text-fuchsia-500 text-xs font-bold tracking-[0.5em] uppercase mb-4">Galactic Identity</h4>
          <h2 className='text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
            Architect of <span className='text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-purple-500'>Digital </span>
          </h2>
          <div className='w-35 h-1 rounded-full bg-linear-to-r from-fuchsia-600 to-purple-600 mx-auto mt-6 shadow-[0_0_15px_rgba(192,38,211,0.5)]'></div>
          <p className='text-gray-400 mt-6 md:text-lg text-sm font-medium max-w-2xl mx-auto opacity-80'>
            My education has been a journey of learning and development. Here are the details of my academic background.
          </p>
        </div>
      </Autoshow>

      <div className='relative'>
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 rounded-2xl bg-white w-1 h-full'></div>
        <div className='flex flex-col sm:flex-row items-center mb-16 sm:justify-end'>
          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
            <img src={cimg} alt="My college" className='h-full w-full object-cover rounded-full' />
          </div>

          <div className=' overflow-hidden w-full md:max-w-[270px] lg:max-w-[350px] p-4 sm:p-8
                 md:mr-10 md:ml-10 lg:mr-15 lg:ml-15 ml-8 '>
            <ScrollCard>
              <div className='flex items-center flex-col'>
                <div className=' w-16 h-16 rounded-md bg-white overflow-hidden'>
                  <img src={cimg} alt="My college" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col text-center mt-5'>
                  <div>
                    <h3 className='text-lg md:text-md     font-semibold text-white'>Bachelor of Computer Science</h3>
                    <h3 className='text-lg md:text-md     font-semibold text-white mb-1'>(Bsc CS)</h3>
                    <h4 className='text-xs md:text-md   text-gray-300'>Ayya Nadar Janaki Ammal College, Sivakasi</h4>
                  </div>
                  <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>2022 - 2025</p>
                </div>
                <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>CGPA: 6.66</p>
              </div>
            </ScrollCard>
          </div>

        </div>

        <div className='flex flex-col sm:flex-row items-center mb-16 sm:justify-start'>
          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
            <img src={simg} alt="My college" className='h-full w-full object-cover rounded-full' />
          </div>
          <div className='overflow-hidden w-full md:max-w-[270px] lg:max-w-[350px] p-4 sm:p-8 rounded-2xl  b
                 md:mr-10 md:ml-10 lg:mr-15 lg:ml-15 ml-8 '>
            <ScrollCard>
              <div className='flex items-center flex-col'>
                <div className=' w-16 h-16 rounded-md bg-white overflow-hidden'>
                  <img src={simg} alt="My college" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col text-center mt-5'>
                  <div>
                    <h3 className='text-lg md:text-md     font-semibold text-white'>State Board Aided</h3>
                    <h3 className='text-lg md:text-md     font-semibold text-white mb-1'>(XII)-HSC</h3>
                    <h4 className='text-xs md:text-md   text-gray-300'>G.S Hindu Hr Sec School, Srivilliputtur</h4>
                  </div>
                  <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>2021 - 2022</p>
                </div>
                <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>Grade: 72%</p>
              </div>
            </ScrollCard>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center mb-16 sm:justify-end'>
          <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
            <img src={simg} alt="My college" className='h-full w-full object-cover rounded-full' />
          </div>
          <div className=' overflow-hidden w-full md:max-w-[270px] lg:max-w-[350px] p-4 sm:p-8
                 md:mr-10 md:ml-10 lg:mr-15 lg:ml-15 ml-8'>
            <ScrollCard>
              <div className='flex items-center flex-col'>
                <div className=' w-16 h-16 rounded-md bg-white overflow-hidden'>
                  <img src={simg} alt="My college" className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col text-center mt-5'>
                  <div>
                    <h3 className='text-lg md:text-md     font-semibold text-white'>State Board Aided</h3>
                    <h3 className='text-lg md:text-md     font-semibold text-white mb-1'>(X)-SSLC</h3>
                    <h4 className='text-xs md:text-md   text-gray-300'>G.S Hindu Hr Sec School, Srivilliputtur</h4>
                  </div>
                  <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>2019 - 2020</p>
                </div>
                <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>Grade: 67%</p>
              </div>
            </ScrollCard>
          </div>
        </div>
      </div>
    </section >
  )
}
