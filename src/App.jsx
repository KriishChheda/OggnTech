import './App.css'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTutors from './components/TutorsPage'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/alltutors" element={<AllTutors />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
