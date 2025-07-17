
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import DigitalServices from './components/AllServices/DigitalServices'
import Portfolio from './pages/Portfolio'
import FirstPortfolio from './components/MainPortfolio/FirstPortfolio'
import Insights from './components/Insights'
import InsightDetail from './components/InsightDetail'




function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/digital' element={<DigitalServices />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/firstportfolio' element={<FirstPortfolio />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<InsightDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
