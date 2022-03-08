import Blog from "./pages/Blog";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import Private from "./pages/Private";
import Main from "./pages/Main";
import Services from "./pages/Services";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="child1">
        <h1>Logo</h1>
      </div>
      <div className="child2">
        <nav>
          <ul className="child2__ul">
          <Link to="/main">Главная</Link>
            <div className="child2-arrow">
              <div>
                <Link to="/services">Услуги</Link>
              </div>
              <button></button>
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
  );
}

export default Header;
