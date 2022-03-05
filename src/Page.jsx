import Service from "./Service";
import guy from "./assets/images/image1.png";
import star from "./assets/images/responses.jpg";
import brain from "./assets/images/go.jpg";
import portfolio from "./assets/images/portfolio.jpg";


const services = {
    portfolio: {
        img: portfolio,
        text1: 'Огромное портфолио',
        text2: 'Более сотни реализованных проектов и довольных клиентов',
        buttonText: 'ПОРТФОЛИО >',
        alt: 'кейс' 
    },
    recommendations: {
        img: star,
        text1: 'Нас рекомендуют',
        text2: 'Более сотни реализованных проектов и довольных клиентов',
        buttonText: 'ОТЗЫВЫ >',
        alt: 'звезда' 
    },
    insrtuments: {
      img: brain,
        text1: 'Инструменты',
        text2: 'Только самые передовые инструменты и фреймворки',
        buttonText: 'ПЕРЕЙТИ >',
        alt: 'мозг' 
    }
}

function Page() {
  return (
    <div className="wrapper">
      <div className="title">
        <div className="title-child1">
          <h1>LOREM IPSUM DOLOR</h1>
          <h2>
            <span>Lorem</span> ipsum dolor
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

      {/* services */}
      <div className="services-container">
        <Service info={services.portfolio} />
        <Service info={services.recommendations}/>
        <Service info={services.insrtuments}/>
      </div>
     {/* наши услуги */}
      <div className="attendance">
        <div className="attendance-container">
          <div className="underline-h1">
          <div className="attendance-underline"></div>
          <h1>Наши услуги</h1>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="attendance-grid">
            
        </div>
      </div>
    {/* конец наши услуги */}


    </div>

  );
}

export default Page;


