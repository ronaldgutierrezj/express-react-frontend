import { useRef,useState } from "react"

const Form = (props)=>{
const inputRef = useRef(null)
const [form,setForm]= useState({
    term:""
})
function hadleChange(event){
    setForm({...form, [event.target.name]: event.target.value})
}
const handleClick = (event)=>{
    const term = form.term
    props.search(term)
}

    return (
    <div className="Form">
        <input type ="text" placeholder="Search By Name" ref={inputRef} onChange={hadleChange} value={form.term} name="term"/>
        <button onClick={handleClick}>Submit</button>
    </div>
    )
}
export default Form