// ** React Components
import { useState, useRef, useEffect } from 'react'

// ** Thrid Components
import { Card, CardBody } from 'reactstrap'
import Chart from 'react-apexcharts'

import '@styles/react/libs/charts/apex-charts.scss'

let lastDate = 0
const data = []
const TICKINTERVAL = 1000
const XAXISRANGE = 10000

function getDayWiseTimeSeries(baseval, count, yrange) {
  let i = 0
  while (i < count) {
    const x = baseval
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    data.push({
      x,
      y
    })
    lastDate = baseval
    baseval += TICKINTERVAL
    i++
  }
}

function getNewSeries(baseval, yrange) {
  const newDate = baseval + TICKINTERVAL
  lastDate = newDate

  for (let i = 0; i < data.length - 10; i++) {
    // IMPORTANT
    // we reset the x and y of the data which is out of drawing area
    // to prevent memory leaks
    data[i].x = newDate - XAXISRANGE - TICKINTERVAL
    data[i].y = 0
  }

  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  })
}

export const CPUPanel = ({}) => {
  const [series, setSeries] = useState([])
  const options = {
    chart: {
      zoom: {
        enabled: true
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      }
    },
    markers: {
      size: 0
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#5d93f6'],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>${
                data.series[data.seriesIndex][data.dataPointIndex]
              }%</span>
            </div>`
      }
    },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE,
      show: false
    },
    yaxis: {
      max: 100,
      tickAmount: 5
    },
    legend: {
      show: false
    }
  }

  useEffect(() => {
    getDayWiseTimeSeries(new Date().getTime(), 10, {
      min: 10,
      max: 90
    })
    window.dispatchEvent(new Event('resize'))
    const timer = setInterval(() => {
      console.log(lastDate)
      getNewSeries(lastDate, {
        min: 10,
        max: 90
      })
      console.log(data.slice())
      setSeries(data.slice())
    }, 1000)

    return () =>  clearInterval(timer)
  }, [])

  return (
    <Card className="h-100">
      <CardBody className='p-0'>
        <Chart options={options} series={[{ data: series.slice() }]} type={'area'} />
      </CardBody>
    </Card>
  )
}
