import './styles/App.css'
import React, { useState } from 'react'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  const[editContact, setEditContact] = useState(false);
  const[editExperience, setEditExperience] = useState(false);
  const[editEducation, setEditEducation] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setEditContact(!editContact)}>Edit</button>
      { editContact ? <Contact /> : <p>Default contact here</p>}
      <button onClick={() => setEditExperience(!editExperience)}>Edit</button>
      { editExperience ? <Experience />: <p>Default experience here</p>}
      <button onClick={() => setEditEducation(!editEducation)}>Edit</button>
      { editEducation ? <Education /> : <p>Default education</p>}
    </div>
  );
}



export default App
