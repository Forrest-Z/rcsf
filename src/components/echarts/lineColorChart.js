import React, { useState, useEffect, forwardRef } from 'react'
import * as echarts from 'echarts'
import { Card, CardBody, CardHeader, CardTitle, Button } from 'reactstrap'
import { List, Move } from 'react-feather'

const LineColorChart = forwardRef((LineData) => {
  let myChart
  const [datas, setDatas] = useState(LineData.LineData)
  const [toggle, setToggle] = useState(false)
  const option = {
    color: ['#00DDFF'],
    title: {
      show: false,
      text: '',
      textStyle: {
        color: 'white'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      show: false
    },
    toolbox: {
      show: false
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [
          '14:00',
          '14:10',
          '14:20',
          '14:30',
          '14:40',
          '14:50',
          '15:00',
          '15:10',
          '15:20',
          '15:30'
        ]
      }
    ],
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%'
      }
    },
    grid: {
      x: '12%', //x 偏移量
      y: '10%', // y 偏移量
      width: '86%', // 宽度
      height: '80%' // 高度
    },
    series: [
      {
        name: '电池容量',
        type: 'line',
        stack: '总量',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgba(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
      }
    ]
  }

  useEffect(() => {
    const chartDom = document.getElementById(datas.id)
    myChart = echarts.init(chartDom)
    myChart.setOption(option)

    return (LineData.ref1.current = {
      resizeFun: () => {
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
    <Card className="h-100 ">
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
          <CardTitle tag="h4">Battery utilization rate</CardTitle>
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

export default LineColorChart
