import {useState} from "react"
function Form(props){
    const [formData, setFormData] = useState({
        searchterm:""
    })

    const handleChange = (event)=>{
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        props.moviesearch(formData.searchterm)

    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm}  />
            <input type="submit" value="submit"/>
        </form>
    </div>

};
export default Form