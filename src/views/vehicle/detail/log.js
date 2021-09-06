import React, { useEffect, useState } from 'react'
import { Card, CardTitle, CardBody, CardHeader, Button } from 'reactstrap'
import $ from 'jquery'
import {
  MoreVertical,
  Edit,
  Trash,
  List,
  Move,
  Maximize,
  StopCircle,
  AlignLeft,
  ChevronDown,
  Loader
} from 'react-feather'
const Log = () => {
  let websocket
  const [LogData, setLogData] = useState([])
  const [toggle, setToggle] = useState(true)

  // 添加socket
  // let websocket = ''
  useEffect(() => {
    console.log('UI重新渲染了')
    websocket = new WebSocket('ws://localhost:8500')
    const box = document.getElementById('log-container')
    websocket.onmessage = (msg) => {
      const data = JSON.parse(msg.data)
      LogData.push(data)
      setLogData([...LogData]) // 修改地址可以触发重新渲染UI
      box.scrollTop = box.scrollHeight // 设置滚动条到底部
    }
  }, [])

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
            <CardTitle tag="h4">System log</CardTitle>
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
            <Button.Ripple size="sm" className="btn-icon" color="flat-primary">
              <Maximize size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody className="h-100">
          <div
            style={{
              overflowY: 'scroll',
              background: 'black',
              padding: 5
            }}
            id="log-container"
            className="h-100"
          >
            {LogData.map((el, index) => {
              return el.code === 1 ? (
                <p className="p-0" key={index} style={{ color: 'green' }}>
                  {el.msg}
                </p>
              ) : el.code === 2 ? (
                <p className="p-0" key={index} style={{ color: 'red' }}>
                  {el.msg}
                </p>
              ) : (
                <p className="p-0" key={index} style={{ color: 'white' }}>
                  {el.msg}
                </p>
              )
            })}
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Log
