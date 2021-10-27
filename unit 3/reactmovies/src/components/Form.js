import React,{useState} from "react";

const Form = (props) => {
    const [formData, setFormData] = useState({
        searchterm: ""
    })
    // handlechange function to sync state with input
    const handleChange = (event) => {
        // create a copy of state
        const newState = {...formData}
        // altered the correct property in the copy
        newState[event.target.name] = event.target.value
        // update the state
        setFormData(newState)
    }
    //handleSubmit function for when the form submits
    const handleSubmit = (event) => {
        // prevent the page from refreshing
        event.preventDefault()
        // pass the search from the formData to the function in the props
        props.moviesearch(formData.searchterm)
}
    return <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm}/>
            <input type="submit" value="submit" />
        </form>
    </div>
}

export default Form