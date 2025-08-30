import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, MessageCircle, Download } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/logo.jpeg" 
                alt="Emynite Max Logo" 
                className="w-12 h-12 object-contain bg-white/10 rounded-lg p-1"
              />
              <div className="text-white/80 text-sm font-medium">
                Emynite Max Global Enterprise
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your 
              <span className="text-gold-400"> Success Journey?</span>
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              Whether you're looking to invest in real estate, purchase a vehicle, 
              export agricultural products, or need contract services, we're here to help you succeed.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Expert consultation and guidance",
                "Competitive pricing and financing options",
                "International market access",
                "24/7 customer support"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                  <span className="text-primary-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>
            </div>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+2348030924734"
                  className="flex items-center space-x-3 text-primary-100 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us Now</p>
                    <p className="text-sm">+234 803 092 4734</p>
                  </div>
                </a>

                <a
                  href="mailto:emynitemaxglobal24@gmail.com"
                  className="flex items-center space-x-3 text-primary-100 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm">emynitemaxglobal24@gmail.com</p>
                  </div>
                </a>

                <button className="flex items-center space-x-3 text-primary-100 hover:text-white transition-colors group w-full">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">WhatsApp Chat</p>
                    <p className="text-sm">Instant response</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-primary-100">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm font-medium">
                  🟢 Currently Open - Ready to assist you!
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Emergency Support</h3>
              <p className="text-red-200 text-sm mb-3">
                For urgent matters and existing client support
              </p>
              <a
                href="tel:+2349133193202"
                className="inline-flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Line</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-primary-200">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">48hrs</div>
              <div className="text-primary-200">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-primary-200">Satisfaction Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection