import { BarChart2, Home } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'statistics',
    title: 'Statistics',
    icon: <BarChart2 size={20} />,
    navLink: '/statistics'
  }
]
