import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import {
  VehicleList,
  TwoDemensional,
  VehicleController,
  ThreeDemensional,
  VehicleState,
  VehicleCamera
} from './panels'
import { ThemeColors } from '@src/utility/context/ThemeColors'

const ResponsiveGridLayout = WidthProvider(Responsive)

export class Dashboard extends React.Component {
  static contextType = ThemeColors

  constructor() {
    super()

    this.state = {
      layouts: {
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
            w: 4,
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
            w: 4,
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
          }
        ]
      }
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const { colors } = this.context
    return (
      <ResponsiveGridLayout
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
        rowHeight={18}
      >
        <div key='vehicle-list'>
          <VehicleList />
        </div>
        <div key='two-demensional'>
          <TwoDemensional />
        </div>
        <div key='vehicle-controller'>
          <VehicleController />
        </div>
        {/* <div key='three-demensional'>
          <ThreeDemensional />
        </div> */}
        <div key='vehicle-state'>
          <VehicleState primary={colors.primary.main} danger={colors.danger.main} />
        </div>
        <div key='vehicle-camera'>
          <VehicleCamera primary={colors.primary.main} danger={colors.danger.main} />
        </div>
      </ResponsiveGridLayout>
    )
  }
}

export default Dashboard