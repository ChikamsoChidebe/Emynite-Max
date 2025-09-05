import { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext()

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}

export const useAdminContext = () => useAdmin()

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminData, setAdminData] = useState(() => {
    // Migrate existing static data to admin system
    const existingProperties = JSON.parse(localStorage.getItem('admin_properties') || '[]')
    
    // If no admin properties exist, migrate static properties
    if (existingProperties.length === 0) {
      const staticProperties = [
        {
          id: 1,
          title: "Brand New 7-Bedroom Duplex",
          type: "luxury",
          price: "₦350,000,000",
          location: "Divine Estate, Amuwo Odofin, Lagos",
          bedrooms: 7,
          bathrooms: 8,
          area: "500 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.25.41 PM.jpeg",
          features: ["C of O", "Brand New", "Luxury Finishes", "Spacious Compound"],
          status: "For Sale",
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: "Brand New 5-Bedroom Duplex with BQ",
          type: "luxury",
          price: "₦380,000,000",
          location: "Amuwo Odofin, Lagos",
          bedrooms: 5,
          bathrooms: 6,
          area: "450 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.38.15 PM.jpeg",
          features: ["Boys Quarter", "C of O", "Luxury Structure", "Electrifying Interior"],
          status: "For Sale",
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          title: "4-Bedroom Semi-Detached Duplex",
          type: "residential",
          price: "₦225,000,000",
          location: "Amuwo Odofin, Lagos",
          bedrooms: 4,
          bathrooms: 5,
          area: "350 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.38.46 PM.jpeg",
          features: ["C of O", "Semi-Detached", "Modern Design", "Prime Location"],
          status: "For Sale",
          featured: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 4,
          title: "3-Bedroom Flat",
          type: "residential",
          price: "₦70,000,000",
          location: "Iponri Housing Estate, Lagos",
          bedrooms: 3,
          bathrooms: 4,
          area: "180 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.38.59 PM.jpeg",
          features: ["Housing Estate", "Well Located", "Affordable", "Ready to Move"],
          status: "For Sale - Open to Offers",
          featured: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 5,
          title: "5-Bedroom Detached Duplex with BQ",
          type: "luxury",
          price: "₦550,000,000",
          location: "Omole Phase 1 Estate, Lagos",
          bedrooms: 5,
          bathrooms: 6,
          area: "600 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.39.00 PM.jpeg",
          features: ["Boys Quarter", "Security House", "C of O", "Prime Estate"],
          status: "For Sale",
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 6,
          title: "Brand New 5-Bedroom Detached Duplex",
          type: "luxury",
          price: "₦250,000,000",
          location: "Estate in Amuwo, Lagos",
          bedrooms: 5,
          bathrooms: 6,
          area: "450 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.39.18 PM (1).jpeg",
          features: ["C of O", "Brand New", "Estate Location", "Detached"],
          status: "For Sale",
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 7,
          title: "4-Bedroom Terrace Duplex",
          type: "residential",
          price: "₦80,000,000",
          location: "Abraham Adesanya Bus Stop, Lagos",
          bedrooms: 4,
          bathrooms: 5,
          area: "300 sqm",
          image: "/WhatsApp Image 2025-08-29 at 1.39.18 PM.jpeg",
          features: ["Building Approval", "Gov Consent", "Spacious Compound", "24hrs Notice"],
          status: "For Sale",
          featured: false,
          createdAt: new Date().toISOString()
        }
      ]
      
      // Save migrated properties to localStorage
      localStorage.setItem('admin_properties', JSON.stringify(staticProperties))
      
      // Add sample data for other sections too
      const sampleAutomobiles = [
        {
          id: 1,
          name: "Mercedes-Benz C-Class 2023",
          category: "new",
          price: "₦28,500,000",
          year: 2023,
          mileage: "0 km",
          fuel: "Petrol",
          transmission: "Automatic",
          image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["Leather Seats", "Sunroof", "MBUX Navigation", "Backup Camera"],
          condition: "Brand New",
          rating: 4.9,
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          name: "Mercedes-Benz GLE 2022",
          category: "luxury",
          price: "₦45,000,000",
          year: 2022,
          mileage: "15,000 km",
          fuel: "Petrol",
          transmission: "Automatic",
          image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["Burmester Sound", "Heated Seats", "Panoramic Roof", "4MATIC AWD"],
          condition: "Excellent",
          rating: 4.8,
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          name: "Mercedes-Benz E-Class 2020",
          category: "tukumbo",
          price: "₦22,800,000",
          year: 2020,
          mileage: "35,000 km",
          fuel: "Petrol",
          transmission: "Automatic",
          image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["MBUX System", "Cruise Control", "AMG Wheels", "Climate Control"],
          condition: "Very Good",
          rating: 4.6,
          featured: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 4,
          name: "Mercedes-Benz G-Class 2023",
          category: "suv",
          price: "₦85,000,000",
          year: 2023,
          mileage: "0 km",
          fuel: "Petrol",
          transmission: "Automatic",
          image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["4MATIC", "Off-Road Package", "AMG Styling", "Premium Interior"],
          condition: "Brand New",
          rating: 4.9,
          featured: true,
          createdAt: new Date().toISOString()
        },
        {
          id: 5,
          name: "Mercedes-Benz S-Class 2021",
          category: "sedan",
          price: "₦65,500,000",
          year: 2021,
          mileage: "18,000 km",
          fuel: "Petrol",
          transmission: "Automatic",
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["Executive Package", "Burmester 3D Audio", "Wireless Charging", "LED Matrix Lights"],
          condition: "Excellent",
          rating: 4.7,
          featured: false,
          createdAt: new Date().toISOString()
        },
        {
          id: 6,
          name: "Mercedes-Benz GLC 2022",
          category: "luxury",
          price: "₦38,000,000",
          year: 2022,
          mileage: "12,000 km",
          fuel: "Petrol",
          transmission: "Automatic",
          image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          features: ["Premium Audio", "Ventilated Seats", "Head-up Display", "Safety Package"],
          condition: "Like New",
          rating: 4.8,
          featured: false,
          createdAt: new Date().toISOString()
        }
      ]
      
      const sampleAgriculture = [
        {
          id: 1,
          name: "Premium Cocoa Beans",
          description: "High-quality cocoa beans processed to international standards for chocolate production",
          image: "/WhatsApp Image 2025-08-24 at 11.13.20 AM (1).jpeg",
          markets: ["Europe", "Asia", "Americas"],
          certifications: ["Organic", "Fair Trade", "ISO 22000"],
          category: "Cash Crops",
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          name: "Fresh Ginger Root",
          description: "Premium quality ginger with excellent flavor and medicinal properties for export",
          image: "/WhatsApp Image 2025-08-24 at 11.13.21 AM (1).jpeg",
          markets: ["Middle East", "Europe", "North America"],
          certifications: ["Organic", "HACCP", "Global GAP"],
          category: "Spices & Herbs",
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          name: "Quality Garlic Bulbs",
          description: "Fresh garlic bulbs with strong aroma and long shelf life for international markets",
          image: "/WhatsApp Image 2025-08-24 at 11.13.21 AM.jpeg",
          markets: ["Asia", "Europe", "Africa"],
          certifications: ["Organic", "ISO 9001", "HACCP"],
          category: "Spices & Herbs",
          createdAt: new Date().toISOString()
        },
        {
          id: 4,
          name: "Palm Kernel Nuts",
          description: "High-quality palm nuts for oil production and industrial applications",
          image: "/WhatsApp Image 2025-08-24 at 11.13.22 AM (1).jpeg",
          markets: ["Asia", "Europe", "Americas"],
          certifications: ["RSPO", "ISO 14001", "HACCP"],
          category: "Oil Seeds",
          createdAt: new Date().toISOString()
        },
        {
          id: 5,
          name: "Dried Hibiscus Flowers",
          description: "Premium dried hibiscus flowers for tea and beverage industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.22 AM.jpeg",
          markets: ["Europe", "North America", "Middle East"],
          certifications: ["Organic", "FDA Approved", "HACCP"],
          category: "Herbs & Flowers",
          createdAt: new Date().toISOString()
        },
        {
          id: 6,
          name: "Sesame Seeds",
          description: "High-quality sesame seeds with excellent oil content for export",
          image: "/WhatsApp Image 2025-08-24 at 11.13.23 AM (1).jpeg",
          markets: ["Asia", "Middle East", "Europe"],
          certifications: ["Organic", "ISO 22000", "HACCP"],
          category: "Oil Seeds",
          createdAt: new Date().toISOString()
        },
        {
          id: 7,
          name: "Cashew Nuts",
          description: "Premium raw cashew nuts processed to international quality standards",
          image: "/WhatsApp Image 2025-08-24 at 11.13.23 AM.jpeg",
          markets: ["Europe", "North America", "Asia"],
          certifications: ["Organic", "Fair Trade", "ISO 9001"],
          category: "Tree Nuts",
          createdAt: new Date().toISOString()
        },
        {
          id: 8,
          name: "Dried Chili Peppers",
          description: "Hot chili peppers dried and processed for spice industry export",
          image: "/WhatsApp Image 2025-08-24 at 11.13.24 AM.jpeg",
          markets: ["Asia", "Europe", "Americas"],
          certifications: ["Organic", "HACCP", "Global GAP"],
          category: "Spices & Herbs",
          createdAt: new Date().toISOString()
        },
        {
          id: 9,
          name: "Moringa Leaves",
          description: "Dried moringa leaves packed with nutrients for health food industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.25 AM (1).jpeg",
          markets: ["Europe", "North America", "Asia"],
          certifications: ["Organic", "FDA Approved", "ISO 22000"],
          category: "Superfoods",
          createdAt: new Date().toISOString()
        },
        {
          id: 10,
          name: "Tiger Nuts",
          description: "Premium tiger nuts rich in fiber and nutrients for health food markets",
          image: "/WhatsApp Image 2025-08-24 at 11.13.25 AM.jpeg",
          markets: ["Europe", "North America", "Middle East"],
          certifications: ["Organic", "Gluten-Free", "HACCP"],
          category: "Superfoods",
          createdAt: new Date().toISOString()
        },
        {
          id: 11,
          name: "Dried Okra",
          description: "Quality dried okra for international food processing industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.26 AM (1).jpeg",
          markets: ["Middle East", "Asia", "Europe"],
          certifications: ["Organic", "HACCP", "ISO 9001"],
          category: "Dried Vegetables",
          createdAt: new Date().toISOString()
        },
        {
          id: 12,
          name: "Baobab Fruit Powder",
          description: "Nutrient-rich baobab fruit powder for superfood and supplement industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.26 AM.jpeg",
          markets: ["Europe", "North America", "Australia"],
          certifications: ["Organic", "Fair Trade", "FDA Approved"],
          category: "Superfoods",
          createdAt: new Date().toISOString()
        },
        {
          id: 13,
          name: "Shea Butter",
          description: "Pure unrefined shea butter for cosmetic and pharmaceutical industries",
          image: "/WhatsApp Image 2025-08-24 at 11.13.27 AM (1).jpeg",
          markets: ["Europe", "North America", "Asia"],
          certifications: ["Organic", "Fair Trade", "ECOCERT"],
          category: "Natural Oils",
          createdAt: new Date().toISOString()
        },
        {
          id: 14,
          name: "Locust Beans",
          description: "Traditional locust beans for food flavoring and seasoning industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.27 AM.jpeg",
          markets: ["Africa", "Europe", "Americas"],
          certifications: ["Organic", "HACCP", "ISO 22000"],
          category: "Seasonings",
          createdAt: new Date().toISOString()
        },
        {
          id: 15,
          name: "Dried Tomatoes",
          description: "Sun-dried tomatoes processed for international food industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.28 AM.jpeg",
          markets: ["Europe", "Middle East", "Asia"],
          certifications: ["Organic", "HACCP", "Global GAP"],
          category: "Dried Vegetables",
          createdAt: new Date().toISOString()
        },
        {
          id: 16,
          name: "Bitter Kola",
          description: "Premium bitter kola nuts for pharmaceutical and traditional medicine",
          image: "/WhatsApp Image 2025-08-24 at 11.13.29 AM (1).jpeg",
          markets: ["Europe", "North America", "Asia"],
          certifications: ["Organic", "FDA Approved", "ISO 9001"],
          category: "Medicinal Plants",
          createdAt: new Date().toISOString()
        },
        {
          id: 17,
          name: "Plantain Flour",
          description: "Processed plantain flour for gluten-free food industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.29 AM (2).jpeg",
          markets: ["Europe", "North America", "Caribbean"],
          certifications: ["Gluten-Free", "Organic", "HACCP"],
          category: "Processed Foods",
          createdAt: new Date().toISOString()
        },
        {
          id: 18,
          name: "Yam Flour",
          description: "High-quality yam flour for international food processing",
          image: "/WhatsApp Image 2025-08-24 at 11.13.29 AM.jpeg",
          markets: ["Europe", "Americas", "Asia"],
          certifications: ["Organic", "HACCP", "ISO 22000"],
          category: "Processed Foods",
          createdAt: new Date().toISOString()
        },
        {
          id: 19,
          name: "Cassava Flour",
          description: "Premium cassava flour processed for gluten-free baking industry",
          image: "/WhatsApp Image 2025-08-24 at 11.13.30 AM (1).jpeg",
          markets: ["Europe", "North America", "Australia"],
          certifications: ["Gluten-Free", "Organic", "Non-GMO"],
          category: "Processed Foods",
          createdAt: new Date().toISOString()
        },
        {
          id: 20,
          name: "Palm Oil",
          description: "Refined palm oil for food processing and industrial applications",
          image: "/WhatsApp Image 2025-08-24 at 11.13.30 AM (2).jpeg",
          markets: ["Asia", "Europe", "Americas"],
          certifications: ["RSPO", "ISO 14001", "HACCP"],
          category: "Natural Oils",
          createdAt: new Date().toISOString()
        },
        {
          id: 21,
          name: "Groundnut Oil",
          description: "Pure groundnut oil extracted for cooking and industrial use",
          image: "/WhatsApp Image 2025-08-24 at 11.13.30 AM.jpeg",
          markets: ["Asia", "Middle East", "Africa"],
          certifications: ["Organic", "HACCP", "ISO 9001"],
          category: "Natural Oils",
          createdAt: new Date().toISOString()
        },
        {
          id: 22,
          name: "Dried Fish",
          description: "Premium dried fish processed for international seafood markets",
          image: "/WhatsApp Image 2025-08-24 at 11.13.31 AM (1).jpeg",
          markets: ["Asia", "Europe", "Americas"],
          certifications: ["HACCP", "MSC Certified", "ISO 22000"],
          category: "Seafood",
          createdAt: new Date().toISOString()
        },
        {
          id: 23,
          name: "Honey",
          description: "Pure natural honey from Nigerian beekeepers for export markets",
          image: "/WhatsApp Image 2025-08-24 at 11.13.31 AM (2).jpeg",
          markets: ["Europe", "North America", "Middle East"],
          certifications: ["Organic", "Fair Trade", "ISO 9001"],
          category: "Natural Products",
          createdAt: new Date().toISOString()
        },
        {
          id: 24,
          name: "Dried Pepper Soup Spice",
          description: "Traditional Nigerian spice blend for international African food markets",
          image: "/WhatsApp Image 2025-08-24 at 11.13.31 AM.jpeg",
          markets: ["Europe", "Americas", "Australia"],
          certifications: ["Organic", "HACCP", "Global GAP"],
          category: "Spice Blends",
          createdAt: new Date().toISOString()
        }
      ]
      
      const sampleInvestments = [
        {
          id: 1,
          title: "Real Estate Investment Fund",
          type: "real-estate",
          minInvestment: "₦5,000,000",
          expectedROI: 18,
          status: "open",
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: "Agricultural Export Partnership",
          type: "agriculture",
          minInvestment: "₦10,000,000",
          expectedROI: 25,
          status: "open",
          createdAt: new Date().toISOString()
        }
      ]
      
      const sampleContracts = [
        {
          id: 1,
          title: "Luxury Residential Complex",
          category: "construction",
          budget: "₦150,000,000",
          status: "in-progress",
          createdAt: new Date().toISOString()
        }
      ]
      
      const sampleImportExport = [
        {
          id: 1,
          title: "Cocoa Export to Europe",
          type: "export",
          pricing: "5% of shipment value",
          status: "active",
          createdAt: new Date().toISOString()
        }
      ]
      
      const sampleMinerals = [
        {
          id: 1,
          name: "Cassiterite",
          description: "High-grade tin ore with excellent purity levels for industrial applications",
          image: "/WhatsApp Image 2025-08-31 at 12.02.45 AM.jpeg",
          purity: "95%+",
          applications: ["Electronics", "Soldering", "Alloys", "Coatings"],
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          name: "Gold Ore",
          description: "Premium gold deposits with high concentration and quality extraction",
          image: "/WhatsApp Image 2025-08-31 at 12.02.48 AM.jpeg",
          purity: "98%+",
          applications: ["Jewelry", "Electronics", "Investment", "Industrial"],
          createdAt: new Date().toISOString()
        },
        {
          id: 3,
          name: "Iron Ore",
          description: "High-quality iron ore suitable for steel production and manufacturing",
          image: "/WhatsApp Image 2025-08-31 at 12.02.58 AM.jpeg",
          purity: "92%+",
          applications: ["Steel Production", "Construction", "Manufacturing", "Infrastructure"],
          createdAt: new Date().toISOString()
        },
        {
          id: 4,
          name: "Columbite",
          description: "High-grade columbite ore for advanced technology applications",
          image: "/WhatsApp Image 2025-08-31 at 12.02.59 AM.jpeg",
          purity: "90%+",
          applications: ["Electronics", "Aerospace", "Medical Devices", "Superconductors"],
          createdAt: new Date().toISOString()
        },
        {
          id: 5,
          name: "Tantalite",
          description: "Premium tantalite ore for high-tech manufacturing and electronics",
          image: "/WhatsApp Image 2025-08-31 at 12.03.02 AM.jpeg",
          purity: "94%+",
          applications: ["Capacitors", "Mobile Phones", "Computers", "Medical Implants"],
          createdAt: new Date().toISOString()
        },
        {
          id: 6,
          name: "Quartz",
          description: "High-purity quartz crystals for industrial and technological applications",
          image: "/WhatsApp Image 2025-08-31 at 12.03.05 AM.jpeg",
          purity: "99%+",
          applications: ["Glass Manufacturing", "Electronics", "Optics", "Semiconductors"],
          createdAt: new Date().toISOString()
        },
        {
          id: 7,
          name: "Barite",
          description: "High-density barite mineral for oil drilling and industrial applications",
          image: "/WhatsApp Image 2025-08-31 at 12.03.06 AM.jpeg",
          purity: "96%+",
          applications: ["Oil Drilling", "Paint Industry", "Rubber Manufacturing", "Plastics"],
          createdAt: new Date().toISOString()
        },
        {
          id: 8,
          name: "Limestone",
          description: "Premium limestone for cement production and construction industry",
          image: "/WhatsApp Image 2025-08-31 at 12.03.12 AM.jpeg",
          purity: "94%+",
          applications: ["Cement Production", "Steel Making", "Glass Industry", "Agriculture"],
          createdAt: new Date().toISOString()
        },
        {
          id: 9,
          name: "Lead Ore",
          description: "High-grade lead ore for battery manufacturing and industrial use",
          image: "/WhatsApp Image 2025-08-31 at 12.03.18 AM.jpeg",
          purity: "88%+",
          applications: ["Battery Manufacturing", "Radiation Shielding", "Ammunition", "Pipes"],
          createdAt: new Date().toISOString()
        },
        {
          id: 10,
          name: "Zinc Ore",
          description: "Quality zinc ore for galvanizing and alloy production",
          image: "/WhatsApp Image 2025-08-31 at 12.03.22 AM.jpeg",
          purity: "85%+",
          applications: ["Galvanizing", "Brass Production", "Die Casting", "Pharmaceuticals"],
          createdAt: new Date().toISOString()
        },
        {
          id: 11,
          name: "Copper Ore",
          description: "High-grade copper ore for electrical and construction industries",
          image: "/WhatsApp Image 2025-08-31 at 12.03.25 AM.jpeg",
          purity: "91%+",
          applications: ["Electrical Wiring", "Plumbing", "Electronics", "Alloys"],
          createdAt: new Date().toISOString()
        },
        {
          id: 12,
          name: "Feldspar",
          description: "Premium feldspar for ceramics and glass manufacturing",
          image: "/WhatsApp Image 2025-08-31 at 12.03.29 AM.jpeg",
          purity: "97%+",
          applications: ["Ceramics", "Glass Making", "Paints", "Plastics"],
          createdAt: new Date().toISOString()
        },
        {
          id: 13,
          name: "Mica",
          description: "High-quality mica for electrical insulation and cosmetic industries",
          image: "/WhatsApp Image 2025-08-31 at 12.03.34 AM.jpeg",
          purity: "93%+",
          applications: ["Electrical Insulation", "Cosmetics", "Paint Industry", "Rubber"],
          createdAt: new Date().toISOString()
        },
        {
          id: 14,
          name: "Kaolin Clay",
          description: "Pure kaolin clay for ceramics and paper manufacturing",
          image: "/WhatsApp Image 2025-08-31 at 12.03.35 AM.jpeg",
          purity: "98%+",
          applications: ["Ceramics", "Paper Industry", "Cosmetics", "Pharmaceuticals"],
          createdAt: new Date().toISOString()
        },
        {
          id: 15,
          name: "Gypsum",
          description: "High-purity gypsum for construction and industrial applications",
          image: "/WhatsApp Image 2025-08-31 at 12.03.37 AM.jpeg",
          purity: "96%+",
          applications: ["Plaster of Paris", "Cement Industry", "Fertilizers", "Paper Industry"],
          createdAt: new Date().toISOString()
        }
      ]
      
      localStorage.setItem('admin_automobiles', JSON.stringify(sampleAutomobiles))
      localStorage.setItem('admin_agriculture', JSON.stringify(sampleAgriculture))
      localStorage.setItem('admin_investments', JSON.stringify(sampleInvestments))
      localStorage.setItem('admin_contracts', JSON.stringify(sampleContracts))
      localStorage.setItem('admin_importExport', JSON.stringify(sampleImportExport))
      localStorage.setItem('admin_minerals', JSON.stringify(sampleMinerals))
      
      return {
        properties: staticProperties,
        automobiles: sampleAutomobiles,
        agriculture: sampleAgriculture,
        investments: sampleInvestments,
        contracts: sampleContracts,
        minerals: sampleMinerals,
        importExport: sampleImportExport
      }
    }
    
    return {
      properties: existingProperties,
      automobiles: JSON.parse(localStorage.getItem('admin_automobiles') || '[]'),
      agriculture: JSON.parse(localStorage.getItem('admin_agriculture') || '[]'),
      investments: JSON.parse(localStorage.getItem('admin_investments') || '[]'),
      contracts: JSON.parse(localStorage.getItem('admin_contracts') || '[]'),
      minerals: JSON.parse(localStorage.getItem('admin_minerals') || '[]'),
      importExport: JSON.parse(localStorage.getItem('admin_importExport') || '[]')
    }
  })

  useEffect(() => {
    const authStatus = localStorage.getItem('admin_auth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }

    // Listen for storage changes across tabs
    const handleStorageChange = (e) => {
      if (e.key && e.key.startsWith('admin_')) {
        const category = e.key.replace('admin_', '')
        const newData = JSON.parse(e.newValue || '[]')
        setAdminData(prev => ({ ...prev, [category]: newData }))
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const login = (password) => {
    if (password === 'emynitemax2024') {
      setIsAuthenticated(true)
      localStorage.setItem('admin_auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_auth')
  }

  const addItem = (category, item) => {
    const newItem = { ...item, id: Date.now(), createdAt: new Date().toISOString() }
    const updatedData = { ...adminData, [category]: [...adminData[category], newItem] }
    setAdminData(updatedData)
    localStorage.setItem(`admin_${category}`, JSON.stringify(updatedData[category]))
    // Trigger storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', {
      key: `admin_${category}`,
      newValue: JSON.stringify(updatedData[category])
    }))
  }

  const updateItem = (category, id, updatedItem) => {
    const updatedData = {
      ...adminData,
      [category]: adminData[category].map(item => 
        item.id === id ? { ...item, ...updatedItem, updatedAt: new Date().toISOString() } : item
      )
    }
    setAdminData(updatedData)
    localStorage.setItem(`admin_${category}`, JSON.stringify(updatedData[category]))
    // Trigger storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', {
      key: `admin_${category}`,
      newValue: JSON.stringify(updatedData[category])
    }))
  }

  const deleteItem = (category, id) => {
    const updatedData = {
      ...adminData,
      [category]: adminData[category].filter(item => item.id !== id)
    }
    setAdminData(updatedData)
    localStorage.setItem(`admin_${category}`, JSON.stringify(updatedData[category]))
    // Trigger storage event for cross-tab sync
    window.dispatchEvent(new StorageEvent('storage', {
      key: `admin_${category}`,
      newValue: JSON.stringify(updatedData[category])
    }))
  }

  // Category-specific functions
  const addProperty = (property) => addItem('properties', property)
  const updateProperty = (id, property) => updateItem('properties', id, property)
  const deleteProperty = (id) => deleteItem('properties', id)
  
  const addAutomobile = (automobile) => addItem('automobiles', automobile)
  const updateAutomobile = (id, automobile) => updateItem('automobiles', id, automobile)
  const deleteAutomobile = (id) => deleteItem('automobiles', id)
  
  const addAgriculture = (agriculture) => addItem('agriculture', agriculture)
  const updateAgriculture = (id, agriculture) => updateItem('agriculture', id, agriculture)
  const deleteAgriculture = (id) => deleteItem('agriculture', id)
  
  const addMineral = (mineral) => addItem('minerals', mineral)
  const updateMineral = (id, mineral) => updateItem('minerals', id, mineral)
  const deleteMineral = (id) => deleteItem('minerals', id)
  
  const addInvestment = (investment) => addItem('investments', investment)
  const updateInvestment = (id, investment) => updateItem('investments', id, investment)
  const deleteInvestment = (id) => deleteItem('investments', id)
  
  const addContract = (contract) => addItem('contracts', contract)
  const updateContract = (id, contract) => updateItem('contracts', id, contract)
  const deleteContract = (id) => deleteItem('contracts', id)
  
  const addImportExport = (item) => addItem('importExport', item)
  const updateImportExport = (id, item) => updateItem('importExport', id, item)
  const deleteImportExport = (id) => deleteItem('importExport', id)

  const value = {
    isAuthenticated,
    adminData,
    login,
    logout,
    addItem,
    updateItem,
    deleteItem,
    // Category-specific data and functions
    properties: adminData.properties,
    addProperty,
    updateProperty,
    deleteProperty,
    automobiles: adminData.automobiles,
    addAutomobile,
    updateAutomobile,
    deleteAutomobile,
    agriculture: adminData.agriculture,
    addAgriculture,
    updateAgriculture,
    deleteAgriculture,
    minerals: adminData.minerals,
    addMineral,
    updateMineral,
    deleteMineral,
    investments: adminData.investments,
    addInvestment,
    updateInvestment,
    deleteInvestment,
    contracts: adminData.contracts,
    addContract,
    updateContract,
    deleteContract,
    importExport: adminData.importExport,
    addImportExport,
    updateImportExport,
    deleteImportExport
  }

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}