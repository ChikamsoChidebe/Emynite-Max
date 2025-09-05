import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

const ImportExportAdmin = () => {
  const { adminData, addItem, updateItem, deleteItem } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const importExportFields = [
    { name: 'title', label: 'Service Title', type: 'text', required: true, placeholder: 'e.g., Agricultural Products Export to Europe' },
    { name: 'type', label: 'Service Type', type: 'select', required: true, options: [
      { value: 'import', label: 'Import Services' },
      { value: 'export', label: 'Export Services' },
      { value: 'logistics', label: 'Logistics & Shipping' },
      { value: 'documentation', label: 'Documentation Services' },
      { value: 'customs', label: 'Customs Clearance' }
    ]},
    { name: 'products', label: 'Products/Commodities', type: 'array', fullWidth: true, placeholder: 'e.g., Cocoa, Ginger, Automobiles' },
    { name: 'markets', label: 'Target Markets', type: 'array', fullWidth: true, placeholder: 'e.g., Europe, Asia, North America' },
    { name: 'description', label: 'Service Description', type: 'textarea', fullWidth: true, placeholder: 'Detailed service description, process, requirements...' },
    { name: 'pricing', label: 'Pricing Structure', type: 'text', placeholder: 'e.g., 5% of shipment value' },
    { name: 'minOrder', label: 'Minimum Order Value', type: 'text', placeholder: 'e.g., $10,000' },
    { name: 'image', label: 'Service Image', type: 'file', accept: 'image/*' },
    { name: 'images', label: 'Additional Images', type: 'file', accept: 'image/*', multiple: true },
    { name: 'features', label: 'Service Features', type: 'array', fullWidth: true, placeholder: 'e.g., Door-to-door delivery, Insurance coverage' },
    { name: 'duration', label: 'Processing Time', type: 'text', placeholder: 'e.g., 2-3 weeks' },
    { name: 'certifications', label: 'Certifications', type: 'array', placeholder: 'e.g., ISO 9001, Export License' },
    { name: 'status', label: 'Service Status', type: 'select', options: [
      { value: 'active', label: 'Active' },
      { value: 'seasonal', label: 'Seasonal' },
      { value: 'suspended', label: 'Suspended' }
    ]}
  ]

  const filteredServices = adminData.importExport.filter(service =>
    service.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.type?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSave = async (formData) => {
    if (editingItem) {
      updateItem('importExport', editingItem.id, formData)
    } else {
      addItem('importExport', formData)
    }
    setShowForm(false)
    setEditingItem(null)
  }

  const handleEdit = (service) => {
    setEditingItem(service)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      deleteItem('importExport', id)
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
        fields={importExportFields}
        title={editingItem ? 'Edit Service' : 'Add New Service'}
        isEditing={!!editingItem}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Import & Export Services</h1>
          <p className="text-gray-600">Manage international trade services</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">{service.type?.replace('-', ' ')}</p>
              
              {service.pricing && (
                <p className="text-lg font-bold text-purple-600 mb-2">{service.pricing}</p>
              )}
              
              {service.duration && (
                <p className="text-sm text-gray-600 mb-2">Processing: {service.duration}</p>
              )}
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  service.status === 'active' ? 'bg-green-100 text-green-800' :
                  service.status === 'suspended' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {service.status || 'Active'}
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
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

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No import/export services found. Add your first service to get started.</p>
        </div>
      )}
    </div>
  )
}

export default ImportExportAdmin