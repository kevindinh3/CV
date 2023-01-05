import './styles/App.css'
import React from 'react'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Education from './components/Education'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = 
  // }


  render() {
    return (
      <div className="App">
        CV
        <Contact />
        <Experience />
        <Education />
      </div>
    );
  }
}


export default App
