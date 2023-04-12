import React from "react";
import './landingPage.css';
import { Header, HeroSection, FindRoom, AvailableRooms} from "../components";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FindRoom />
            <AvailableRooms />
        </div>
    )
}

export default LandingPage;