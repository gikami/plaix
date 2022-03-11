function Headline(props) {
    return(
        <div className="headline">
            <div className="headline-child1">
              <div className="headline-underline"></div>
              <h1>{props.info.text1}</h1>
            </div>
            <div className="headline-child2">
              <p>{props.info.text2}</p>
            </div>
            </div>
    );
};

export default Headline;