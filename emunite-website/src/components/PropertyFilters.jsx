import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, X, Search, MapPin, Home, DollarSign } from 'lucide-react'

const PropertyFilters = ({ onFilterChange, activeFilters }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    priceRange: '',
    location: '',
    bedrooms: '',
    propertyType: '',
    features: []
  })

  const priceRanges = [
    { value: '0-100', label: '₦0 - ₦100M' },
    { value: '100-200', label: '₦100M - ₦200M' },
    { value: '200-300', label: '₦200M - ₦300M' },
    { value: '300-500', label: '₦300M - ₦500M' },
    { value: '500+', label: '₦500M+' }
  ]

  const locations = [
    'Amuwo Odofin',
    'Omole Phase 1',
    'Iponri',
    'Abraham Adesanya',
    'Lekki',
    'Victoria Island',
    'Ikeja GRA'
  ]

  const bedroomOptions = ['1', '2', '3', '4', '5', '6', '7+']

  const propertyTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'land', label: 'Land' }
  ]

  const commonFeatures = [
    'C of O',
    'Boys Quarter',
    'Swimming Pool',
    'Security House',
    'Parking',
    'Generator',
    'Fitted Kitchen',
    'Garden'
  ]

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleFeatureToggle = (feature) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature]
    
    const newFilters = { ...filters, features: newFeatures }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters = {
      priceRange: '',
      location: '',
      bedrooms: '',
      propertyType: '',
      features: []
    }
    setFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  const hasActiveFilters = Object.values(filters).some(value => 
    Array.isArray(value) ? value.length > 0 : value !== ''
  )

  return (
    <>
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors relative"
      >
        <Filter className="w-5 h-5" />
        <span>Advanced Filters</span>
        {hasActiveFilters && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-600 rounded-full"></div>
        )}
      </button>

      {/* Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold">Filter Properties</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <DollarSign className="w-4 h-4 inline mr-2" />
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => handleFilterChange('priceRange', range.value)}
                        className={`p-3 text-sm rounded-lg border transition-colors ${
                          filters.priceRange === range.value
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Home className="w-4 h-4 inline mr-2" />
                    Bedrooms
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {bedroomOptions.map((bedroom) => (
                      <button
                        key={bedroom}
                        onClick={() => handleFilterChange('bedrooms', bedroom)}
                        className={`px-4 py-2 text-sm rounded-lg border transition-colors ${
                          filters.bedrooms === bedroom
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {bedroom}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {propertyTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => handleFilterChange('propertyType', type.value)}
                        className={`p-3 text-sm rounded-lg border transition-colors ${
                          filters.propertyType === type.value
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Features
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {commonFeatures.map((feature) => (
                      <button
                        key={feature}
                        onClick={() => handleFeatureToggle(feature)}
                        className={`p-2 text-sm rounded-lg border transition-colors ${
                          filters.features.includes(feature)
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {feature}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-6 border-t bg-gray-50">
              <button
                onClick={clearFilters}
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Clear All
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default PropertyFilters