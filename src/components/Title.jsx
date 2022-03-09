import guy from './assets/images/imageguy.png';
function Title() {
    return(
        <div className="title">
            <div className="title-child1">
                <h1>LOREM IPSUM DOLOR</h1>
                <h2><span>Lorem</span> ipsum dolor </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus nibh diam morbi id.</p>
                <button>ЗАКАЗАТЬ ПРОЕКТ</button>
            </div>
            <div className="title-child2">
                <img src={guy} alt="title guy" />
            </div>
        </div>
    );
}

export default Title;