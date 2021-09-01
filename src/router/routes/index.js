import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Robot Control System'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/dashboard',
    exact: true,
    component: lazy(() => import('../../views/dashboard'))
  },
  {
    path: '/dashboard/set',
    exact: true,
    component: lazy(() => import('../../views/dashboard/setIndex'))
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
    exact: true,
    component: lazy(() => import('../../views/mission'))
  },
  {
    path: '/mission/add',
    exact: true,
    // appLayout: true,
    component: lazy(() => import('../../views/mission/add'))
  },
  {
    path: '/vehicle',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/vehicle'))
  },
  {
    path: '/vehicle/settings',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/vehicle/settings'))
    // meta: {
    //   contentWidth: 'boxed'
    // }
  },
  {
    path: '/vehicle/detail',
    exact: true,
    // className: 'ecommerce-application',
    component: lazy(() => import('../../views/vehicle/detail'))
  },
  {
    path: '/statistics',
    component: lazy(() => import('../../views/statistics'))
  },
  {
    path: '/system',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/system'))
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
