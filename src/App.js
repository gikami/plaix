import Header from "./Header";
import Triplet from "./Triplet";
import Services from "./Services";
import guy from "./assets/images/image1.png";
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

        <div>
          <div className="container1">
            <div className="container1-underline"></div>
            <h1>Поработаем?</h1>
          </div>
          <div className="attendance-p">
            <p>
              ЗАПОЛНИТЕ ФОРМУ И НАШ МЕНЕДЖЕР СВЯЖЕТСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ
            </p>
          </div>
          <div className="work-flex">
            <div className="work-flex__child1">
              <img src={laptop}></img>
              <button>ЗАПОЛНИТЬ БРИФ</button>
            </div>
            <div className="work-flex__child2">
              <form>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
