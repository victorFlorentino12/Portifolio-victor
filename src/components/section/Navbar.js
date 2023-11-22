import React, { useState } from "react";
import styler from '../styles/Navbar.module.css';
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  const [active, setActive] = useState(styler.nav_list);
  const [toggleIcon, setToggleIcon] = useState(styler.mobile_menu)
  
  
  const navToggle = () => {
    //nav animation
    setActive(active === styler.nav_list ? styler.nav_list + ' ' + styler.nav_active : styler.nav_list);
    // icon animation
    setToggleIcon(toggleIcon === styler.mobile_menu ? styler.mobile_menu + ' ' + styler.toggle : styler.mobile_menu);
  }
    return (
    <header>
      <nav>
        <a className={styler.logo} href='/'>Portifólio</a>
        <div onClick={navToggle} className={toggleIcon}>
          <div className={styler.line1}></div>
          <div className={styler.line2}></div>
          <div className={styler.line3}></div>
        </div>
        <ul className={active}>
          <li><a href='/'><Nav.Link href='#presetation'>Apresentação</Nav.Link></a></li>
          <li><a href='/'><Nav.Link href='#skills'>Habilidades</Nav.Link></a></li>
          <li><a href='/'><Nav.Link href='#project'>Projetos</Nav.Link></a></li>
        </ul>
        <ul className={styler.nav_icons}>
          <li><a href='https://www.instagram.com/victorflorentino52/'><FaInstagram className={styler.icon}/></a></li>
          <li><a href='https://github.com/victorFlorentino12'><AiFillGithub className={styler.icon}/></a></li>
          <li><a href='https://www.linkedin.com/in/victor-florentino-06a462196/'><GrLinkedin className={styler.icon}/></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;