import React from "react";
import './availableRooms.css';
import Rooms from "../rooms/rooms";

const AvailableRooms = () => {
    return (
        <div className="availableRooms-container">
            <p className="availableRooms-container_title">Available today !</p>
            <Rooms />
        </div>
    )
}

export default AvailableRooms;