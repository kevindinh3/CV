import './styles/App.css'
import React from 'react'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'

function App() {
  return (
    <div className="App">
      <Contact />
      <Experience />
      <Education />
    </div>
  );
}



export default App