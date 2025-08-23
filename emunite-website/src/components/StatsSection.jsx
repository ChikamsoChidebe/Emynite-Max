import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Building2, Globe, Award, TrendingUp, Star } from 'lucide-react'

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Satisfied Clients',
      description: 'Happy customers across all our business sectors'
    },
    {
      icon: Building2,
      number: 150,
      suffix: '+',
      label: 'Properties Sold',
      description: 'Successful real estate transactions completed'
    },
    {
      icon: Globe,
      number: 25,
      suffix: '+',
      label: 'Countries Reached',
      description: 'International markets for our exports'
    },
    {
      icon: Award,
      number: 10,
      suffix: '+',
      label: 'Years Experience',
      description: 'Decades of excellence in business'
    },
    {
      icon: TrendingUp,
      number: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'Project completion and client satisfaction'
    },
    {
      icon: Star,
      number: 4.9,
      suffix: '/5',
      label: 'Client Rating',
      description: 'Average rating from customer reviews'
    }
  ]

  const Counter = ({ number, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const isCounterInView = useInView(countRef, { once: true })

    useEffect(() => {
      if (isCounterInView) {
        let startTime = null
        const animate = (currentTime) => {
          if (startTime === null) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
          
          setCount(Math.floor(progress * number))
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        requestAnimationFrame(animate)
      }
    }, [isCounterInView, number, duration])

    return (
      <span ref={countRef} className="text-4xl md:text-5xl font-bold text-white">
        {count}{suffix}
      </span>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-700 to-purple-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gold-400">Achievements</span>
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to excellence and the trust our clients place in us.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <Counter number={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-primary-100 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Be Part of Our Success Story?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted Emynite Max Global Enterprise 
              for their business needs across real estate, automotive, agriculture, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection