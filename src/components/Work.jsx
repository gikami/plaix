import laptop from "../assets/images/laptop.png";
function Work() {
  return (
    <div className="work">
      <div className="work-child1">
        <img src={laptop} alt="laptop"></img>
        <div className="work-link">
          <a href="/#">Заполнить бриф</a>
        </div>
      </div>
      <form className="work-child2">
        <div className="work-child3">
          <div className="work-child3__elem1">
            <input type="radio" checked="checked"></input>
            <label className="label__elem1">Мне нужна консультация</label>
          </div>
          <div className="work-child3__elem2">
            <input type="radio"></input>
            <label className="label__elem2">У меня есть проект</label>
          </div>
        </div>
        <div className="work-child4">
            <label className="work-child4__elem1">Телефон</label>
            <input className="work-child4__elem2" type="text" placeholder="Телефон"></input>
            <label className="work-child4__elem3">Комментарий</label>
            <input className="work-child4__elem4" type="text" placeholder="Ваш комментарий"></input>
            <div className="work-child5">
            <input className="work-child4__elem5" type="checkbox" checked="checked" ></input>
            <span className="checkmark"></span>
            <label className="work-child4__elem6">Я согласен на обработку персональных данных</label>
            </div>
            <button>
            Оставить заявку
            </button>
        </div>
      </form>
    </div>
  );
}
export default Work;
