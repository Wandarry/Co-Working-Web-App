import React from "react";
import './landingPage.css';
import { Header, HeroSection, FindRoom } from "../components";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FindRoom />
        </div>
    )
}

export default LandingPage;