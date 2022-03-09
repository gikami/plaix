import Header from "./components/Header";
import Triplet from "./components/Triplet";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import guy from "./assets/images/imageguy.png";
import star from "./assets/images/responses.jpg";
import brain from "./assets/images/go.jpg";
import portfolio from "./assets/images/portfolio.jpg";
import web from "./assets/images/web.png";
import mobil from "./assets/images/mobil.png";
import design from "./assets/images/design.png";
import promotion from "./assets/images/promotion.png";
import social from "./assets/images/social.png";
import bot from "./assets/images/bot.png";
import laptop from "./assets/images/laptop.png";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";

function App() {
  const service = {
    portfolio: {
      img: portfolio,
      text1: "Огромное портфолио",
      text2: "Более сотни реализованных проектов и довольных клиентов",
      buttonText: "ПОРТФОЛИО >",
      alt: "кейс",
    },
    recommendations: {
      img: star,
      text1: "Нас рекомендуют",
      text2: "Более сотни реализованных проектов и довольных клиентов",
      buttonText: "ОТЗЫВЫ >",
      alt: "звезда",
    },
    insrtuments: {
      img: brain,
      text1: "Инструменты",
      text2: "Только самые передовые инструменты и фреймворки",
      buttonText: "ПЕРЕЙТИ >",
      alt: "мозг",
    },
  };

  const services = {
    web: {
      img: web,
      text1: "Web разработка",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis penatibus nisi malesuada ut iaculis purus nisl.",
    },
    mobil: {
      img: mobil,
      text1: "Мобильные приложения",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis penatibus nisi malesuada ut iaculis purus nisl.",
    },
    design: {
      img: design,
      text1: "Дизайн",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis penatibus nisi malesuada ut iaculis purus nisl.",
    },
    promotion: {
      img: promotion,
      text1: "Продвижение",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis penatibus nisi malesuada ut iaculis purus nisl.",
    },
    social: {
      img: social,
      text1: "Соцсети и SMM",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis penatibus nisi malesuada ut iaculis purus nisl.",
    },
    bot: {
      img: bot,
      text1: "Чат боты",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et convallis penatibus nisi malesuada ut iaculis purus nisl.",
    },
  };
  const blog = {
    blog1: {
      img: image1,
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2: "5 мин",
      text3: "5 мин",
      text4: "5 мин",
    },
    blog2: {
      img: image2,
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2: "5 мин",
      text3: "5 мин",
      text4: "5 мин",
    },
    blog3: {
      img: image3,
      text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text2: "5 мин",
      text3: "5 мин",
      text4: "5 мин",
    },
  };
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="title">
          <div className="title-child1">
            <h1>LOREM IPSUM DOLOR</h1>
            <h2>
              <span>Lorem</span> ipsum dolor
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              tempus nibh diam morbi id.
            </p>
            <button>ЗАКАЗАТЬ ПРОЕКТ</button>
          </div>
          <div className="title-child2">
            <img src={guy} alt="title guy" />
          </div>
        </div>

        {/* triplet */}

        <div className="services-container">
          <Triplet info={service.portfolio} />
          <Triplet info={service.recommendations} />
          <Triplet info={service.insrtuments} />
        </div>

        {/* наши услуги */}
        <div className="attendance">
          <div className="attendance-wrapper">
            <div className="container1">
              <div className="container1-underline"></div>
              <h1>Наши услуги</h1>
            </div>
            <div className="attendance-p">
              <p>LOREM IPSUM DOLOR SIT AMET</p>
            </div>
            <div className="attendance-grid">
              <Services info={services.web} />
              <Services info={services.mobil} />
              <Services info={services.design} />
              <Services info={services.promotion} />
              <Services info={services.social} />
              <Services info={services.bot} />
            </div>
          </div>
        </div>
        {/* конец наши услуги */}
        <div className="section">
          <div className="container1">
            <div className="container1-underline"></div>
            <h1>Поработаем?</h1>
          </div>
          <div className="attendance-p">
            <p>
              ЗАПОЛНИТЕ ФОРМУ И НАШ МЕНЕДЖЕР СВЯЖЕТСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ
            </p>
          </div>
        </div>
        {/* <div className="work-flex">
          <div className="work-flex__child1">
            <img src={laptop} alt="laptop"></img>
            <button>ЗАПОЛНИТЬ БРИФ</button>
          </div>
          <div className="work-flex__child2">
            <form className="work-form">
              <div className="form-buttons">
                <div className="form__button1">
                  <label>
                    <input type="checkbox" />
                    Мне нужна консультация
                  </label>
                </div>
                <div className="form__button2">
                  <label>
                    <input type="checkbox" />У меня есть проект
                  </label>
                </div>
              </div>
              <div className="work-flex__child3">
                <div className="label-text">
                  <label>Телефон</label>
                  <br />
                </div>
                <input type="text" value="Телефон" />
                <br />
                <div className="label-text">
                  <label>Комментарий</label>
                  <br />
                </div>
                <input type="text" value="Ваш комментарий" />
                <br />
                <div className="last-checkbox">
                  <label className="last-label">
                    <input type="checkbox" />Я согласен на обработку
                    персональных данных
                  </label>
                </div>
                <br />
                <button>ОСТАВИТЬ ЗАЯВКУ</button>
              </div>
            </form>
          </div>
        </div> */}
        <div className="section">
          <div className="container1">
            <div className="container1-underline"></div>
            <h1>Блог</h1>
          </div>

          <div className="attendance-p">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="blog-flex">
          <Blog info={blog.blog1} />
          <Blog info={blog.blog2} />
          <Blog info={blog.blog3} />
        </div>
        <div className="link-tag">
          <a>ПЕРЕЙТИ В БЛОГ {">"}</a>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
