import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menuIcon.png'
import { Link } from 'react-scroll'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar=() => {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
},[]);
  
const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = ()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}


  return (
    <>
        <nav className={`container ${sticky? 'darkNav' : ''}`}>
            <img src={logo} className="logoClass" alt=" " />
            <ul className={mobileMenu ? '': 'hideMobileMenu'}>
              <li><Link to='bannerContainer' smooth={true} offset={0} duration={500}>Home</Link></li>
              <li><Link to='about' smooth={true} offset={-140} duration={500}>About</Link></li>
              <li><Link to='services' smooth={true} offset={-275} duration={500}>Menu</Link></li>
              <li><Link to='contact' smooth={true} offset={-280} duration={500}>Reservation</Link> </li>
             
        </ul>
        <img src={menuIcon} alt="" className='menuIcon' onClick={toggleMenu}/>
          </nav>
    </>
  )
}

export default Navbar
