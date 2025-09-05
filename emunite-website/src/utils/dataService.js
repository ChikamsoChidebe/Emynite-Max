// Centralized data service for admin and public site integration
export const getAdminData = (category) => {
  try {
    return JSON.parse(localStorage.getItem(`admin_${category}`) || '[]')
  } catch {
    return []
  }
}

export const getAllAdminData = () => {
  return {
    properties: getAdminData('properties'),
    automobiles: getAdminData('automobiles'),
    agriculture: getAdminData('agriculture'),
    investments: getAdminData('investments'),
    contracts: getAdminData('contracts'),
    mining: getAdminData('mining'),
    importExport: getAdminData('importExport')
  }
}

// Merge admin data with static data
export const getMergedProperties = () => {
  const adminProperties = getAdminData('properties')
  const staticProperties = [
    {
      id: 'static-1',
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
      featured: true
    }
  ]
  
  return [...adminProperties, ...staticProperties]
}

export const getMergedAutomobiles = () => {
  const adminAutomobiles = getAdminData('automobiles')
  return adminAutomobiles
}