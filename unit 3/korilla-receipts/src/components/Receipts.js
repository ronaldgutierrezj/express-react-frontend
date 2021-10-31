import Receipt from "./Receipt"

const Receipts = (props)=>{


    return (
        <div className="Receipts">
            {props.receipts.map((receipt,index)=>{
                return <Receipt receipt = {receipt} key={index}/>
            })}
        </div>
    )
}
export default Receipts