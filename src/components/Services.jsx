function Services(props) {
  return (
    <div className="services-flex flex-sm-row col-md-4 flex-column justify-content-center flex-fill">
      <div className="services-width">
      <img src={props.info.img} alt="web" />
      <div className="grid-text">
        <h1>{props.info.text1}</h1>
        <div className="grid-line"></div>
        <p>{props.info.text2}</p>
        <a href="/">Перейти</a>
      </div>
      </div>
    </div>
  );
}

export default Services;


