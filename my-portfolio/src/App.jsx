import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import Galaxy from './Components/Galaxybg/Galaxy';
import { Openings } from './Components/Opens/Openings';

function App() {


  return (
    <>
      <div className='bg-[#050414] relative min-h-screen overflow-x-hidden'>
        <div className="fixed inset-0 w-full h-full pointer-events-none"
        // style={{
        //   position: "fixed",
        //   inset: 0,
        //   pointerEvents: "none",
        //   overflow: 'hidden',
        //   width: '100%',
        //   height: '100vh'
        // }}
        >
          <Galaxy
            className='w-full h-full'
            mouseRepulsion={false}
            mouseInteraction={false}
            density={1}
            glowIntensity={0.1}
            twinkleIntensity={0.2}
            saturation={0}
            hueShift={140}
            starSize={0.2}
            starSizeVariation={1}
            speed={0.1}
            rotationSpeed={0.1}
            warpSpeed={0.0005}
            animationSpeed={0.3}
          />
        </div>
        <div>
          <Routes>

            <Route path='/' element={<Openings />}></Route>
            <Route path='/home' element={<Home />}></Route>

          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
