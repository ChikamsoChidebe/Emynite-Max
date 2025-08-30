import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PropertyGallery from './PropertyGallery'
import { 
  X, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Phone, 
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
  Camera,
  ZoomIn
} from 'lucide-react'

const PropertyModal = ({ property, isOpen, onClose }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  
  if (!property) return null

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${property.title} - ${property.price}. Location: ${property.location}. Can you provide more details?`
    window.open(`https://wa.me/2348030924734?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+2348030924734', '_self')
  }

  const handleEmail = () => {
    const subject = `Inquiry about ${property.title}`
    const body = `Hi,\n\nI'm interested in the following property:\n\nTitle: ${property.title}\nPrice: ${property.price}\nLocation: ${property.location}\n\nPlease provide more details.\n\nThank you.`
    window.open(`mailto:emynitemaxglobal24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 lg:h-full object-cover cursor-pointer"
                  onClick={() => setIsGalleryOpen(true)}
                />
                
                {/* Gallery Button */}
                {property.images && property.images.length > 1 && (
                  <button
                    onClick={() => setIsGalleryOpen(true)}
                    className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-black/80 transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">{property.images.length} Photos</span>
                  </button>
                )}
                
                {/* Zoom Indicator */}
                <div className="absolute top-4 left-4 bg-black/70 text-white p-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-primary-600">{property.price}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {property.status}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h2>
                  
                  <div className="flex items-center space-x-1 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {property.bedrooms && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Bed className="w-6 h-6 mx-auto mb-1 text-primary-600" />
                      <div className="text-sm text-gray-600">Bedrooms</div>
                      <div className="font-semibold">{property.bedrooms}</div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Bath className="w-6 h-6 mx-auto mb-1 text-primary-600" />
                      <div className="text-sm text-gray-600">Bathrooms</div>
                      <div className="font-semibold">{property.bathrooms}</div>
                    </div>
                  )}
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Square className="w-6 h-6 mx-auto mb-1 text-primary-600" />
                    <div className="text-sm text-gray-600">Area</div>
                    <div className="font-semibold">{property.area}</div>
                  </div>
                </div>

                {/* Description */}
                {property.description && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{property.description}</p>
                  </div>
                )}

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Contact Us</h3>
                  
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Inquiry</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleCall}
                      className="bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </button>
                    
                    <button
                      onClick={handleEmail}
                      className="bg-gray-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500 mt-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Available for inspection with 24hrs notice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Property Gallery */}
          <PropertyGallery 
            images={property.images || [property.image]}
            isOpen={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
            title={property.title}
          />
        </div>
      )}
    </AnimatePresence>
  )
}

export default PropertyModal