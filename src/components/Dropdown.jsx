import headerimg from "../assets/images/header-img.png";
function Dropdown() {
    return(
        <div className="drop-wrapper">
            <div className="drop-flex">
                <div className="drop-child1">
                <ul className="drop-child1__ul">
                    <li>Web разработка</li>
                    <li>Мобильные приложения</li>
                    <li>Дизайн</li>
                    <li>Продвижение</li>
                    <li>Соцсети и SMM</li>
                    <li>Чат боты</li>
                </ul>
                </div>
                <div className="drop-child2">
                    <img src={headerimg} alt="headerimg" />
                </div>
            </div>
        </div>
    );
}


export default Dropdown;