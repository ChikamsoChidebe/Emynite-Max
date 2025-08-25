import { useEffect } from 'react'

const StructuredData = ({ data }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Emynite Max Global Enterprise",
  "url": "https://emynitemax.com",
  "logo": "https://emynitemax.com/logo.png",
  "description": "Leading Nigerian multi-sector enterprise offering real estate, automobile sales, agricultural processing, mining, import/export and contract services.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Nigeria",
    "addressLocality": "Lagos"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+234-803-092-4734",
    "contactType": "customer service",
    "email": "emynitemaxglobal24@gmail.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/emynite-max",
    "https://twitter.com/emynitemax"
  ]
}

export const realEstateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Emynite Max Real Estate",
  "description": "Premium residential and commercial properties in Nigeria",
  "areaServed": "Nigeria",
  "serviceType": ["Real Estate Sales", "Property Management", "Investment Consulting"]
}

export const automobileSchema = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Emynite Max Automobile",
  "description": "New and certified pre-owned vehicles in Nigeria",
  "areaServed": "Nigeria",
  "brand": ["Toyota", "Mercedes-Benz", "BMW", "Honda"]
}

export default StructuredData