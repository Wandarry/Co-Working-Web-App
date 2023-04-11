import React from "react";
import './heroSection.css';
import { AiOutlineDown } from "react-icons/ai";
import heroImg from '../../assets/heroImg.png';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-container_cta">
                <p className="hero-container_cta_tagline">
                    Coworking made easy - find your perfect spot today
                </p>

                <p className="hero-container_cta_subtitle">
                    Whether you need a quiet desk for a few hours or a dedicated office space for your team, our app has got you covered
                </p>

                <button className="hero-container_cta_book">
                    Book now
                </button>

                <button className="hero-container_cta_below">
                    <AiOutlineDown size={27} color={'white'} />
                </button>
            </div>

            <div className="hero-container_img">
                <img src={heroImg} alt="Coworking image" className="hero-container_image"/>
            </div>
        </div>
    )
}

export default HeroSection;