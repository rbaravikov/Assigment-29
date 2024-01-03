import './App.css'
import Input from './Components/Input'
import Button from './Components/button'
import List from './Components/List'
import { useEffect, useState } from 'react'
``
function App() {
  const [InputValue, setInputValue] = useState('')
  const [Tasks, setToTasks] = useState([])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('Tasks'))
    setToTasks(storage)
  }, [])

  const handleValueChange = (e) => {
  setInputValue(e.target.value)
  } 

  useEffect(() => {
    Tasks.length!==0 ? localStorage.setItem('Tasks', JSON.stringify(Tasks)) : ''
  }, [Tasks])

  const addToArray = () => {
    if(!InputValue) return alert("Įrašyk užduotį")
    setToTasks([{task: InputValue}, ...Tasks])
    setInputValue(prevInputValue => prevInputValue='')
  }  

  const remove = (x) => {
    setToTasks(prevTasks => prevTasks.filter((arr, index) =>index !== x))
  }

  return (
    <>
      <header>
        <h1>What you have to do?</h1>
    </header>
    <div className="input-container">
        <Input inputValue={InputValue} handleValueChange={handleValueChange} />
        <Button addToArray={addToArray} />
    </div>
    <List Tasks={Tasks} remove={ remove }/>
    </>
  )
}

export default App
