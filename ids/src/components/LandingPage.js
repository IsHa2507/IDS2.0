import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./Herosection";

export default function LandingPage(){
    return(
        <>
        <Navbar/>
        <HeroSection/>
        </>
    );
}