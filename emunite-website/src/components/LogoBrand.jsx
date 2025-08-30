import { motion } from 'framer-motion'

const LogoBrand = ({ size = 'md', variant = 'default', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const variants = {
    default: 'object-contain',
    rounded: 'object-contain rounded-lg',
    circle: 'object-contain rounded-full',
    square: 'object-contain rounded-xl'
  }

  return (
    <motion.img 
      src="/logo.jpeg" 
      alt="Emynite Max Global Enterprise Logo" 
      className={`${sizeClasses[size]} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    />
  )
}

export default LogoBrand