import { Navigate } from 'react-router-dom'
import { useAdmin } from '../context/AdminContext'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAdmin()
  
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />
  }
  
  return children
}

export default ProtectedRoute