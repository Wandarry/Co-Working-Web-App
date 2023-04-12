import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-container_text">
                <p style={{fontSize: '40px', color: '#366ACF', fontWeight:'700'}}>Contact-us !</p>
                <p style={{color: '#1E1E1E', fontSize: '18px'}}>Would you happen to have a question or a personal request ? Feel free to contact us by filling out this form !</p>
            </div>

            <div className="contact-container_inputs">
                <div className="contact-container_input">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                </div>

                <div className="contact-container_input">
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="Your email" />
                </div>

                <div className="contact-container_input">
                    <label for="message">Message</label>
                    <input type="text" id="message" placeholder="Your message" className="message"/>
                </div>
            </div>
        </div>
    )
}

export default Contact;