import {useRef, useState} from "react"

function Form(props){
    const inputRef = useRef(null)

    const [form, setForm] = useState({
        term: ""
    })

     function handleChange(event){
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleClick = (event) => {
       const term = form.term
       props.search(term)
    }

    return <div class="Form">
        <input type="text" ref={inputRef} value={form.term} onChange={handleChange}name="term"></input>
        <button onClick={handleClick}>Search</button>
    </div>
}

export default Form