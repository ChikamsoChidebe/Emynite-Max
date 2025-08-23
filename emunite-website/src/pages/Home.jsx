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
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CTASection from '../components/CTASection'

const Home = () => {
  return (
    <div className="pt-28 lg:pt-32">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default Home