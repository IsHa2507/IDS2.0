import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Herosection";
import Detail from "./detail"; 
import Courses from "./Courses";
import Benefits from "./Benefits";
import Footer from "./Footer";
import WorkStripe from "./WorkStrip";
import Blog from "./Blog";
import Testimonials from "./Testimonials";

export default function LandingPage(){
    return(
        <>
        <WorkStripe/>
        <Navbar/>
        <HeroSection/>
        <Detail/>
        <Benefits/>
        <Courses/>
        <Blog/>
        <Testimonials/>
        <Footer/>
        </>
    );
}