const Receipt = (props)=>{

    const receipt= props.receipt
    const order = receipt.order
    
    return <article className="Receipt">
        <h1>{receipt.person}</h1>
        <h2>{order.main}</h2>
        <hr/>
        <h3>Protein: {order.protein}</h3>
        <h3>Rice: {order.rice}</h3>
        <h3>Sauce: {order.sauce}</h3>
        <h3>Drink: {order.drink}</h3>
        <h2>Total</h2>
        <h3>{order.cost}</h3>
        <h3>{receipt.paid}</h3>


    </article>
}
export default Receipt