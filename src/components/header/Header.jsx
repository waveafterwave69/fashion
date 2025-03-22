import logoImg from '../../img/logo.svg'

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <div className="header__logo">
                            <a href="#" className="header__logo-link">
                                <img src={logoImg} alt="Logo" />
                                <span>Fashion</span>
                            </a>
                        </div>
                        <nav className="header__nav">
                            <ul className="header__nav-list">
                                <li>
                                    <a
                                        href="#"
                                        className="header__nav-list-link"
                                    >
                                        CATALOGUE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="header__nav-list-link"
                                    >
                                        FASHION
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="header__nav-list-link"
                                    >
                                        FAVOURITE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="header__nav-list-link"
                                    >
                                        LIFESTYLE
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="header__nav-list-link btn"
                                    >
                                        SIGN UP
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
