// importing the useState
import React, { useState, useRef } from "react";

export default function App() {
  // declare state to hold our skills
  const [skills, setSkills] = useState([{ skill: "JavaScript", level: 4 }])
  
    // declare state for the form data
    const [form, setForm] = useState({
      skill: "",
      level: "3"
    })

      // declare state to track form validity
  const [valid, setValid] = useState(false)

   // a ref for refer to form
   const formRef = useRef(null) 
    
    // add the skills to skill when form is submitted
    function addSkill(event) {
      console.log(formRef);
      // don't add an item if form is not valie
      if (formRef.current.checkValidity()) {
        // prevent the refresh
        event.preventDefault();
        //copy the state
        const newState = [...skills];
        // modify the copy
        newState.push({
          skill: formRef.current[0].value,
          level: formRef.current[1].value,
        });
        // update the state
        setSkills(newState);
      }
    }

    function handleChange(event) {
      //set validity
      setValid(!formRef.current.checkValidity())
      // make a copy of the current state
      const newState = { ...form };
      // update the new object
      newState[event.target.name] = event.target.value;
      // update the state
      setForm(newState);
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
          pattern=".{3,}"
          />
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={form.level} onChange={handleChange}>
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