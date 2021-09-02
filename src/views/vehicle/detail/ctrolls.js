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
import Joystick from '@src/components/joystick'

const Ctrolls = () => {
  const [toggle, setToggle] = useState(true)
  const handleMove = (e) => {
    console.log(e)
  }

  const handleEnd = (e) => {
    console.log(e)
  }
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
            <CardTitle tag="h4">Ctroll</CardTitle>
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
          <Joystick onMove={handleMove} onEnd={handleEnd} />
        </CardBody>
      </Card>
    </div>
  )
}

export default Ctrolls
