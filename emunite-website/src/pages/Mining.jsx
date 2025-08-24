import { motion } from 'framer-motion'
import { Mountain, Gem, Truck, Shield, CheckCircle, ArrowRight, MapPin, TrendingUp } from 'lucide-react'

const Mining = () => {
  const minerals = [
    {
      name: "Cassiterite",
      description: "High-grade tin ore with excellent purity levels for industrial applications",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      purity: "95%+",
      applications: ["Electronics", "Soldering", "Alloys", "Coatings"]
    },
    {
      name: "Gold Ore",
      description: "Premium gold deposits with high concentration and quality extraction",
      image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      purity: "98%+",
      applications: ["Jewelry", "Electronics", "Investment", "Industrial"]
    },
    {
      name: "Iron Ore",
      description: "High-quality iron ore suitable for steel production and manufacturing",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      purity: "92%+",
      applications: ["Steel Production", "Construction", "Manufacturing", "Infrastructure"]
    }
  ]

  const services = [
    {
      icon: Mountain,
      title: "Mineral Extraction",
      description: "Professional mining operations with modern equipment and sustainable practices"
    },
    {
      icon: Gem,
      title: "Processing & Refining",
      description: "Advanced processing facilities to ensure highest quality mineral output"
    },
    {
      icon: Truck,
      title: "Export Services",
      description: "Complete logistics and export solutions for international mineral trade"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and certification to meet international standards"
    }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-800 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mining & <span className="text-yellow-400">Minerals</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              Extracting and processing premium minerals from Nigeria's rich deposits including cassiterite, gold, and iron ore for global markets.
            </p>
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Explore Minerals
            </button>
          </motion.div>
        </div>
      </section>

      {/* Minerals Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-yellow-600">Minerals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality minerals extracted and processed to international standards for global export.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {minerals.map((mineral, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={mineral.image}
                    alt={mineral.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {mineral.purity}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{mineral.name}</h3>
                  <p className="text-gray-600 mb-4">{mineral.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {mineral.applications.map((app, appIndex) => (
                        <span key={appIndex} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Mining <span className="text-yellow-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mining solutions from extraction to export with international quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Partner with Nigeria's Mining Leaders</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Access premium Nigerian minerals with guaranteed quality and reliable supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Mineral Catalog
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition-all">
                Schedule Site Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Mining