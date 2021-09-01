import React, { useState, useEffect, useContext, useRef } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import {
  VehicleList,
  TwoDemensional,
  VehicleController,
  ThreeDemensional,
  VehicleState,
  VehicleCamera,
  MissionProcession,
  VehicleLidar,
  TimeLine,
  Robot,
  TableList,
  NoData
} from './panels' // 首页所有子组件
import { ThemeColors } from '@src/utility/context/ThemeColors'

// ** Store & Actions
import { getMap, multiDelete } from '@src/views/map/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import StageMobx from '../../utility/mobx/StageMobx'
import { getUserDashboardConfig, setUserDashboardConfig } from './store/actions'

const ResponsiveGridLayout = WidthProvider(Responsive)

// Styles
import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'
let deleteArr = []

const setDashboard = () => {
  const [layouts, setLayouts] = useState({})
  const [rowHeight, setRowHeight] = useState(19)
  const [defaultLayouts, setDefaultLayouts] = useState({
    md: [],
    lg: []
  })

  const vehicleListRef = useRef()

  let componentArray = [
    {
      id: 'VehicleList',
      component: VehicleList
    },
    {
      id: 'TwoDemensional',
      component: TwoDemensional
    },
    {
      id: 'VehicleController',
      component: VehicleController
    },
    {
      id: 'ThreeDemensional',
      component: ThreeDemensional
    },
    {
      id: 'VehicleState',
      component: VehicleState
    },
    {
      id: 'VehicleCamera',
      component: VehicleCamera
    },
    {
      id: 'MissionProcession',
      component: MissionProcession
    },
    {
      id: 'VehicleLidar',
      component: VehicleLidar
    },
    {
      id: 'TimeLine',
      component: TimeLine
    },
    {
      id: 'Robot',
      component: Robot
    },
    {
      id: 'TableList',
      component: TableList
    }
  ]

  const [componentReal, setComponentReal] = useState(componentArray)
  const deleteChild = (el, e) => {
    deleteArr.push(el.id)
    deleteArr = Array.from(new Set(deleteArr)) // 去重
    deleteArr.map((deleteCom, deleteIndex) => {
      componentArray.map((component, index) => {
        console.log(deleteArr)
        if (component.id === deleteCom) {
          console.log(index)
          componentArray.splice(index, 1)
          componentArray = componentArray
        }
        console.log(componentArray)
        setComponentReal(componentArray)
      })
    })
  }

  const onChangePosition = (data) => {
    console.log(data)
    setUserDashboardConfig({
      // 修改各个组件的位置
      id: 1,
      data: { dashboard_layout: data, user: 1 }
    })
  }

  let out_width = 0
  useEffect(() => {
    sessionStorage.setItem('showDelete', 1)
    for (let i = 0; i < componentArray.length; i++) {
      const obj = {}
      obj.i = componentArray[i].id
      obj.x = out_width
      obj.y = 0
      obj.w = 4
      obj.h = 15

      if (componentArray[i].x > 12 || obj.x > 12) {
        componentArray[i].x = 0
        obj.x = 0
        out_width = 0
      }
      out_width = out_width + 4
      defaultLayouts.md.push(obj)
      defaultLayouts.lg.push(obj)
    }
    setLayouts(defaultLayouts)
    console.log(defaultLayouts)
  }, [])

  return (
    <ResponsiveGridLayout
      id="root-dashboard"
      layouts={layouts}
      autoSize={true}
      isResizable={true}
      cols={{
        lg: 12,
        md: 12,
        sm: 6,
        xs: 4,
        xxs: 2
      }}
      breakpoints={{ lg: 1700, md: 996, sm: 768, xs: 480, xxs: 0 }}
      draggableHandle=".drag-handler"
      rowHeight={rowHeight}
      onResizeStop={onChangePosition}
      onDragStop={onChangePosition}
    >
      {componentReal.map((el, index) => {
        return (
          <div key={el.id}>
            <el.component
              onClick={() => {
                deleteChild(el)
              }}
              ref={vehicleListRef}
            />
          </div>
        )
      })}
    </ResponsiveGridLayout>
  )
}

export default setDashboard
