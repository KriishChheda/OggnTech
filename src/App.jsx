import './App.css'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTutors from './components/TutorsPage'

function App() {


  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/alltutors" element={<AllTutors />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
