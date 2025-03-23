import promoImg from '../../img/header-img.jpg'
import blockImg from '../../img/block.svg'

export default function Promo() {
    return (
        <>
            <section className="promo">
                <div className="container">
                    <div className="promo__content">
                        <div className="promo__content-wrapper">
                            <h1 className="promo__content-wrapper-title">
                                <span className="highlight">
                                    <span>LET’S</span>
                                </span>{' '}
                                EXPLORE{' '}
                                <span className="highlight highlight-yellow">
                                    <span>UNIQUE</span>
                                </span>{' '}
                                CLOTHES.
                            </h1>
                            <p className="promo__content-wrapper-subtitle">
                                Live for Influential and Innovative fashion!
                            </p>
                            <div className="promo__content-wrapper-link">
                                <img
                                    src={blockImg}
                                    alt="block"
                                    className="promo__content-wrapper-link-img"
                                />
                                <a
                                    href="#"
                                    className="promo__content-wrapper-link-btn"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                        <div className="promo__content-img">
                            <img src={promoImg} alt="Promo" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
