import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { ExternalLink, Home, Info, Building2, Car, Wheat, Mountain, Ship, Hammer, TrendingUp, Phone } from 'lucide-react'

const Sitemap = () => {
  const sitePages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main homepage with company overview' },
    { name: 'About Us', path: '/about', icon: Info, description: 'Learn about our company history and mission' },
    { name: 'Real Estate', path: '/real-estate', icon: Building2, description: 'Premium properties and investment opportunities' },
    { name: 'Automobile', path: '/automobile', icon: Car, description: 'New and certified pre-owned vehicles' },
    { name: 'Agriculture', path: '/agriculture', icon: Wheat, description: 'Agricultural processing and export services' },
    { name: 'Mining & Minerals', path: '/mining', icon: Mountain, description: 'Mineral extraction and processing operations' },
    { name: 'Import & Export', path: '/import-export', icon: Ship, description: 'International trade and logistics services' },
    { name: 'Contract Services', path: '/contract-services', icon: Hammer, description: 'Construction and building materials' },
    { name: 'Investors', path: '/investors', icon: TrendingUp, description: 'Investment opportunities and partnerships' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with our team' }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      <SEO 
        title="Sitemap - Emynite Max Global Enterprise | All Pages Directory"
        description="Complete sitemap of Emynite Max Global Enterprise website. Find all pages including real estate, automobile, agriculture, mining, and business services."
        keywords="sitemap, Emynite Max pages, website navigation, business services directory, Nigeria company pages"
      />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Site <span className="text-gold-400">Map</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Navigate through all pages and services offered by Emynite Max Global Enterprise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitePages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <Link to={page.path} className="block">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                      <page.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {page.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <span>{page.path}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {page.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Finding Something?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our team is here to help you navigate our services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sitemap