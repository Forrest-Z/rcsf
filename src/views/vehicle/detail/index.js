// ** React Components
import { useState, useEffect, useRef } from 'react'
import { Card } from 'reactstrap'

// ** Thrid Components
import { Responsive, WidthProvider } from 'react-grid-layout'

// ** Custom Components
import { BatteryPanel, CPUPanel, MemoryPanel } from '../../../components/panels'

import LineColorChart from '../../../components/echarts/lineColorChart'
import LineChart from '../../../components/echarts/lineChart'
import TableComponent from './table'
import Xshell from './xshell'

const ResponsiveGridLayout = WidthProvider(Responsive)

const defaultLayouts = {
  lg: [
    {
      i: 'battery',
      x: 9,
      y: 0,
      w: 6,
      h: 9
    },
    {
      i: 'cpu',
      x: 0,
      y: 0,
      w: 6,
      h: 9
    },
    {
      i: 'task',
      x: 0,
      y: 9,
      w: 12,
      h: 9
    },
    {
      i: 'xshell',
      x: 0,
      y: 22,
      w: 12,
      h: 16
    }
  ],
  md: [
    {
      i: 'battery',
      x: 9,
      y: 0,
      w: 4,
      h: 10
    },
    {
      i: 'cpu',
      x: 0,
      y: 0,
      w: 8,
      h: 10
    },
    {
      i: 'task',
      x: 0,
      y: 10,
      w: 12,
      h: 12
    },
    {
      i: 'xshell',
      x: 0,
      y: 22,
      w: 12,
      h: 16
    }
  ]
}

const VehicleDetail = () => {
  const [layouts, setLayouts] = useState(defaultLayouts)
  const [rowHeight, setRowHeight] = useState(19)
  const LineColorChartRef = useRef()
  const LineChartRef = useRef()
  const LineColorData = {
    title: '',
    dateData: [],
    data: [],
    id: 'battery'
  }
  const LineData = {
    title: '',
    dateData: [],
    data: [],
    id: 'cpu'
  }

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

  const dropStart = () => {
    LineColorChartRef.current.resizeFun()
    LineChartRef.current.resizeFun2()
  }

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
      onResizeStop={dropStart}
    >
      <div key="battery">
        <LineColorChart ref1={LineColorChartRef} LineData={LineColorData} />
      </div>
      <div key="cpu">
        <LineChart ref2={LineChartRef} data={LineData} />
      </div>
      <div key="task">
        <TableComponent />
      </div>
      <div key="xshell">
        <Xshell />
      </div>
    </ResponsiveGridLayout>
  )
}

export default VehicleDetail
