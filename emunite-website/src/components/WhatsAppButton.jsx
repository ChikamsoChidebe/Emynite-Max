import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const WhatsAppButton = () => {
  const location = useLocation()
  const whatsappNumber = "+2348030924734"
  
  const getContextualMessage = () => {
    const path = location.pathname
    
    if (path === '/real-estate') {
      return 'Hello! I\'m interested in your real estate properties. Can you show me available options?'
    } else if (path === '/automobile') {
      return 'Hello! I\'m interested in your automobile sales. Can you provide information about available vehicles?'
    } else if (path === '/agriculture') {
      return 'Hello! I\'m interested in your agricultural products and export services. Can you provide more details?'
    } else if (path === '/mining') {
      return 'Hello! I\'m interested in your mining operations and cassiterite. Can you provide more information?'
    } else if (path === '/import-export') {
      return 'Hello! I\'m interested in your import/export services. Can you help with my business needs?'
    } else if (path === '/contract-services') {
      return 'Hello! I\'m interested in your contract services. Can you provide information about your capabilities?'
    } else if (path === '/investors') {
      return 'Hello! I\'m interested in investment opportunities with Emynite Max. Can you provide more details?'
    } else {
      return 'Hello! I\'m interested in Emynite Max services. Can you provide more information about your business offerings?'
    }
  }

  const handleWhatsAppClick = () => {
    const message = getContextualMessage()
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </motion.button>
    </motion.div>
  )
}

export default WhatsAppButton