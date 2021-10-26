import {useState} from "react"
import Receipts from "./components/Receipts";
import ogReceipts from "./receiptData";
import Form from "./components/Form";

function App() {

  const [receipts, setReceipts] = useState(ogReceipts)

  const filterReceipts = (searchTerm) => {

    const filteredArray = ogReceipts.filter((receipt, index) => {
      return receipt.person.toLowerCase() === searchTerm.toLowerCase()
    })

    setReceipts(filteredArray)
  }

  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      <Form search={filterReceipts}/>
      <Receipts receipts={receipts}/>
    </div>
  );
}

export default App;
