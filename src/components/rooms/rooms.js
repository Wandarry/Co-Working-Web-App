import React from "react";
import ScrollMenu  from 'react-horizontal-scrolling-menu';
import './rooms.css';
import Card from "../cards/card";
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';

const Rooms = () =>{

    return(
        
        <div className="room-container">
            <Card image={Image1}/>
            <Card image={Image2}/>
            <Card image={Image3}/>
        </div>
   
    )
}

export default Rooms;