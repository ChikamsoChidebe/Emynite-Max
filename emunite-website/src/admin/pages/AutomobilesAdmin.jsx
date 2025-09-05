import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

const AutomobilesAdmin = () => {
  const { adminData, addItem, updateItem, deleteItem } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCondition, setFilterCondition] = useState('all')

  const automobileFields = [
    { name: 'make', label: 'Make', type: 'text', required: true, placeholder: 'e.g., Toyota, Honda, Mercedes' },
    { name: 'model', label: 'Model', type: 'text', required: true, placeholder: 'e.g., Camry, Accord, C-Class' },
    { name: 'year', label: 'Year', type: 'number', required: true, placeholder: '2020' },
    { name: 'price', label: 'Price (₦)', type: 'text', required: true, placeholder: 'e.g., ₦15,000,000' },
    { name: 'condition', label: 'Condition', type: 'select', required: true, options: [
      { value: 'new', label: 'Brand New' },
      { value: 'foreign-used', label: 'Foreign Used (Tukumbo)' },
      { value: 'nigerian-used', label: 'Nigerian Used' }
    ]},
    { name: 'mileage', label: 'Mileage (km)', type: 'number', placeholder: 'Odometer reading' },
    { name: 'fuelType', label: 'Fuel Type', type: 'select', options: [
      { value: 'petrol', label: 'Petrol' },
      { value: 'diesel', label: 'Diesel' },
      { value: 'hybrid', label: 'Hybrid' },
      { value: 'electric', label: 'Electric' }
    ]},
    { name: 'transmission', label: 'Transmission', type: 'select', options: [
      { value: 'automatic', label: 'Automatic' },
      { value: 'manual', label: 'Manual' }
    ]},
    { name: 'color', label: 'Color', type: 'text', placeholder: 'e.g., Black, White, Silver' },
    { name: 'description', label: 'Description', type: 'textarea', fullWidth: true, placeholder: 'Vehicle details, history, condition...' },
    { name: 'features', label: 'Features', type: 'array', fullWidth: true, placeholder: 'e.g., Air Conditioning, Leather Seats, Navigation' },
    { name: 'image', label: 'Main Image', type: 'file', accept: 'image/*' },
    { name: 'images', label: 'Additional Images', type: 'file', accept: 'image/*', multiple: true },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'Where the vehicle is located' },
    { name: 'status', label: 'Status', type: 'select', options: [
      { value: 'available', label: 'Available' },
      { value: 'sold', label: 'Sold' },
      { value: 'reserved', label: 'Reserved' }
    ]},
    { name: 'contact', label: 'Contact Number', type: 'tel', placeholder: '+234 803 092 4734' }
  ]

  const filteredAutomobiles = adminData.automobiles.filter(auto => {
    const matchesSearch = auto.make?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auto.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auto.year?.toString().includes(searchTerm)
    const matchesFilter = filterCondition === 'all' || auto.condition === filterCondition
    return matchesSearch && matchesFilter
  })

  const handleSave = async (formData) => {
    if (editingItem) {
      updateItem('automobiles', editingItem.id, formData)
    } else {
      addItem('automobiles', formData)
    }
    setShowForm(false)
    setEditingItem(null)
  }

  const handleEdit = (automobile) => {
    setEditingItem(automobile)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      deleteItem('automobiles', id)
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
        fields={automobileFields}
        title={editingItem ? 'Edit Vehicle' : 'Add New Vehicle'}
        isEditing={!!editingItem}
      />
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Automobiles</h1>
          <p className="text-gray-600">Manage vehicle inventory</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Vehicle</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterCondition}
            onChange={(e) => setFilterCondition(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Conditions</option>
            <option value="new">Brand New</option>
            <option value="foreign-used">Foreign Used</option>
            <option value="nigerian-used">Nigerian Used</option>
          </select>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAutomobiles.map((automobile, index) => (
          <motion.div
            key={automobile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {automobile.image && (
              <img
                src={automobile.image}
                alt={`${automobile.make} ${automobile.model}`}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {automobile.year} {automobile.make} {automobile.model}
              </h3>
              
              <p className="text-2xl font-bold text-green-600 mb-2">{automobile.price}</p>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Condition:</span>
                  <span className="capitalize">{automobile.condition?.replace('-', ' ')}</span>
                </div>
                {automobile.mileage && (
                  <div className="flex justify-between">
                    <span>Mileage:</span>
                    <span>{automobile.mileage.toLocaleString()} km</span>
                  </div>
                )}
                {automobile.fuelType && (
                  <div className="flex justify-between">
                    <span>Fuel:</span>
                    <span className="capitalize">{automobile.fuelType}</span>
                  </div>
                )}
                {automobile.transmission && (
                  <div className="flex justify-between">
                    <span>Transmission:</span>
                    <span className="capitalize">{automobile.transmission}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  automobile.status === 'available' ? 'bg-green-100 text-green-800' :
                  automobile.status === 'sold' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {automobile.status || 'Available'}
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(automobile)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(automobile.id)}
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

      {filteredAutomobiles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No vehicles found. Add your first vehicle to get started.</p>
        </div>
      )}
    </div>
  )
}

export default AutomobilesAdmin