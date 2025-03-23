import arrowImg from '../../img/Arrow.svg'

export default function Card(props) {
    return (
        <>
            <div className="card">
                <a href="#" className="card__link">
                    {' '}
                    <img src={props.img} alt="Category" className="card__img" />
                </a>

                <div className="card__content">
                    <div className="">
                        <h3 className="card__content-title">{props.title}</h3>
                        <h4 className="card__content-subtitle">Explore Now!</h4>
                    </div>
                    <button className="card__content-btn">
                        <img src={arrowImg} alt="Arrow" />
                    </button>
                </div>
            </div>
        </>
    )
}
