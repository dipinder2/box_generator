import './App.css';
import Form from './components/Form'
import Display from './components/Display'
import {useState} from 'react'

function App() {
  const [div,setDiv] = useState([{}]);


  return (
    <div className="App" >
      <Form div={div} setDiv={setDiv}/>
      <Display div={div}/>
    </div>
  )
}

export default App;
