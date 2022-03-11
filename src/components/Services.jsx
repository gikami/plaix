function Services(props) {
  return (
    <div className="grid-elem">
      <img src={props.info.img} alt="web" />
      <div className="grid-text">
        <h1>{props.info.text1}</h1>
        <div className="grid-line"></div>
        <p>{props.info.text2}</p>
        <a href="/">Перейти</a>
      </div>
    </div>
  );
}

export default Services;
