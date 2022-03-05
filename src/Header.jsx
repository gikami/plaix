

function Header() {
    return(
            <div className="header">
                <div className="child1">
                    <h1>Logo</h1>
                </div>
                <div className="child2">
                    <nav>
                        <ul className="child2__ul">
                            <a href="#"><li>Главная</li></a>
                            <div className="child2-arrow">
                                <div>
                            <a href="#"><li>Услуги</li></a>
                                </div>
                            <button></button>
                            </div>
                            <a href="#"><li>Портфолио</li></a>
                            <a href="#"><li>О Нас</li></a>
                            <a href="#"><li>Главная</li></a>
                            <a href="#"><li>Блог</li></a>
                            <a href="#"><li>Контакты</li></a>
                            <a href="#"><li>Личный кабинет</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
    );
}

export default Header;








