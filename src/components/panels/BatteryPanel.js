// ** React Components
import { useState, useRef, useEffect } from 'react'

// ** Thrid Components
import { Card, CardBody } from 'reactstrap'
import Chart from 'react-apexcharts'

import '@styles/react/libs/charts/apex-charts.scss'

let lastDate = 0
const data = []
const TICKINTERVAL = 8640000
const XAXISRANGE = 77760000

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

export const BatteryPanel = ({}) => {
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
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: ['green']
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    colors: ['red'],
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
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
      range: XAXISRANGE
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: false
    }
  }

  useEffect(() => {
    getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90
    })
    window.dispatchEvent(new Event('resize'))
    const timer = setInterval(() => {
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
      <CardBody>
        <Chart options={options} series={[{ data: series.slice() }]} />
      </CardBody>
    </Card>
  )
}
