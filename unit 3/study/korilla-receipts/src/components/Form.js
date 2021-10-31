import {useState} from "react"

function Form (props){
    const [form,setForm]= useState({term:""})
    function handleChange(event){
        setForm({...form,[event.target.name]:event.target.value})
    }
    function handleClick(event){
        const term = form.term
        props.search(term)
    }
    return (
        <div className="Form">
            <input type="text" placeholder="Search By Name" name="term" value={form.term} onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
};
export default Form