import React, { useState, useEffect, forwardRef } from 'react'
import * as echarts from 'echarts'
import { Card, CardBody, CardHeader, CardTitle, Button } from 'reactstrap'
import { List, Move } from 'react-feather'

const LineChart = forwardRef((props) => {
  let myChart
  const [datas, setDatas] = useState(props.data)
  const [toggle, setToggle] = useState(false)
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      x: '10%', //x 偏移量
      y: '4%', // y 偏移量
      width: '87%', // 宽度
      height: '86%' // 高度
    },
    xAxis: {
      type: 'category',
      data: ['14:00', '14:10', '14:20', '14:30', '14:40', '14:50', '15:00']
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        name: 'CPU',
        type: 'line',
        data: [20, 32, 1, 34, 90, 30, 10],
        smooth: true
      },
      {
        name: '内存',
        type: 'line',
        data: [20, 82, 91, 34, 15, 30, 10],
        smooth: true
      },
      {
        name: '磁盘',
        type: 'line',
        data: [13, 32, 82, 45, 50, 45, 75],
        smooth: true
      }
    ]
  }

  useEffect(() => {
    const chartDom = document.getElementById(datas.id)
    myChart = echarts.init(chartDom)
    myChart.setOption(option)

    return (props.ref2.current = {
      resizeFun2: () => {
        console.log(myChart)
        if (myChart) {
          myChart.resize()
          console.log('if')
        } else {
          console.log('else')
        }
      }
    })
  }, [])

  return (
    <Card className="h-100">
      <CardHeader
        onMouseEnter={(e) => {
          setToggle(false)
        }}
        onMouseLeave={(e) => {
          setToggle(true)
        }}
      >
        <div className="d-flex align-items-center">
          <List className="mr-2" size={20} />
          <CardTitle tag="h4">System usage</CardTitle>
        </div>
        <div
          className="ml-auto"
          style={{ visibility: toggle ? 'hidden' : 'visible' }}
        >
          <Button.Ripple
            size="sm"
            className="btn-icon drag-handler"
            color="flat-primary"
          >
            <Move className="cursor-move" size={16} />
          </Button.Ripple>
        </div>
      </CardHeader>
      <CardBody>
        <div className="h-100" id={datas.id}></div>
      </CardBody>
    </Card>
  )
})

export default LineChart
