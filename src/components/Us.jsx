import yellowarr from "../assets/images/yellowarr.png";
import designerpic from "../assets/images/designerpic.png";
import threeppl from "../assets/images/threeppl.png";
import twoppl from "../assets/images/twoppl.png";
import designer from "../assets/images/designer.png";
import cup from "../assets/images/cup.png";

function Us() {
  return (
    <div className="us-container">
      <div className="us-child1">
        <div className="headline">
          <div className="headline-child1">
            <div className="headline-underline"></div>
            <h1>О Нас</h1>
          </div>
          <div className="headline-child2">
            <p id="headline-p">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="us-paragraph">
          <img src={yellowarr} alt="yellowarr"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            augue morbi commodo pretium.
          </p>
        </div>
        <div className="us-paragraph">
          <img src={yellowarr} alt="yellowarr"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            augue morbi commodo pretium.
          </p>
        </div>
        <div className="us-paragraph">
          <img src={yellowarr} alt="yellowarr"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
            augue morbi commodo pretium.
          </p>
        </div>
        <div className="us-a">
          <a>Узнать больше ></a>
        </div>
      </div>
      <div className="us-child2">
        <div className="us-child2__elem1">
          <img src={threeppl} alt="threeppl"></img>
        </div>
        <div className="us-child2__elem2">
          <img src={designerpic} alt="designerpic"></img>
        </div>
        <div className="us-child2__elem3">
          <img src={twoppl} alt="twoppl"></img>
        </div>
        <div className="us-child2__elem4">
          <img src={designer} alt="designer"></img>
        </div>
        <div className="us-child2__elem5">
          <img src={cup} alt="cup"></img>
        </div>
      </div>
    </div>
  );
}
export default Us;

{
  /* <Headline info={headline.headline2} /> */
}
