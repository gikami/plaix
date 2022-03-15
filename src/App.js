
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import Title from "./components/Title";
import Services from "./components/Services";
import Us from "./components/Us";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import web from "./assets/images/web.png";
import mobil from "./assets/images/mobil.png";
import design from "./assets/images/design.png";
import promotion from "./assets/images/promotion.png";
import social from "./assets/images/social.png";
import bot from "./assets/images/bot.png";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import leftarrow from "./assets/images/leftarrow.png";
import rightarrow from "./assets/images/rightarrow.png";
import frame1 from "./assets/images/frame1.png";
import frame2 from "./assets/images/frame2.png";
import frame3 from "./assets/images/frame3.png";
import frame4 from "./assets/images/frame4.png";
import frame5 from "./assets/images/frame5.png";
import frame6 from "./assets/images/frame6.png";
import flower from "./assets/images/flower.png";



function App() {
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
  const headline = {
    headline1: {
      text1: "Наши услуги",
      text2: "LOREM IPSUM DOLOR SIT AMET",
    },
    headline2: {
      text1: "О Нас",
      text2: "LOREM IPSUM DOLOR SIT AMET",
    },
    headline3: {
      text1: "Спецпредожения",
      text2: "LOREM IPSUM DOLOR SIT AMET",
    },
    headline4: {
      text1: "Поработаем?",
      text2: "Заполните форму и наш менеджер свяжется с вами в ближайшее время",
    },
    headline5: {
      text1: "Блог",
      text2: "LOREM IPSUM DOLOR SIT AMET",
    },
  };
  const offers = {
    offer1: {
      img: frame1
    },
    offer2: {
      img: frame2
    },
    offer3: {
      img: frame3
    },
    offer4: {
      img: frame4
    },
    offer5: {
      img: frame5
    },
    offer6: {
      img: frame6
    },
  }

  // ourservices-grid 
  return (
    <div>
      <Header />
      <Title />
      <div className="ourservices">
        <div className="ourservices-wrapper">
          <Headline info={headline.headline1} />
          <div className="row justify-content-center">
            <Services info={services.web} />
            <Services info={services.mobil} />
            <Services info={services.design} />
            <Services info={services.promotion} />
            <Services info={services.social} />
            <Services info={services.bot} />
          </div>
        </div>
      </div>
      <div className="us-wrapper">
        <Us />
      </div>
      <div className="offers-margin">
      <div className="section">
        <Headline info={headline.headline3} />
      </div>
      <div className="offers-wrapper">
            <div className="offers-flex">
                <Offers info={offers.offer1}/>
                <Offers info={offers.offer2}/>
                <Offers info={offers.offer3}/>
                <Offers info={offers.offer4}/>
                <Offers info={offers.offer5}/>
                <Offers info={offers.offer6}/>
               
            </div>
            <button className="offers-left"><img src={leftarrow} alt="leftarrow"></img></button>
            <button className="offers-right"><img src={rightarrow} alt="rightarrow"></img></button>
        </div>
        </div>
      <div className="section">
        <Headline info={headline.headline4} />
      </div>
      <div className="work-wrapper">
        <Work />
        <img className="flower-img" src={flower} alt="flower"></img>
      </div>
      <div className="section">
        <Headline info={headline.headline5} />
      </div>
      <div className="blog-flex">
        <Blog info={blog.blog1} />
        <Blog info={blog.blog2} />
        <Blog info={blog.blog3} />
       
      </div>
      <div className="link-tag">
        <a href="/#">ПЕРЕЙТИ В БЛОГ {">"}</a>
      </div>
      <Footer />
      <Dropdown/>
    </div>
  );
}

export default App;

