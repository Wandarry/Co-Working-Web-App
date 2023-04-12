import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './header.css';

const Header = () => {

    const [headerStyle, setHeaderStyle] = useState({ backgroundColor: 'white', color: '#1E1E1E' });

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        setHeaderStyle({ backgroundColor: '#366ACF', color: 'white', position: 'fixed', top: '0', left: '0', right: '0' });
      } else {
        setHeaderStyle({ backgroundColor: 'white', color: '#1E1E1E' });
      }
    };


    const [activeSectionId, setActiveSectionId] = useState(1);

    const handleSectionClick = sectionId => {
      setActiveSectionId(sectionId);
    };

    const [toggleMenu, setToggleMenu] = useState(false);

    return(
      <div className="header-container" style={headerStyle} >
            <div className="header-container__logo">
                <p>
                  Logo
                </p>
            </div>

            <div className="header-container__menu">
              <p className={activeSectionId === 1 ? 'header-container__menu_active' : ''} onClick={() => handleSectionClick(1)}><a href="home">Home</a></p>
              <p className={activeSectionId === 2 ? 'header-container__menu_active' : ''} onClick={() => handleSectionClick(2)}><a href="rooms">Rooms</a></p>
              <p className={activeSectionId === 3 ? 'header-container__menu_active' : ''} onClick={() => handleSectionClick(3)}><a href="about">About us</a></p>
            </div>

            <div className="header-container_buttons">
              <button className="header-container__register">Register</button>
              <button className="header-container__login">Login</button>
            </div>


            <div className='header-menu'>
            {toggleMenu
              ? <RiCloseLine color='#366ACF' size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color='#366ACF' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className='header-menu_container shadow-drop-2-center'>
                <div>
                  <p><a href='#home'>Home</a></p>
                  <p><a href='#rooms'>Rooms</a></p>
                  <p><a href='#about'>About us</a></p>
                  <p><a href="#register">Register</a></p>
                  <p><a href="#login">Login</a></p>
                </div>
              </div>
            )
            }
          </div>
      </div>
    )
}

export default Header;