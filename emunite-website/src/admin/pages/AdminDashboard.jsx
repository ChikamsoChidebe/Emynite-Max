import { motion } from 'framer-motion'
import { useAdmin } from '../context/AdminContext'
import {
  Building2,
  Car,
  Wheat,
  Ship,
  Hammer,
  TrendingUp,
  Mountain,
  Plus,
  BarChart3,
  Users,
  Eye
} from 'lucide-react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const { adminData } = useAdmin()

  const stats = [
    {
      name: 'Properties',
      count: adminData.properties.length,
      icon: Building2,
      color: 'bg-blue-500',
      link: '/admin/properties'
    },
    {
      name: 'Automobiles',
      count: adminData.automobiles.length,
      icon: Car,
      color: 'bg-green-500',
      link: '/admin/automobiles'
    },
    {
      name: 'Agriculture',
      count: adminData.agriculture.length,
      icon: Wheat,
      color: 'bg-yellow-500',
      link: '/admin/agriculture'
    },
    {
      name: 'Mining',
      count: adminData.minerals?.length || 0,
      icon: Mountain,
      color: 'bg-gray-600',
      link: '/admin/mining'
    },
    {
      name: 'Import/Export',
      count: adminData.importExport.length,
      icon: Ship,
      color: 'bg-purple-500',
      link: '/admin/import-export'
    },
    {
      name: 'Contracts',
      count: adminData.contracts.length,
      icon: Hammer,
      color: 'bg-orange-500',
      link: '/admin/contracts'
    },
    {
      name: 'Investments',
      count: adminData.investments.length,
      icon: TrendingUp,
      color: 'bg-red-500',
      link: '/admin/investments'
    }
  ]

  const quickActions = [
    { name: 'Add Property', link: '/admin/properties', icon: Building2 },
    { name: 'Add Vehicle', link: '/admin/automobiles', icon: Car },
    { name: 'Add Product', link: '/admin/agriculture', icon: Wheat },
    { name: 'Add Investment', link: '/admin/investments', icon: TrendingUp }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your business content</p>
        </div>
        <Link
          to="/"
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Eye className="w-4 h-4" />
          <span>View Site</span>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={stat.link}
              className="block bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.name}
              to={action.link}
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <action.icon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">{action.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {Object.entries(adminData).map(([category, items]) => {
            const recentItems = items.slice(-3)
            return recentItems.map((item, index) => (
              <div key={`${category}-${index}`} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  Added {item.title || item.name || 'item'} to {category}
                </span>
                <span className="text-xs text-gray-400 ml-auto">
                  {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'Recently'}
                </span>
              </div>
            ))
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard