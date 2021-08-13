// ** React Components
import { useState, useEffect } from 'react'

// ** Thrid Components
import { Responsive, WidthProvider } from 'react-grid-layout'

// ** Custom Components
import { BatteryPanel, CPUPanel, MemoryPanel } from '../../../components/panels'

const ResponsiveGridLayout = WidthProvider(Responsive)

const defaultLayouts = {
  lg: [
    {
      i: 'battery',
      x: 0,
      y: 0,
      w: 3,
      h: 10
    },
    {
      i: 'cpu',
      x: 3,
      y: 0,
      w: 3,
      h: 10
    },
    {
      i: 'memory',
      x: 6,
      y: 0,
      w: 3,
      h: 10
    }
  ],
  md: [
    {
      i: 'battery',
      x: 0,
      y: 0,
      w: 2,
      h: 20
    }
  ]
}

const VehicleDetail = () => {
  const [layouts, setLayouts] = useState(defaultLayouts)
  const [rowHeight, setRowHeight] = useState(19)

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
      <div key="cpu">
        <CPUPanel />
      </div>
      <div key="memory">
        <MemoryPanel />
      </div>
    </ResponsiveGridLayout>
  )
}

export default VehicleDetail
