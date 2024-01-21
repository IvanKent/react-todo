import './App.css'
import { CssBaseline } from '@mui/material'
import TodoList from './TodoList'
import Navbar from './Navbar'
function App() {
  return (
    <div>
      <CssBaseline/>
      <Navbar/>
      <TodoList/>
    </div>
  )
}

export default App
