import time from "../assets/images/time.png";
import eye from "../assets/images/eye.png";
import calendar from "../assets/images/calendar.png";
function Blog(props) {
  console.log(props);
  return (
    <div className="blog-flex__elem1">
      <img src={props.info.img} alt="image1"></img>
      <div className="blog-child">
        <div className="blog-child1">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            <img src={time} alt="time"></img>5 мин
          </p>
          <p>
            <img src={eye} alt="eye"></img>128
          </p>
          <p>
            <img src={calendar} alt="calendar"></img>12.01.2022
          </p>
        </div>
      </div>
      <div className="blog-child2">
        <p>#Разработка</p>
        <p className="lastP">#CSS</p>
      </div>
    </div>
  );
}

export default Blog;
