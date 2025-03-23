import img1 from '../../img/HM.png'
import img2 from '../../img/Obey.png'
import img3 from '../../img/Shopify.png'
import img4 from '../../img/Lacoste.png'
import img5 from '../../img/Levis.png'
import img6 from '../../img/Amazon.png'

export default function Brands() {
    return (
        <>
            <section className="brands">
                <div className="container">
                    <ul className="brands__list">
                        <li>
                            <a href="#" className="brands__list-img">
                                <img src={img1} alt="HM" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="brands__list-img">
                                <img src={img2} alt="Obey" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="brands__list-img">
                                <img src={img3} alt="Shopify" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="brands__list-img">
                                <img src={img4} alt="Lacoste" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="brands__list-img">
                                <img src={img5} alt="Levis" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="brands__list-img">
                                <img src={img6} alt="Amazon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
