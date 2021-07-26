import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Robot Control System'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard'))
  },
  {
    path: '/map',
    exact: true,
    component: lazy(() => import('../../views/map'))
  },
  {
    path: '/map/add',
    exact: true,
    // appLayout: true,
    component: lazy(() => import('../../views/map/add'))
  },
  {
    path: '/map/edit',
    exact: true,
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/map/edit'))
    // layout: 'BlankLayout'
  },
  {
    path: '/mission',
    component: lazy(() => import('../../views/mission'))
  },
  {
    path: '/vehicle',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/vehicle'))
  },
  {
    path: '/statistics',
    component: lazy(() => import('../../views/statistics'))
  },
  {
    path: '/system',
    component: lazy(() => import('../../views/system'))
  },
  {
    path: '/help/apidoc',
    component: lazy(() => import('../../views/help/Apidoc.js'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
