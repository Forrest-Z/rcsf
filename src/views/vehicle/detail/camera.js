import React, { useState } from 'react'
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Button,
  Row,
  Col
} from 'reactstrap'
import { MoreVertical, Edit, Trash, List, Move, Maximize } from 'react-feather'
import { Reflv } from '@src/components/flv-player'

const Camera = () => {
  const [toggle, setToggle] = useState(true)
  const VideoData = [
    {
      id: '001',
      url: 'http://127.0.0.1',
      name: '1号机位视频'
    },
    {
      id: '002',
      url: 'http://127.0.0.1',
      name: '2号机位视频'
    }
  ]
  return (
    <div className="h-100">
      <Card className="h-100 d-flex">
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
            <CardTitle tag="h4">Camera list</CardTitle>
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
        <CardBody>
          <Row className="h-100">
            {VideoData.map((el, index) => {
              return (
                <Col key={index} className="h-100" md="4">
                  {/* <Reflv
                    className="h-100"
                    key={index}
                    url={el.url}
                    type="flv"
                    isLive={false}
                    config={{ enableStashBuffer: false }}
                  /> */}
                </Col>
              )
            })}
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default Camera
