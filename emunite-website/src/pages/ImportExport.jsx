import { motion } from 'framer-motion'
import { Ship, Globe, Package, Truck, CheckCircle, ArrowRight, FileText, Shield } from 'lucide-react'

const ImportExport = () => {
  const services = [
    {
      icon: Ship,
      title: "Export Services",
      description: "Complete export solutions for Nigerian businesses looking to reach global markets",
      features: ["Documentation", "Logistics", "Quality Control", "Market Research"]
    },
    {
      icon: Package,
      title: "Import Services", 
      description: "Efficient import services for international goods entering Nigerian markets",
      features: ["Customs Clearance", "Warehousing", "Distribution", "Compliance"]
    },
    {
      icon: Truck,
      title: "Logistics Solutions",
      description: "End-to-end logistics management for seamless international trade",
      features: ["Freight Forwarding", "Insurance", "Tracking", "Delivery"]
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete documentation services for international trade compliance",
      features: ["Permits", "Certificates", "Customs Forms", "Insurance"]
    }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-800 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Import & <span className="text-cyan-400">Export</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Connecting Nigerian businesses to global markets with comprehensive import and export services.
            </p>
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImportExport