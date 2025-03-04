import React from 'react';

import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from '../OpenAccout';



function HomePage() {
    return (  
        <>
        
        <Hero/>
        
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        

        </>
    );
}

export default HomePage;