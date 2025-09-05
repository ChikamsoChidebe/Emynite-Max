import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

const AgricultureAdmin = () => {
  const { adminData, addItem, updateItem, deleteItem } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const agricultureFields = [
    { name: 'name', label: 'Product Name', type: 'text', required: true, placeholder: 'e.g., Premium Cocoa Beans' },
    { name: 'category', label: 'Category', type: 'select', required: true, options: [
      { value: 'cocoa', label: 'Cocoa' },
      { value: 'ginger', label: 'Ginger' },
      { value: 'garlic', label: 'Garlic' },
      { value: 'palm-nuts', label: 'Palm Nuts' },
      { value: 'other', label: 'Other' }
    ]},
    { name: 'price', label: 'Price per Unit', type: 'text', placeholder: 'e.g., $2,500/ton' },
    { name: 'unit', label: 'Unit', type: 'select', options: [
      { value: 'ton', label: 'Ton' },
      { value: 'kg', label: 'Kilogram' },
      { value: 'bag', label: 'Bag' },
      { value: 'container', label: 'Container' }
    ]},
    { name: 'origin', label: 'Origin', type: 'text', placeholder: 'e.g., Osun State, Nigeria' },
    { name: 'quality', label: 'Quality Grade', type: 'select', options: [
      { value: 'premium', label: 'Premium Grade' },
      { value: 'standard', label: 'Standard Grade' },
      { value: 'export', label: 'Export Quality' }
    ]},
    { name: 'description', label: 'Description', type: 'textarea', fullWidth: true, placeholder: 'Product details, processing method, quality specifications...' },
    { name: 'specifications', label: 'Specifications', type: 'array', fullWidth: true, placeholder: 'e.g., Moisture Content: 7%, Fat Content: 50%' },
    { name: 'image', label: 'Product Image', type: 'file', accept: 'image/*' },
    { name: 'images', label: 'Additional Images', type: 'file', accept: 'image/*', multiple: true },
    { name: 'availability', label: 'Availability', type: 'select', options: [
      { value: 'in-stock', label: 'In Stock' },
      { value: 'pre-order', label: 'Pre-Order' },
      { value: 'seasonal', label: 'Seasonal' },
      { value: 'out-of-stock', label: 'Out of Stock' }
    ]},
    { name: 'minOrder', label: 'Minimum Order', type: 'text', placeholder: 'e.g., 5 tons' },
    { name: 'exportMarkets', label: 'Export Markets', type: 'array', placeholder: 'e.g., Europe, Asia, North America' },
    { name: 'certifications', label: 'Certifications', type: 'array', placeholder: 'e.g., Organic, Fair Trade, HACCP' }
  ]

  const filteredProducts = adminData.agriculture.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSave = async (formData) => {
    if (editingItem) {
      updateItem('agriculture', editingItem.id, formData)
    } else {
      addItem('agriculture', formData)
    }
    setShowForm(false)
    setEditingItem(null)
  }

  const handleEdit = (product) => {
    setEditingItem(product)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteItem('agriculture', id)
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
        fields={agricultureFields}
        title={editingItem ? 'Edit Product' : 'Add New Product'}
        isEditing={!!editingItem}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Agriculture Products</h1>
          <p className="text-gray-600">Manage agricultural products and exports</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
              <p className="text-xl font-bold text-green-600 mb-2">{product.price}</p>
              
              {product.origin && (
                <p className="text-sm text-gray-600 mb-2">Origin: {product.origin}</p>
              )}
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  product.availability === 'in-stock' ? 'bg-green-100 text-green-800' :
                  product.availability === 'out-of-stock' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {product.availability?.replace('-', ' ') || 'Available'}
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
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

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found. Add your first agricultural product to get started.</p>
        </div>
      )}
    </div>
  )
}

export default AgricultureAdmin