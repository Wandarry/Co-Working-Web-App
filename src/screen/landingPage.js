import React from "react";
import './landingPage.css';
import { Header, HeroSection, FindRoom, AvailableRooms, Contact, Footer} from "../components";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FindRoom />
            <AvailableRooms />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage;