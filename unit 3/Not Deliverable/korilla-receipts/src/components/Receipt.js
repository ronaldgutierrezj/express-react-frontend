function Receipt(props){

    const receipt = props.receipt
    const order = receipt.order

    return <article class="Receipt">
        <h1>Order for {receipt.person}</h1>
        <h3>drink: {order.drink}</h3>
        <h3>main: {order.main}</h3>
        <h3>protein: {order.protein}</h3>
        <h3>rice: {order.rice}</h3>
        <h3>sauce: {order.sauce}</h3>
        <h2>Total</h2>
        <h3>{order.cost}</h3>
    </article>
}

export default Receipt