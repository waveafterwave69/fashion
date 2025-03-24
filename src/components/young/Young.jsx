import Card from '../card/Card'

import { youngCardItems } from '../../data'

export default function Young() {
    return (
        <>
            <div className="young">
                <div className="container">
                    <h2 className="young__title title-2">Young’s Favourite</h2>
                    <ul className="young__list">
                        {youngCardItems.map((cardItem) => {
                            return (
                                <li key={cardItem.title}>
                                    <Card {...cardItem}></Card>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
