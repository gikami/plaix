

function Triplet(props) {
    return(
        <div className="services-child">
        <div className="services-child1">
          <img src={props.info.img} alt={props.info.alt} />
          <h1>{props.info.text1}</h1>
          <div className="services-line"></div>
          <p>{props.info.text2}</p>
          <a href="#">{props.info.buttonText}</a>
        </div>
      </div>
    );
}


export default Triplet;
