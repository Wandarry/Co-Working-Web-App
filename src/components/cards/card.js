import React from "react";
import './card.css';
import { GiCoffeeCup } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { HiWifi } from "react-icons/hi";


const Card = ({image}) => {
    return(
        <div className="card-container">
            <div>
                <img src={image} alt="room"/>
            </div>

            <div className="card-container_text">
                <div>
                    <p style={{marginBottom: '1rem', fontSize: '20px', fontWeight: '700'}}>Minimalist coworking room</p>
                    <p style={{marginBottom: '1rem'}}>4517 Washington Ave.</p>

                    <div className="card-container_text_amenities">
                        <div className="card-container_text_amenity">
                            <GiCoffeeCup size={27} color='#366ACF'/>
                            <p>Coffee</p>
                        </div>

                        <div className="card-container_text_amenity">
                            <TbAirConditioning size={27} color='#366ACF' />
                            <p>AC</p>
                        </div>

                        <div className="card-container_text_amenity">
                            <HiWifi size={27} color='#366ACF'/>
                            <p>Wifi</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p style={{marginRight: '1rem', fontSize: '22px', fontWeight: '700'}}>$20 /day</p>
                </div>
            </div>
        </div>

    )
}

export default Card;