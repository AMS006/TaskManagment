import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from "./pages/AuthPage"
import Taskpage from './pages/Taskpage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/tasks' element={<Taskpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
