import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col
} from 'reactstrap'
import { List, Move, X } from 'react-feather'
import * as echarts from 'echarts'

const LineChar = () => {
  let pie
  const option = {
    title: {
      text: '机器人利用率',
      textStyle: {
        color: 'white',
        size: 20
      }
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }
    ]
  }
  useEffect(() => {
    pie = echarts.init(document.getElementById('line'))
    if (pie === null) {
      // 如果不存在，就进行初始化
      pie = echarts.init(document.getElementById('line'))
    }
    pie.setOption(option)
    // setDatas(pieData.data)
    window.addEventListener('resize', function () {
      pie.resize()
    })
  }, [])
  return <div id="line" className="h-100"></div>
}

const PieChar = () => {
  let pie
  const option = {
    tooltip: {
      trigger: 'item'
    },
    color: ['#36c46f', '#e2b122'], // 配置饼图颜色
    legend: {
      top: '1%',
      left: 'right',
      show: true,
      textStyle: {
        color: 'white'
      }
    },

    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        data: [
          { value: 1048, name: '任务完成数' },
          { value: 735, name: '任务未完成数' }
        ],
        labelLine: {
          show: false
        },
        label: {
          show: false
        }
      }
    ]
  }
  useEffect(() => {
    pie = echarts.init(document.getElementById('pie'))
    if (pie === null) {
      // 如果不存在，就进行初始化
      pie = echarts.init(document.getElementById('pie'))
    }
    pie.setOption(option)
    window.addEventListener('resize', function () {
      pie.resize()
    })
  }, [])
  return <div id="pie" className="h-100"></div>
}

const PieChar2 = () => {
  let pie
  const option = {
    tooltip: {
      trigger: 'item'
    },
    color: ['#36c46f', '#e2b122'], // 配置饼图颜色
    legend: {
      top: '1%',
      left: 'right',
      show: true,
      textStyle: {
        color: 'white'
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        data: [
          { value: 1048, name: '工作中数' },
          { value: 735, name: '空闲中数' }
        ],
        labelLine: {
          show: false
        },
        label: {
          show: false
        }
      }
    ]
  }
  useEffect(() => {
    pie = echarts.init(document.getElementById('pie2'))
    if (pie === null) {
      // 如果不存在，就进行初始化
      pie = echarts.init(document.getElementById('pie2'))
    }
    pie.setOption(option)
    // setDatas(pieData.data)
    window.addEventListener('resize', function () {
      pie.resize()
    })
  }, [])
  const pieHeight = {
    width: '100%',
    height: '50vh'
  }
  return <div id="pie2" className="h-100"></div>
}

export const Robot = (props) => {
  const [toggle, setToggle] = useState(false)
  const deleteChild = () => {
    props.onClick()
  }
  return (
    <div className="h-100">
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
            <CardTitle tag="h4">Robot usage rate</CardTitle>
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
            <Button.Ripple
              size="sm"
              onClick={deleteChild}
              className="btn-icon"
              style={{ display: Boolean(Number(sessionStorage.getItem('showDelete'))) && !toggle ? '' : 'none' }}
              color="flat-primary"
            >
              <X size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody>
          <div className="h-50">
            <LineChar />
          </div>
          <div className="h-50 d-flex">
            <div className="w-50 h-100">
              <PieChar />
            </div>
            <div className="w-50 h-100">
              <PieChar2 />
            </div>
          </div>
        </CardBody>
      </Card>
      {/* <Card className="h-50">
        <LineChar />
      </Card> */}
    </div>
  )
}
