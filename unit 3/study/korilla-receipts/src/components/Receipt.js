function Receipt ({receipt}){
    return (
        <div className="Receipt">
            <h1>{receipt.person}</h1>
            <h2>{receipt.order.protein}</h2>
            <h2>{receipt.order.rice}</h2>
            <h2>{receipt.order.sauce}</h2>
            <h2>{receipt.order.drink}</h2>
            <h2>{receipt.order.cost}</h2>
            <h2>paid: {receipt.paid.toString()}</h2>
        </div>
    )
};
export default Receipt