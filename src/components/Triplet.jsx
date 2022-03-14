

function Triplet(props) {
    return(
        <div className="services-child">
        <div className="services-child__elem">
          <img src={props.info.img} alt={props.info.alt} height="81px" width="81px" />
          <h1>{props.info.text1}</h1>
          <div className="services-line"></div>
          <p>{props.info.text2}</p>
          <div className="services__a">
          <a href="/#">{props.info.buttonText}</a>
          </div>
        </div>
      </div>
    );
}


export default Triplet;
