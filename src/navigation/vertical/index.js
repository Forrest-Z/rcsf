import { BarChart2, Home, Map, Send, Slack, Layers, HelpCircle, Circle } from 'react-feather'

export default [
  {
    header: 'Data Monitor'
  },
  {
    id: 'dashboards',
    title: 'Dashboards',
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
    header: 'Data Manage'
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
  },
  {
    id: 'system',
    title: 'System',
    icon: <Layers size={20} />,
    navLink: '/system'
  },
  {
    id: 'help',
    title: 'Help',
    icon: <HelpCircle size={20} />,
    children: [
      {
        id: 'apidoc',
        title: 'API Document',
        icon: <Circle size={12} />,
        navLink: 'http://localhost:8000/api/schema/doc',
        externalLink: true
      }
    ]
  }
]
