import facebook from '../../img/fb.svg'
import instagram from '../../img/inst.svg'
import twitter from '../../img/tw.svg'
import linkedin from '../../img/in.svg'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__left">
                            <h4 className="footer__left-title">FASHION</h4>
                            <p className="footer__left-text">
                                Complete your style with awesome clothes from
                                us.
                            </p>
                            <ul className="footer__left-list">
                                <li>
                                    <a
                                        href="#"
                                        className="footer__left-list-link"
                                    >
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="footer__left-list-link"
                                    >
                                        <img src={instagram} alt="instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="footer__left-list-link"
                                    >
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="footer__left-list-link"
                                    >
                                        <img src={linkedin} alt="linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__right">
                            <div className="footer__right-row">
                                <div className="footer__right-row-el">
                                    <h5 className="footer__right-row-el-title">
                                        Company
                                    </h5>
                                    <ul className="footer__right-row-el-list">
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Contact us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Support
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Careers
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__right-row-el">
                                    <h5 className="footer__right-row-el-title">
                                        Quick Link
                                    </h5>
                                    <ul className="footer__right-row-el-list">
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Share Location
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Orders Tracking
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Size Guide
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                FAQs
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer__right-row-el">
                                    <h5 className="footer__right-row-el-title">
                                        Legal
                                    </h5>
                                    <ul className="footer__right-row-el-list">
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Terms & conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="footer__right-row-el-list-link"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
