import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTutors from './components/TutorsPage'
import Footer from './components/Footer'
import AllJobs from './components/JobsPage'
import ContactUsPage from './components/ContactUsPage'

function App() {


  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/alltutors" element={<AllTutors />}/>
          <Route path='/alljobs' element={<AllJobs />}/>
          <Route path='/contact-us' element={<ContactUsPage />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
