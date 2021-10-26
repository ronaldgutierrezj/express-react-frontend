import Receipt from "./Receipt"

function Receipts(props){
    return <div className="Receipts">
        {props.receipts.map((receipt, index) => {
            return <Receipt receipt={receipt} key={index}/>
        })}
    </div>
}

export default Receipts