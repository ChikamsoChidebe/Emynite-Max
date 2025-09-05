import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react'

const PropertiesAdmin = () => {
  const { adminData, addItem, updateItem, deleteItem } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const propertyFields = [
    { name: 'title', label: 'Property Title', type: 'text', required: true, placeholder: 'e.g., Luxury 5-Bedroom Duplex' },
    { name: 'price', label: 'Price (₦)', type: 'text', required: true, placeholder: 'e.g., ₦350,000,000' },
    { name: 'location', label: 'Location', type: 'text', required: true, placeholder: 'e.g., Amuwo Odofin, Lagos' },
    { name: 'type', label: 'Property Type', type: 'select', required: true, options: [
      { value: 'residential', label: 'Residential' },
      { value: 'commercial', label: 'Commercial' },
      { value: 'luxury', label: 'Luxury' },
      { value: 'land', label: 'Land' }
    ]},
    { name: 'bedrooms', label: 'Bedrooms', type: 'number', placeholder: 'Number of bedrooms' },
    { name: 'bathrooms', label: 'Bathrooms', type: 'number', placeholder: 'Number of bathrooms' },
    { name: 'area', label: 'Area', type: 'text', placeholder: 'e.g., 450 sqm' },
    { name: 'description', label: 'Description', type: 'textarea', fullWidth: true, placeholder: 'Detailed property description...' },
    { name: 'features', label: 'Features', type: 'array', fullWidth: true, placeholder: 'e.g., Swimming Pool, BQ, C of O' },
    { name: 'image', label: 'Main Image', type: 'file', accept: 'image/*' },
    { name: 'images', label: 'Additional Images', type: 'file', accept: 'image/*', multiple: true },
    { name: 'status', label: 'Status', type: 'select', options: [
      { value: 'For Sale', label: 'For Sale' },
      { value: 'Sold', label: 'Sold' },
      { value: 'Under Offer', label: 'Under Offer' }
    ]},
    { name: 'featured', label: 'Featured Property', type: 'select', options: [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' }
    ]},
    { name: 'contact', label: 'Contact Number', type: 'tel', placeholder: '+234 803 092 4734' }
  ]

  const filteredProperties = adminData.properties.filter(property => {
    const matchesSearch = property.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || property.type === filterType
    return matchesSearch && matchesFilter
  })

  const handleSave = async (formData) => {
    if (editingItem) {
      updateItem('properties', editingItem.id, formData)
    } else {
      addItem('properties', formData)
    }
    setShowForm(false)
    setEditingItem(null)
  }

  const handleEdit = (property) => {
    setEditingItem(property)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteItem('properties', id)
    }
  }

  if (showForm) {
    return (
      <ItemForm
        item={editingItem || {}}
        onSave={handleSave}
        onCancel={() => {
          setShowForm(false)
          setEditingItem(null)
        }}
        fields={propertyFields}
        title={editingItem ? 'Edit Property' : 'Add New Property'}
        isEditing={!!editingItem}
      />
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-600">Manage real estate listings</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Property</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="luxury">Luxury</option>
            <option value="land">Land</option>
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {property.image && (
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {property.title}
                </h3>
                {property.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <p className="text-2xl font-bold text-blue-600 mb-2">{property.price}</p>
              <p className="text-gray-600 mb-2">{property.location}</p>
              
              {(property.bedrooms || property.bathrooms) && (
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  {property.bedrooms && <span>{property.bedrooms} beds</span>}
                  {property.bathrooms && <span>{property.bathrooms} baths</span>}
                  {property.area && <span>{property.area}</span>}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  property.status === 'For Sale' ? 'bg-green-100 text-green-800' :
                  property.status === 'Sold' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {property.status || 'For Sale'}
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(property)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(property.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No properties found. Add your first property to get started.</p>
        </div>
      )}
    </div>
  )
}

export default PropertiesAdmin