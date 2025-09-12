import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import Detail from "./detail"; 

export default function LandingPage(){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <Detail/>
        
        </>
    );
}