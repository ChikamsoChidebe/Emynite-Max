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
import Mining from './pages/Mining'
import Sitemap from './pages/Sitemap'
import WhatsAppButton from './components/WhatsAppButton'
import ChatWidget from './components/ChatWidget'
import ScrollToTop from './components/ScrollToTop'
import { AdminProvider } from './admin/context/AdminContext'
import AdminLogin from './admin/pages/AdminLogin'
import AdminLayout from './admin/components/AdminLayout'
import AdminDashboard from './admin/pages/AdminDashboard'
import PropertiesAdmin from './admin/pages/PropertiesAdmin'
import AutomobilesAdmin from './admin/pages/AutomobilesAdmin'
import AgricultureAdmin from './admin/pages/AgricultureAdmin'
import InvestmentsAdmin from './admin/pages/InvestmentsAdmin'
import ContractsAdmin from './admin/pages/ContractsAdmin'
import ImportExportAdmin from './admin/pages/ImportExportAdmin'
import MiningAdmin from './admin/pages/MiningAdmin'
import ProtectedRoute from './admin/components/ProtectedRoute'

function App() {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="properties/*" element={<PropertiesAdmin />} />
            <Route path="automobiles/*" element={<AutomobilesAdmin />} />
            <Route path="agriculture/*" element={<AgricultureAdmin />} />
            <Route path="investments/*" element={<InvestmentsAdmin />} />
            <Route path="contracts/*" element={<ContractsAdmin />} />
            <Route path="import-export/*" element={<ImportExportAdmin />} />
            <Route path="mining/*" element={<MiningAdmin />} />
          </Route>
          
          {/* Public Routes */}
          <Route path="/*" element={
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
                  <Route path="/mining" element={<Mining />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                </Routes>
              </motion.main>
              <Footer />
              <WhatsAppButton />
              <ChatWidget />
            </div>
          } />
        </Routes>
      </Router>
    </AdminProvider>
  )
}

export default App