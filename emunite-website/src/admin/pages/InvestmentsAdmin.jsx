import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

const InvestmentsAdmin = () => {
  const { adminData, addItem, updateItem, deleteItem } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const investmentFields = [
    { name: 'title', label: 'Investment Title', type: 'text', required: true, placeholder: 'e.g., Real Estate Investment Fund' },
    { name: 'type', label: 'Investment Type', type: 'select', required: true, options: [
      { value: 'real-estate', label: 'Real Estate' },
      { value: 'agriculture', label: 'Agriculture' },
      { value: 'mining', label: 'Mining' },
      { value: 'business', label: 'Business Partnership' },
      { value: 'import-export', label: 'Import/Export' }
    ]},
    { name: 'minInvestment', label: 'Minimum Investment', type: 'text', required: true, placeholder: 'e.g., ₦5,000,000' },
    { name: 'expectedROI', label: 'Expected ROI (%)', type: 'number', placeholder: 'e.g., 15' },
    { name: 'duration', label: 'Investment Duration', type: 'text', placeholder: 'e.g., 12 months' },
    { name: 'riskLevel', label: 'Risk Level', type: 'select', options: [
      { value: 'low', label: 'Low Risk' },
      { value: 'medium', label: 'Medium Risk' },
      { value: 'high', label: 'High Risk' }
    ]},
    { name: 'description', label: 'Description', type: 'textarea', fullWidth: true, placeholder: 'Investment details, terms, conditions...' },
    { name: 'benefits', label: 'Key Benefits', type: 'array', fullWidth: true, placeholder: 'e.g., High Returns, Secure Investment, Professional Management' },
    { name: 'image', label: 'Investment Image', type: 'file', accept: 'image/*' },
    { name: 'status', label: 'Status', type: 'select', options: [
      { value: 'open', label: 'Open for Investment' },
      { value: 'closed', label: 'Closed' },
      { value: 'coming-soon', label: 'Coming Soon' }
    ]},
    { name: 'targetAmount', label: 'Target Amount', type: 'text', placeholder: 'e.g., ₦100,000,000' },
    { name: 'currentAmount', label: 'Current Amount Raised', type: 'text', placeholder: 'e.g., ₦45,000,000' }
  ]

  const filteredInvestments = adminData.investments.filter(investment =>
    investment.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investment.type?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSave = async (formData) => {
    if (editingItem) {
      updateItem('investments', editingItem.id, formData)
    } else {
      addItem('investments', formData)
    }
    setShowForm(false)
    setEditingItem(null)
  }

  const handleEdit = (investment) => {
    setEditingItem(investment)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this investment opportunity?')) {
      deleteItem('investments', id)
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
        fields={investmentFields}
        title={editingItem ? 'Edit Investment' : 'Add New Investment'}
        isEditing={!!editingItem}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Investment Opportunities</h1>
          <p className="text-gray-600">Manage investment opportunities and partnerships</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Investment</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search investments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInvestments.map((investment, index) => (
          <motion.div
            key={investment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {investment.image && (
              <img
                src={investment.image}
                alt={investment.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{investment.title}</h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">{investment.type?.replace('-', ' ')}</p>
              <p className="text-xl font-bold text-green-600 mb-2">Min: {investment.minInvestment}</p>
              
              {investment.expectedROI && (
                <p className="text-sm text-gray-600 mb-2">Expected ROI: {investment.expectedROI}%</p>
              )}
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  investment.status === 'open' ? 'bg-green-100 text-green-800' :
                  investment.status === 'closed' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {investment.status?.replace('-', ' ') || 'Open'}
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(investment)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(investment.id)}
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

      {filteredInvestments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No investment opportunities found. Add your first investment to get started.</p>
        </div>
      )}
    </div>
  )
}

export default InvestmentsAdmin