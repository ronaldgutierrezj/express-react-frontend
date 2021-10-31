import ogReceipts from "./receiptData"
import Form from "./components/Form"
import Receipts from "./components/Receipts"
import {useState} from "react"

function App() {
  const [receipts, setReceipts] = useState(ogReceipts)
  const filter =(searchTerm)=>{ const filterReceipt = ogReceipts.filter((receipt,index)=>{
    return receipt.person === searchTerm
  })
    setReceipts(filterReceipt)  
}
  return (
    <div className="App">
      <h1>Korilla Receipt</h1>
      <Form search={filter}/>
      <Receipts receipts={receipts}/>

    </div>
  );
}

export default App;
