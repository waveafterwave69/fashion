import paydayImg from '../../img/promo-img.jpg'

export default function Payday() {
    return (
        <>
            <section className="payday">
                <div className="payday__row">
                    <img src={paydayImg} alt="" className="payday__img" />
                    <div className="payday__content">
                        <h1 className="payday__content-title">
                            <span className="highlight">
                                {' '}
                                <span>PAYDAY</span>
                            </span>{' '}
                            SALE NOW
                        </h1>
                        <p className="payday__content-text">
                            Spend minimal $100 get 30% off voucher code for your
                            next purchase
                        </p>
                        <div className="payday__content-sale">
                            <h3 className="payday__content-sale-title">
                                1 June - 10 June 2021
                            </h3>
                            <p className="payday__content-sale-text">
                                *Terms & Conditions apply
                            </p>
                        </div>
                        <a href="#" className="payday__content-btn">
                            SHOP NOW
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
