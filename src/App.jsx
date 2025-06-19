import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AllTutors from './components/TutorsPage'
import Footer from './components/Footer'
import AllJobs from './components/JobsPage'
import ContactUsPage from './components/ContactUsPage'
import ReviewsPage from './components/ReviewsPage'
import AuthModal from './components/AuthModal'
import ScrollToHash from './components/ScrollToHash'
import TermsAndPrivacy from './components/TermsAndPrivacy'
import RequestTutorPage from './components/RequestTutor'

function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <ScrollToHash/>
        <Routes>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/alltutors" element={<AllTutors />}/>
          <Route path='/alljobs' element={<AllJobs />}/>
          <Route path='/contact-us' element={<ContactUsPage />}/>
          <Route path='/reviewspage' element={<ReviewsPage />}/>
          <Route path='/T&C' element={<TermsAndPrivacy />}/>
          <Route path="/requestTutor" element={<RequestTutorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
