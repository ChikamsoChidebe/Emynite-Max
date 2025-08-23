import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import RealEstate from './pages/RealEstate'
import Automobile from './pages/Automobile'
import Agriculture from './pages/Agriculture'
import ImportExport from './pages/ImportExport'
import ContractServices from './pages/ContractServices'
import Investors from './pages/Investors'
import Contact from './pages/Contact'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/automobile" element={<Automobile />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/import-export" element={<ImportExport />} />
            <Route path="/contract-services" element={<ContractServices />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App