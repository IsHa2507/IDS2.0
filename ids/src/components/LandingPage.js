import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import Detail from "./detail"; 
import Courses from "./Courses";

export default function LandingPage(){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <Detail/>
        <Courses/>
        </>
    );
}