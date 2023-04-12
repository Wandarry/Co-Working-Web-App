import React from "react";
import './landingPage.css';
import { Header, HeroSection, FindRoom, AvailableRooms, Contact} from "../components";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FindRoom />
            <AvailableRooms />
            <Contact />
        </div>
    )
}

export default LandingPage;