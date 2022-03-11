import Triplet from "./Triplet";
import guy from "../assets/images/imageguy.png";
import star from "../assets/images/responses.jpg";
import brain from "../assets/images/go.jpg";
import portfolio from "../assets/images/portfolio.jpg";
function Title() {
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
  return (
    <div className="title-wrapper">
      <div className="title">
        <div className="title-child1">
          <div className="title-child1__h1">
          <h1>LOREM IPSUM DOLOR</h1>
          </div>
          <h2>
            <span>Lorem</span> ipsum dolor{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus
            nibh diam morbi id.
          </p>
          <button>ЗАКАЗАТЬ ПРОЕКТ</button>
        </div>
        <div className="title-child2">
          <img src={guy} alt="title guy" />
        </div>
      </div>
      <div className="services">
        <Triplet info={service.portfolio} />
        <Triplet info={service.recommendations} />
        <Triplet info={service.insrtuments} />
      </div>
    </div>
  );
}

export default Title;
