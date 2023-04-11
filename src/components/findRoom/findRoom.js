import React from "react";
import './findRoom.css';

import { FiSearch } from "react-icons/fi";

const FindRoom = () => {
    return(
        <div className="findRoom-container">
            <div className="findRoom-container_title">
                <p>Find</p>
            </div>

            <div className="findRoom-container_inputs">
                <div className="findRoom-container_inputs_links">
                    <p><strong>Room</strong></p>
                    <p>Desk</p>
                    <p>Co space</p>
                    <p>Meeting room</p>
                </div>

                <div className="findRoom-container_inputs_links inputs">
                    <div className="findRoom-container_input">
                        <label for="date">Date</label>
                        <input type="date" id="Date" />
                    </div>

                    <div className="line"></div>

                    <div className="findRoom-container_input">
                        <label for="location">Location</label>
                        <input type="text" id="location" placeholder="Location" />
                    </div>

                    <div className="line"></div>

                    <div className="findRoom-container_input">
                        <label for="beginning">From</label>
                        <input type="time" id="beginning" />
                    </div>

                    <div className="line"></div>

                    <div className="findRoom-container_input">
                        <label for="end">To</label>
                        <input type="time" id="end" />
                    </div>

                    <button className="findRoom-container_button">
                        <FiSearch color="white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindRoom;