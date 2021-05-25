import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { 
  VehicleList, 
  TwoDemensional, 
  VehicleController, 
  ThreeDemensional
} from './panels'

const ResponsiveGridLayout = WidthProvider(Responsive)

export class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      layouts: {
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
            w: 6,
            h: 30
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
            x: 8,
            y: 0,
            w: 4,
            h: 15
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
    return (
      <ResponsiveGridLayout
        layouts={this.state.layouts}
        autoSize={true}
        isResizable={true}
        cols={{
          lg: 12,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2
        }}
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
        <div key='three-demensional'>
          <ThreeDemensional />
        </div>
      </ResponsiveGridLayout>
    )
  }
}

export default Dashboard