import React from 'react'
import { Homenavbar } from './Homenavbar';
import { Homehero } from './Homehero';
import { Homeknowledge } from './Homeknowledge';
import { Homeaboutme } from './Homeaboutme';
import { Homeprojects } from './Homeprojects';
import { Homecertificates } from './Homecertificates';
import { Homecontact } from './Homecontact';
import { Homefooter } from './Homefooter';


export const Home = () => {
  return (
    <>
      <div className="home">

        <Homenavbar />
        <Homehero />
        <Homeaboutme />
        <Homeknowledge />
        <Homeprojects />
        <Homecertificates />
        <Homecontact />
        <Homefooter />
      </div>
    </>
  )
};
