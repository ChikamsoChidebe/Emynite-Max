import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useAdminContext } from '../context/AdminContext'
import ItemForm from '../components/ItemForm'
import { Mountain, Plus, Edit, Trash2 } from 'lucide-react'

const MiningAdmin = () => {
  const { minerals, addMineral, updateMineral, deleteMineral } = useAdminContext()
  const navigate = useNavigate()

  const mineralFields = [
    { name: 'name', label: 'Mineral Name', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', required: true },
    { name: 'image', label: 'Image', type: 'text', required: true },
    { name: 'purity', label: 'Purity Level', type: 'text', required: true },
    { name: 'applications', label: 'Applications', type: 'array', required: true }
  ]

  return (
    <Routes>
      <Route index element={<MineralsList />} />
      <Route path="add" element={<ItemForm fields={mineralFields} onSubmit={addMineral} title="Add New Mineral" />} />
      <Route path="edit/:id" element={<ItemForm fields={mineralFields} onSubmit={updateMineral} title="Edit Mineral" />} />
    </Routes>
  )

  function MineralsList() {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mining & Minerals</h1>
            <p className="text-gray-600">Manage mineral listings and mining content</p>
          </div>
          <button
            onClick={() => navigate('add')}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-700"
          >
            <Plus className="w-4 h-4" />
            Add Mineral
          </button>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Purity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applications</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {minerals.map((mineral) => (
                  <tr key={mineral.id}>
                    <td className="px-6 py-4">
                      <img src={mineral.image} alt={mineral.name} className="w-16 h-16 object-cover rounded-lg" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{mineral.name}</div>
                      <div className="text-sm text-gray-500">{mineral.description.substring(0, 50)}...</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{mineral.purity}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {mineral.applications.slice(0, 2).map((app, index) => (
                          <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                            {app}
                          </span>
                        ))}
                        {mineral.applications.length > 2 && (
                          <span className="text-xs text-gray-500">+{mineral.applications.length - 2} more</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`edit/${mineral.id}`)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteMineral(mineral.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default MiningAdmin