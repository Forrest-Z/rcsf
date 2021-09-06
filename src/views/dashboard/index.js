import React, { useState, useEffect, useContext } from 'react'
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
} from './panels'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Facebook, Map } from 'react-feather'

// ** Store & Actions
import { getMap, multiDelete } from '@src/views/map/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import StageMobx from '../../utility/mobx/StageMobx'
import { getUserDashboardConfig, setUserDashboardConfig } from './store/actions'

const ResponsiveGridLayout = WidthProvider(Responsive)

// Styles
import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const Dashboard = () => {
  const componentObj = {
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
    TableList
  }

  const [layouts, setLayouts] = useState({})

  const [rowHeight, setRowHeight] = useState(19)
  const [visible, setVisible] = useState('all')
  const [notUsedMap, setNotUsedMap] = useState(false)
  const [defaultLayouts, setDefaultLayouts] = useState({
    md: [],
    lg: []
  })
  const [pageJson, setPageJson] = useState([])
  // pageJson.forEach((el) => {
  //   defaultLayouts.md.push({
  //     i: el.i,
  //     x: el.x,
  //     y: el.y,
  //     w: el.w,
  //     h: el.h
  //   })
  //   defaultLayouts.lg.push({
  //     i: el.i,
  //     x: el.x,
  //     y: el.y,
  //     w: el.w,
  //     h: el.h
  //   })
  // })

  // {
  //   i: 'VehicleList', // 机器人信息
  //   name: VehicleList,
  //   x: 0,
  //   y: 0,
  //   w: 3,
  //   h: 20
  // },
  // {
  //   // 时间线
  //   i: 'TimeLine',
  //   name: TimeLine,
  //   x: 3,
  //   y: 0,
  //   w: 4,
  //   h: 20
  // },
  // {
  //   // 2d 显示所有机器人点位
  //   i: 'TwoDemensional',
  //   name: TwoDemensional,
  //   x: 7,
  //   y: 0,
  //   w: 5,
  //   h: 20
  // },
  // {
  //   // 点云
  //   i: 'VehicleLidar',
  //   name: VehicleLidar,
  //   x: 0,
  //   y: 19,
  //   w: 4,
  //   h: 16
  // },
  // {
  //   // 3d
  //   i: 'ThreeDemensional',
  //   name: ThreeDemensional,
  //   x: 4,
  //   y: 20,
  //   w: 8,
  //   h: 16
  // },
  // {
  //   // 任务详细列表
  //   i: 'TableList',
  //   name: TableList,
  //   x: 0,
  //   y: 36,
  //   w: 12,
  //   h: 16
  // }
  // {
  //   key: 'robot',
  //   name: Robot,
  //   x: 6,
  //   y: 0,
  //   w: 6,
  //   h: 20
  // },
  // {
  //   key: 'vehicle-controller',
  //   name: VehicleController,
  //   x: 3,
  //   y: 20,
  //   w: 5,
  //   h: 10
  // },
  // {
  //   key: 'three-demensional',
  //   name: ThreeDemensional,
  //   x: 0,
  //   y: 22,
  //   w: 8,
  //   h: 12
  // },
  // {
  //   key: 'vehicle-camera',
  //   name: VehicleCamera,
  //   x: 10,
  //   y: 0,
  //   w: 2,
  //   h: 8,
  // },
  // {
  //   key: 'mission-procession',
  //   name: MissionProcession,
  //   x: 3,
  //   y: 21,
  //   w: 5,
  //   h: 12
  // },
  // {
  //   key: 'vehicle-state',
  //   name: VehicleState,
  //   x: 2,
  //   y: 20,
  //   w: 4,
  //   h: 10
  // },
  // {
  //   key: 'vehicle-lidar',
  //   name: VehicleLidar,
  //   x: 0,
  //   y: 15,
  //   w: 3,
  //   h: 12
  // }

  const themeColors = useContext(ThemeColors)

  const dispatch = useDispatch()
  const store = useSelector((state) => state.maps)

  const handleMaximize = (i, tag) => {
    if (!tag) {
      setLayouts({
        ...layouts,
        lg: layouts.lg.map((item) => {
          return {
            ...item,
            w: item.i === i ? 12 : 0,
            h: item.i === i ? 30 : 0,
            x: 0,
            y: 0,
            name: componentObj[i]
          }
        }), 
        md: layouts.lg.map((item) => {
          return {
            ...item,
            w: item.i === i ? 12 : 0,
            h: item.i === i ? 30 : 0,
            x: 0,
            y: 0,
            name: componentObj[i]
          }
        })
      })
      setVisible(i)
    } else {
      setLayouts(defaultLayouts)
      setVisible('all')
    }
  }

  // const stopDragEvent = (data) => {
  //   data.forEach((el, indexE) => {
  //     pageJson.forEach((page, indexPage) => {
  //       if (el.i === page.i) {
  //         el.name = page.name
  //       }
  //     })
  //   })
  //   console.log(data)
  //   setUserDashboardConfig({
  //     // 修改各个组件的位置
  //     id: 1,
  //     data: { dashboard_layout: data, user: 1 }
  //   })
  // }

  useEffect(() => {
    dispatch(getMap({ active: true }))
  }, [dispatch])

  useEffect(() => {
    if (store.data.length > 0) {
      StageMobx.setMap(store.data[0])
      setNotUsedMap(false)
    } else {
      setNotUsedMap(true)
    }
  }, [store.data, store.data.length])

  useEffect(() => {
    sessionStorage.setItem('showDelete', 0) // 0 不显示 1 显示
    getUserDashboardConfig().then((res) => {
      // 获取用户界面
      res.data[0].dashboard_layout.forEach((el, index) => {
        const name = el.i
        el.name = componentObj[name] // 将子组件绑定到name属性上
      })
      setPageJson(res.data[0].dashboard_layout)
      // debugger
      pageJson.forEach((el) => {
        defaultLayouts.md.push({
          i: el.i,
          x: el.x,
          y: el.y,
          w: el.w,
          h: el.h
        })
        defaultLayouts.lg.push({
          i: el.i,
          x: el.x,
          y: el.y,
          w: el.w,
          h: el.h
        })
      })
      setLayouts(defaultLayouts)
    })
    window.addEventListener('resize', () => {
      if (screen.height === window.innerHeight) {
        setRowHeight(22.5)
      } else {
        setRowHeight(19)
      }
    })
    return () => {
      window.removeEventListener('resize', window)
    }
  }, [])

  useEffect(() => {
    pageJson.forEach((el) => {
      defaultLayouts.md.push({
        i: el.i,
        x: el.x,
        y: el.y,
        w: el.w,
        h: el.h
      })
      defaultLayouts.lg.push({
        i: el.i,
        x: el.x,
        y: el.y,
        w: el.w,
        h: el.h
      })
    })
  }, [pageJson])

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
      // onDragStop={stopDragEvent}
      // onResizeStop={stopDragEvent}
    >
      {pageJson.map((el) => {
        // if (el.key === 'two-demensional') {
        //   if (notUsedMap) {
        //     return (
        //       <div>
        //         <NoData key="nodata" />
        //       </div>
        //     )
        //   } else {
        //     return (
        //       <div key={el.key} hidden={!['all', el.name].includes(visible)}>
        //         <el.name />
        //       </div>
        //     )
        //   }
        // } else {
        return (
          <div key={el.i} hidden={!['all', el.i].includes(visible)}>
            <el.name onFullScreen={handleMaximize} />
          </div>
        )
        // }
        // return (
        //   <div key={el.key} hidden={!['all', el.name].includes(visible)}>
        //      <el.name />
        //     {/* {notUsedMap ? <NoData /> : <el.name />} */}
        //   </div>
        // )
      })}
      {/* <div
        key="vehicle-list"
        hidden={!['all', 'vehicle-list'].includes(visible)}
      >
        <VehicleList />
      </div>

      <div
        key="two-demensional"
        hidden={!['all', 'two-demensional'].includes(visible)}
      >
        {notUsedMap ? null : <TwoDemensional onFullScreen={handleMaximize} />}
      </div>

      <div
        key="vehicle-controller"
        hidden={!['all', 'vehicle-controller'].includes(visible)}
      >
        <VehicleController />
      </div>

      <div
        key="three-demensional"
        hidden={!['all', 'three-demensional'].includes(visible)}
      >
        <ThreeDemensional />
      </div>

      <div
        key="vehicle-state"
        hidden={!['all', 'vehicle-state'].includes(visible)}
      >
        <VehicleState
          primary={themeColors.colors.primary.main}
          danger={themeColors.colors.danger.main}
          success={themeColors.colors.success.main}
        />
      </div>

      <div
        key="vehicle-camera"
        hidden={!['all', 'vehicle-camera'].includes(visible)}
      >
        <VehicleCamera
          primary={themeColors.colors.primary.main}
          danger={themeColors.colors.danger.main}
        />
      </div>

      <div
        key="mission-procession"
        hidden={!['all', 'mission-procession'].includes(visible)}
      >
        <MissionProcession />
      </div>

      <div
        key="vehicle-lidar"
        hidden={!['all', 'vehicle-lidar'].includes(visible)}
      >
        <VehicleLidar />
      </div>
      */}
    </ResponsiveGridLayout>
  )
}
export default Dashboard
