import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard/index'))
  },
  {
    path: '/map',
    component: lazy(() => import('../../views/map/index'))
  },
  {
    path: '/mission',
    component: lazy(() => import('../../views/mission/index'))
  },
  {
    path: '/vehicle',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/vehicle/index'))
  },
  {
    path: '/statistics',
    component: lazy(() => import('../../views/statistics/index'))
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
