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
