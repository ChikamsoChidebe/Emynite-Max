import { motion } from 'framer-motion'
import { TrendingUp, Globe, Shield, Award, CheckCircle, ArrowRight, DollarSign, BarChart } from 'lucide-react'

const Investors = () => {
  const opportunities = [
    {
      icon: TrendingUp,
      title: "Real Estate Investment",
      description: "High-yield real estate opportunities in Nigeria's growing property market",
      roi: "15-25% Annual ROI",
      minInvestment: "$50,000"
    },
    {
      icon: Globe,
      title: "Agricultural Exports",
      description: "Partner with us in expanding agricultural export operations to global markets",
      roi: "20-30% Annual ROI", 
      minInvestment: "$25,000"
    },
    {
      icon: Shield,
      title: "Mining Ventures",
      description: "Investment opportunities in Nigeria's rich mineral resources including cassite",
      roi: "25-40% Annual ROI",
      minInvestment: "$100,000"
    }
  ]

  return (
    <div className="pt-28 lg:pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-800 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Investment <span className="text-pink-400">Opportunities</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Discover lucrative investment opportunities in Nigeria's growing economy across multiple sectors.
            </p>
            <button className="bg-white text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Opportunities
            </button>
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <opportunity.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-6">{opportunity.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected ROI:</span>
                    <span className="font-semibold text-green-600">{opportunity.roi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Min. Investment:</span>
                    <span className="font-semibold text-purple-600">{opportunity.minInvestment}</span>
                  </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Investors