import { useState } from "react";
import Form from "./components/Form";
import Receipts from "./components/Receipts";
import ogReceipts from "./receiptData"

function App() {
  const [receipts, setRecipts] = useState (ogReceipts)
  const filterReceipts  =(searchTerm)=>{
    const filterArray = ogReceipts.filter((receipt,index)=>{
      return receipt.person.toLowerCase()===searchTerm.toLowerCase()
    })
    setRecipts(filterArray)
  }
  return (
    <div className="App">
      <h1>Korilla Receipt</h1>
      <Form search={filterReceipts}/>
      <Receipts receipts={receipts}/>
    </div>
  );
}

export default App;
