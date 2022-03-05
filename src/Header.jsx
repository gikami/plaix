
import Blog from "./pages/Blog";
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
            <a href="#">
              <li>Главная</li>
            </a>
            <div className="child2-arrow">
              <div>
                <a href="#">
                  <li>Услуги</li>
                </a>
              </div>
              <button></button>
            </div>
            <a href="#">
              <li>Портфолио</li>
            </a>
            <a href="#">
              <li>О Нас</li>
            </a>
            <Link to="/blog">Блог</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/blog">Блог</Link>
            <a href="#">
              <li>Контакты</li>
            </a>
            <a href="#">
              <li>Личный кабинет</li>
            </a>
          </ul>
        </nav>
      </div>
      <Routes>
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
{
  /* <a href="#"><li>Блог</li></a> */
}
