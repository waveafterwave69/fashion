import Card from '../card/Card'

import { cardItems } from '../../Data'

export default function Arrivals() {
    return (
        <>
            <div className="arrivals">
                <div className="container">
                    <h2 className="arrivals__title title-2">NEW ARRIVALS</h2>
                    <div className="arrivals__cards">
                        <ul className="arrivals__cards-list">
                            {cardItems.map((cardItem) => {
                                return (
                                    <li>
                                        <Card
                                            key={cardItem.title}
                                            {...cardItem}
                                        ></Card>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
