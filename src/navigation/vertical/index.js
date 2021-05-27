import { BarChart2, Home, Map, Send, Slack } from 'react-feather'

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
  },
  {
    id: 'map',
    title: 'Map',
    icon: <Map size={20} />,
    navLink: '/map'
  },
  {
    id: 'mission',
    title: 'Mission',
    icon: <Send size={20} />,
    navLink: '/mission'
  },
  {
    id: 'vehicle',
    title: 'Vehicle',
    icon: <Slack size={20} />,
    navLink: '/vehicle'
  }
]
