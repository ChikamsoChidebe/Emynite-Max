import { useState, useEffect } from 'react'

export const useAdminData = (category) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = () => {
      try {
        const adminData = JSON.parse(localStorage.getItem(`admin_${category}`) || '[]')
        setData(adminData)
      } catch (error) {
        console.error(`Error loading ${category} data:`, error)
        setData([])
      } finally {
        setLoading(false)
      }
    }

    if (category) {
      loadData()
    } else {
      // Return all data when no category specified
      const allData = {
        properties: JSON.parse(localStorage.getItem('admin_properties') || '[]'),
        automobiles: JSON.parse(localStorage.getItem('admin_automobiles') || '[]'),
        agriculture: JSON.parse(localStorage.getItem('admin_agriculture') || '[]'),
        minerals: JSON.parse(localStorage.getItem('admin_minerals') || '[]'),
        investments: JSON.parse(localStorage.getItem('admin_investments') || '[]'),
        contracts: JSON.parse(localStorage.getItem('admin_contracts') || '[]'),
        importExport: JSON.parse(localStorage.getItem('admin_importExport') || '[]')
      }
      setData(allData)
      setLoading(false)
    }

    // Listen for storage changes
    const handleStorageChange = (e) => {
      if (category && e.key === `admin_${category}`) {
        try {
          const newData = JSON.parse(e.newValue || '[]')
          setData(newData)
        } catch (error) {
          console.error(`Error parsing ${category} data:`, error)
        }
      } else if (!category && e.key && e.key.startsWith('admin_')) {
        // Reload all data when no specific category
        const allData = {
          properties: JSON.parse(localStorage.getItem('admin_properties') || '[]'),
          automobiles: JSON.parse(localStorage.getItem('admin_automobiles') || '[]'),
          agriculture: JSON.parse(localStorage.getItem('admin_agriculture') || '[]'),
          minerals: JSON.parse(localStorage.getItem('admin_minerals') || '[]'),
          investments: JSON.parse(localStorage.getItem('admin_investments') || '[]'),
          contracts: JSON.parse(localStorage.getItem('admin_contracts') || '[]'),
          importExport: JSON.parse(localStorage.getItem('admin_importExport') || '[]')
        }
        setData(allData)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [category])

  return category ? { [category]: data, loading, data } : { ...data, loading }
}

export const useAllAdminData = () => {
  const properties = useAdminData('properties')
  const automobiles = useAdminData('automobiles')
  const agriculture = useAdminData('agriculture')
  const investments = useAdminData('investments')
  const contracts = useAdminData('contracts')
  const minerals = useAdminData('minerals')
  const importExport = useAdminData('importExport')

  return {
    properties: properties.data,
    automobiles: automobiles.data,
    agriculture: agriculture.data,
    investments: investments.data,
    contracts: contracts.data,
    minerals: minerals.data,
    importExport: importExport.data,
    loading: properties.loading || automobiles.loading || agriculture.loading
  }
}