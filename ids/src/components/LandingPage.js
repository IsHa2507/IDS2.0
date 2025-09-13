import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import Detail from "./detail"; 
import Courses from "./Courses";
import Benefits from "./Benefits";
import Footer from "./Footer";

export default function LandingPage(){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        <Detail/>
        <Benefits/>
        <Courses/>
        <Footer/>
        </>
    );
}