import appStoreImg from '../../img/app-store.png'
import googlePlayImg from '../../img/google-play.png'
import downloadBackImg from '../../img/vouchers-img.png'

export default function Download() {
    return (
        <>
            <div className="download">
                <div className="container">
                    <div className="download__row">
                        <div className="download__content">
                            <h3 className="download__content-title">
                                DOWNLOAD APP & GET THE VOUCHER!
                            </h3>
                            <p className="download__content-text">
                                Get 30% off for first transaction using
                                Rondovision mobile app for now.
                            </p>
                            <ul className="download__content-list">
                                <li>
                                    <a
                                        href="#"
                                        className="download__content-list-item"
                                    >
                                        <img
                                            src={appStoreImg}
                                            alt="App store"
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="download__content-list-item"
                                    >
                                        <img
                                            src={googlePlayImg}
                                            alt="Google play"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <img
                            src={downloadBackImg}
                            alt="Phone"
                            className="download__img"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
