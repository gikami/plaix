import Blog from "../pages/Blog";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Portfolio from "../pages/Portfolio";
import Private from "../pages/Private";
import Main from "../pages/Main";
import Services from "../pages/Services";
import logoplaix from "../assets/images/logoplaix.png";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";

function Header() {


const [toggle, setToggle] = useState(false);
const toggler = () => {
  toggle ? setToggle(false): setToggle(true);
};
const headerToggle = toggle ? <Dropdown />: null;


  return (
    <div className="header-wrapper">
    <div className="header">
      <div className="header-child1">
        <img src={logoplaix} alt="logoplaix" />
      </div>
      <div className="header-child2">
        <nav>
          <ul className="header-child2__ul">
          <Link to="/main">Главная</Link>
            <div className="header-child2-arrow">
              <div>
                <Link to="/">Услуги</Link>
              </div>
              <button onClick={toggler}></button>
            </div>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/about">О Нас</Link>
            <Link to="/feedback">Отзывы</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/private">Личный кабинет</Link>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/Services" element={<Services />} />
        <Route path="/Feedback" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/main" element={<Main />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </div>
    {headerToggle}
    </div>
  );
}

export default Header;
