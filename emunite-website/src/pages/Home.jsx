import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Building2, 
  Car, 
  Wheat, 
  Ship, 
  Hammer, 
  TrendingUp,
  ArrowRight,
  Star,
  Users,
  Award,
  Globe,
  CheckCircle,
  Play
} from 'lucide-react'
import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div className="pt-28 lg:pt-32">
      <SEO 
        title="Emynite Max Global Enterprise - Real Estate, Automobile, Agriculture & Mining in Nigeria"
        description="Leading Nigerian enterprise offering premium real estate, automobile sales, agricultural processing, mining, import/export and contract services. Your trusted business partner."
        keywords="Emynite Max, Nigeria business, real estate Lagos, automobile sales Nigeria, agriculture export, mining Nigeria, cassiterite, investment opportunities"
      />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home