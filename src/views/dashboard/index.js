import React from 'react'
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
      w: 4,
      h: 20
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
      h: 10
    },
    {
      i: 'vehicle-lidar',
      x: 6,
      y: 0,
      w: 4,
      h: 20
    }
  ]
}

export class Dashboard extends React.Component {
  static contextType = ThemeColors

  constructor() {
    super()

    this.state = {
      visible: 'all',
      rowHeight: 19,
      layouts: defaultLayouts
    }
    this.handleFullScreen = this.handleFullScreen.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (screen.height === window.innerHeight) {
        this.setState({
          rowHeight: 22.5
        })
      } else {
        this.setState({
          rowHeight: 19
        })
      }
    })
  }

  componentWillUnmount() {}

  handleFullScreen(i, tag) {
    if (!tag) {
      this.setState((preState) => ({
        layouts: {
          ...preState.layouts,
          lg: preState.layouts.lg.map((item) => {
            return {
              ...item,
              w: item.i === i ? 12 : 0,
              h: item.i === i ? 30 : 0,
              x: 0,
              y: 0
            }
          })
        },
        visible: i
      }))
    } else {
      console.log(1111)
      this.setState({
        layouts: defaultLayouts,
        visible: 'all'
      })
    }
  }

  render() {
    const { colors } = this.context
    return (
      <ResponsiveGridLayout
        id='root-dashboard'
        layouts={this.state.layouts}
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
        rowHeight={this.state.rowHeight}
      >
        <div
          key="vehicle-list"
          hidden={!['all', 'vehicle-list'].includes(this.state.visible)}
        >
          <VehicleList />
        </div>

        <div
          key="two-demensional"
          hidden={!['all', 'two-demensional'].includes(this.state.visible)}
        >
          <TwoDemensional onFullScreen={this.handleFullScreen} />
        </div>

        <div
          key="vehicle-controller"
          hidden={!['all', 'vehicle-controller'].includes(this.state.visible)}
        >
          <VehicleController />
        </div>
        {/* <div key='three-demensional'>
          <ThreeDemensional />
        </div> */}

        <div
          key="vehicle-state"
          hidden={!['all', 'vehicle-state'].includes(this.state.visible)}
        >
          <VehicleState
            primary={colors.primary.main}
            danger={colors.danger.main}
            success={colors.success.main}
          />
        </div>

        <div
          key="vehicle-camera"
          hidden={!['all', 'vehicle-camera'].includes(this.state.visible)}
        >
          <VehicleCamera
            primary={colors.primary.main}
            danger={colors.danger.main}
          />
        </div>

        <div
          key="mission-procession"
          hidden={!['all', 'mission-procession'].includes(this.state.visible)}
        >
          <MissionProcession />
        </div>

        <div
          key="vehicle-lidar"
          hidden={!['all', 'vehicle-lidar'].includes(this.state.visible)}
        >
          <VehicleLidar />
        </div>
      </ResponsiveGridLayout>
    )
  }
}

export default Dashboard
