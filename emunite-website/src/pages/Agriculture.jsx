import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { Wheat, Globe, Award, Truck, CheckCircle, ArrowRight, Leaf, Package, Shield } from 'lucide-react'

const Agriculture = () => {
  const products = [
    {
      name: "Premium Cocoa",
      description: "High-quality cocoa beans processed to international standards",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      markets: ["Europe", "Asia", "Americas"],
      certifications: ["Organic", "Fair Trade", "ISO 22000"]
    },
    {
      name: "Fresh Ginger",
      description: "Premium quality ginger with excellent flavor and medicinal properties",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      markets: ["Middle East", "Europe", "North America"],
      certifications: ["Organic", "HACCP", "Global GAP"]
    },
    {
      name: "Quality Garlic",
      description: "Fresh garlic bulbs with strong aroma and long shelf life",
      image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      markets: ["Asia", "Europe", "Africa"],
      certifications: ["Organic", "ISO 9001", "HACCP"]
    },
    {
      name: "Palm Nuts",
      description: "High-quality palm nuts for oil production and industrial use",
      image: "https://images.unsplash.com/photo-1566281796817-93bc94d7dbd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      markets: ["Asia", "Europe", "Americas"],
      certifications: ["RSPO", "ISO 14001", "HACCP"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Sourcing",
      description: "Direct sourcing from certified farmers and cooperatives across Nigeria"
    },
    {
      step: "02", 
      title: "Processing",
      description: "State-of-the-art processing facilities with quality control at every stage"
    },
    {
      step: "03",
      title: "Quality Control",
      description: "Rigorous testing and certification to meet international standards"
    },
    {
      step: "04",
      title: "Packaging",
      description: "Professional packaging designed for international shipping and storage"
    },
    {
      step: "05",
      title: "Export",
      description: "Efficient logistics and documentation for global market delivery"
    }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      <SEO 
        title="Agricultural Processing & Export from Nigeria - Cocoa, Ginger, Garlic | Emynite Max"
        description="Premium Nigerian agricultural products for export. Cocoa processing, ginger, garlic, palm nuts. International quality standards and global market reach."
        keywords="agriculture export Nigeria, cocoa processing, ginger export, garlic Nigeria, palm nuts, agricultural products Nigeria, farm to export"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-800 to-emerald-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Agriculture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Agricultural <span className="text-yellow-400">Excellence</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              From farm to global markets - we process and export premium Nigerian agricultural 
              products including cocoa, ginger, garlic, and palm nuts to international buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Our Products
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-all">
                Export Inquiry
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
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
              Our Premium <span className="text-green-600">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in processing and exporting high-quality agricultural products that meet international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
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
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Export Markets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.markets.map((market, marketIndex) => (
                        <span key={marketIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {market}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, certIndex) => (
                        <span key={certIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
              Farm to <span className="text-green-600">Global Markets</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive process ensures quality at every step from sourcing to delivery.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Export Quality Agricultural Products?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Partner with us for reliable supply of premium Nigerian agricultural products to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Product Catalog
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all">
                Become a Partner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Agriculture