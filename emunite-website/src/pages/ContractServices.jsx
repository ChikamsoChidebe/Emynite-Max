import { motion } from 'framer-motion'
import { Hammer, Building2, Truck, Package, CheckCircle, ArrowRight } from 'lucide-react'

const ContractServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Construction Services",
      description: "Professional construction and project management for residential and commercial projects",
      features: ["Project Planning", "Quality Control", "Timely Delivery", "Cost Management"]
    },
    {
      icon: Package,
      title: "Building Materials",
      description: "Supply of high-quality building materials including cement, iron, gravel, and more",
      features: ["Quality Materials", "Competitive Pricing", "Bulk Supply", "Delivery Services"]
    },
    {
      icon: Hammer,
      title: "Project Management",
      description: "End-to-end project management ensuring successful completion of construction projects",
      features: ["Timeline Management", "Resource Planning", "Quality Assurance", "Budget Control"]
    },
    {
      icon: Truck,
      title: "Logistics & Supply",
      description: "Efficient logistics and supply chain management for construction materials",
      features: ["Inventory Management", "Just-in-time Delivery", "Storage Solutions", "Transportation"]
    }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-800 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contract <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Professional construction services and building materials supply with expert project management.
            </p>
            <button className="bg-white text-orange-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Quote
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
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
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

export default ContractServices