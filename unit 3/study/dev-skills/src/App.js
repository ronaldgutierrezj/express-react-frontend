import { useState, useRef} from "react";
export default function App() {
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 }])

  const [form, setForm] = useState({
    skill: "",
    level: "3"
  })
  const [valid, setValid] = useState(false)
const formRef = useRef(null)

  function addSkill(event) {
    if(formRef.current.checkValidity()) {
      event.preventDefault()
      // create a copy of the current form state
      const newState = [...skills]
      // modify the copy with the changes
      // newState.push({skill: form.skill, level: form.level})
        newState.push({
          skill:formRef.current[0].value,
          level: formRef.current[1].value
        })
      // update the state
      setSkills(newState)
    }
    
  }
  
  function handleChange(event){
    console.log(event)
   setValid(!formRef.current.checkValidity())
    const newState={...form}
    newState[event.target.name] = event.target.value
    setForm(newState)
  }
  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form onSubmit={addSkill} ref={formRef}>
        <label>
          <span>SKILL</span>
          <input 
          name="skill" 
          value={form.skill} 
          onChange={handleChange}
          required
          pattern=".{3,}"/>
        </label>
        <label>
          <span>LEVEL</span>
          <select 
          name="level" 
          value={form.level} 
          onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button disabled={valid}>ADD SKILL</button>
      </form>
    </section>
  );
}
