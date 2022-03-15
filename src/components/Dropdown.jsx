import headerimg from "../assets/images/header-img.png";
import droparrow from "../assets/images/drop-arrow.png";
function Dropdown() {
  return (
    <div className="drop-wrapper">
      <div className="drop-flex">
        <div className="drop-child1">
          <nav>
            <ul className="drop-child1__ul">
              <li>
                <a href="/">Web разработка</a>
                <img src={droparrow} alt="arrow-right" />
              </li>
              <li>
                <a href="/">Мобильные приложения</a>
                <img src={droparrow} alt="arrow-right" />
              </li>
              <li>
                <a href="/">Дизайн</a>
                <img src={droparrow} alt="arrow-right" />
              </li>
              <li>
                <a href="/">Продвижение</a>
                <img src={droparrow} alt="arrow-right" />
              </li>
              <li>
                <a href="/">Соцсети и SMM</a>
                <img src={droparrow} alt="arrow-right" />
              </li>
              <li>
                <a href="/">Чат боты</a>
                <img src={droparrow} alt="arrow-right" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="last-div">
        </div>
        <div className="drop-child2">
          <img src={headerimg} alt="headerimg" />
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
