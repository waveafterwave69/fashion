export default function Email() {
    return (
        <>
            <div className="email">
                <div className="container">
                    <h3 className="email__title">
                        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                    </h3>
                    <p className="email__text">
                        Type your email down below and be young wild generation
                    </p>
                    <div className="email__form">
                        <input
                            type="text"
                            className="email__form-input"
                            placeholder="Add your email here"
                        />
                        <button className="email__form-btn">SEND</button>
                    </div>
                </div>
            </div>
        </>
    )
}
