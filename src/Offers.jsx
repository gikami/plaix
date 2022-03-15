import frame1 from "./assets/images/frame1.png";
// import frame2 from "./assets/images/frame2.png";
// import frame3 from "./assets/images/frame3.png";
// import frame4 from "./assets/images/frame4.png";
// import frame5 from "./assets/images/frame5.png";
// import frame6 from "./assets/images/frame6.png";

function Offers(props) {
    return(
    
        <div className="offers">
            <img src={props.info.img} alt="phoneicon" />
            <div className="offers-text">
                <h1>Lorem ipsum dolor </h1>
                <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
        </div>
       
    );
}

export default Offers;