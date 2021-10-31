import Receipt from "./Receipt"
function Receipts ({receipts}){
    const receiptsNew = receipts.map((receipt,index)=>{
            return (
                <Receipt 
                receipt={receipt}
                key={index}
                />
            )
    })
    return (
        <div className="Receipts">
            {receiptsNew}
        </div>
    )
};
export default Receipts