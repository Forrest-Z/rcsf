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
  VehicleLidar
} from './panels'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Facebook, Map } from 'react-feather'

// ** Store & Actions
import { getMap, multiDelete } from '@src/views/map/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import StageMobx from '../../utility/mobx/StageMobx'

const ResponsiveGridLayout = WidthProvider(Responsive)

const defaultLayouts = {
  md: [
    {
      i: 'vehicle-list',
      x: 0,
      y: 0,
      w: 3,
      h: 20
    },
    {
      i: 'two-demensional',
      x: 3,
      y: 0,
      w: 5,
      h: 20
    },
    {
      i: 'vehicle-controller',
      x: 0,
      y: 15,
      w: 3,
      h: 10
    },
    {
      i: 'vehicle-state',
      x: 3,
      y: 20,
      w: 5,
      h: 10
    },
    {
      i: 'vehicle-camera',
      x: 10,
      y: 0,
      w: 2,
      h: 8
    }
  ],
  lg: [
    {
      i: 'vehicle-list',
      x: 0,
      y: 0,
      w: 2,
      h: 20
    },
    {
      i: 'two-demensional',
      x: 2,
      y: 0,
      w: 4,
      h: 20
    },
    {
      i: 'vehicle-controller',
      x: 0,
      y: 20,
      w: 2,
      h: 10
    },
    {
      i: 'three-demensional',
      x: 6,
      y: 0,
      w: 3,
      h: 12
    },
    {
      i: 'vehicle-state',
      x: 2,
      y: 20,
      w: 4,
      h: 10
    },
    {
      i: 'vehicle-camera',
      x: 10,
      y: 0,
      w: 2,
      h: 10
    },
    {
      i: 'mission-procession',
      x: 6,
      y: 20,
      w: 4,
      h: 8
    },
    {
      i: 'vehicle-lidar',
      x: 9,
      y: 0,
      w: 3,
      h: 12
    }
  ]
}

// Styles
import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const Dashboard = () => {
  const [layouts, setLayouts] = useState(defaultLayouts)
  const [rowHeight, setRowHeight] = useState(19)
  const [visible, setVisible] = useState('all')
  const [notUsedMap, setNotUsedMap] = useState(false)

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
            y: 0
          }
        })
      })
      setVisible(i)
    } else {
      setLayouts(defaultLayouts)
      setVisible('all')
    }
  }

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
    >
      <div
        key="vehicle-list"
        hidden={!['all', 'vehicle-list'].includes(visible)}
      >
        <VehicleList />
      </div>

      <div
        key="two-demensional"
        hidden={!['all', 'two-demensional'].includes(visible)}
      >
        {/**
         * TODO: Add not active map tips
         */}
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
        hidden={!['all', 'vehicle-controller'].includes(visible)}
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
    </ResponsiveGridLayout>
  )
}
export default Dashboard
