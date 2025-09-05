import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

const ContractsAdmin = () => {
  const { adminData, addItem, updateItem, deleteItem } = useAdmin()
  const [showForm, setShowForm] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const contractFields = [
    { name: 'title', label: 'Project Title', type: 'text', required: true, placeholder: 'e.g., Residential Complex Construction' },
    { name: 'category', label: 'Service Category', type: 'select', required: true, options: [
      { value: 'construction', label: 'Construction' },
      { value: 'building-materials', label: 'Building Materials Supply' },
      { value: 'project-management', label: 'Project Management' },
      { value: 'renovation', label: 'Renovation' },
      { value: 'infrastructure', label: 'Infrastructure' }
    ]},
    { name: 'budget', label: 'Project Budget', type: 'text', placeholder: 'e.g., ₦50,000,000' },
    { name: 'duration', label: 'Project Duration', type: 'text', placeholder: 'e.g., 6 months' },
    { name: 'location', label: 'Project Location', type: 'text', placeholder: 'e.g., Lagos, Nigeria' },
    { name: 'description', label: 'Project Description', type: 'textarea', fullWidth: true, placeholder: 'Detailed project description, scope, requirements...' },
    { name: 'services', label: 'Services Included', type: 'array', fullWidth: true, placeholder: 'e.g., Design, Construction, Materials Supply' },
    { name: 'image', label: 'Project Image', type: 'file', accept: 'image/*' },
    { name: 'images', label: 'Additional Images', type: 'file', accept: 'image/*', multiple: true },
    { name: 'status', label: 'Project Status', type: 'select', options: [
      { value: 'planning', label: 'Planning' },
      { value: 'in-progress', label: 'In Progress' },
      { value: 'completed', label: 'Completed' },
      { value: 'on-hold', label: 'On Hold' }
    ]},
    { name: 'client', label: 'Client Name', type: 'text', placeholder: 'Client or company name' },
    { name: 'completionDate', label: 'Expected Completion', type: 'date' },
    { name: 'materials', label: 'Materials Required', type: 'array', placeholder: 'e.g., Cement, Steel, Blocks' }
  ]

  const filteredContracts = adminData.contracts.filter(contract =>
    contract.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.category?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSave = async (formData) => {
    if (editingItem) {
      updateItem('contracts', editingItem.id, formData)
    } else {
      addItem('contracts', formData)
    }
    setShowForm(false)
    setEditingItem(null)
  }

  const handleEdit = (contract) => {
    setEditingItem(contract)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contract project?')) {
      deleteItem('contracts', id)
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
        fields={contractFields}
        title={editingItem ? 'Edit Contract' : 'Add New Contract'}
        isEditing={!!editingItem}
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contract Services</h1>
          <p className="text-gray-600">Manage construction and contract projects</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContracts.map((contract, index) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            {contract.image && (
              <img
                src={contract.image}
                alt={contract.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{contract.title}</h3>
              <p className="text-sm text-gray-500 mb-2 capitalize">{contract.category?.replace('-', ' ')}</p>
              <p className="text-xl font-bold text-blue-600 mb-2">{contract.budget}</p>
              
              {contract.duration && (
                <p className="text-sm text-gray-600 mb-2">Duration: {contract.duration}</p>
              )}
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  contract.status === 'completed' ? 'bg-green-100 text-green-800' :
                  contract.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  contract.status === 'on-hold' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {contract.status?.replace('-', ' ') || 'Planning'}
                </span>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(contract)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(contract.id)}
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

      {filteredContracts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No contract projects found. Add your first project to get started.</p>
        </div>
      )}
    </div>
  )
}

export default ContractsAdmin