import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { List, Maximize, Minimize, Move } from 'react-feather'
import ReactMapGL, {
  AttributionControl,
  ScaleControl,
  FullscreenControl,
  NavigationControl
} from 'react-map-gl'
import ThreeFiber from '../../../components/three-fiber'

const attributionStyle = {
  right: 0,
  top: 0
}

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
}

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
}

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
}

export const ThreeDemensional = () => {
  const [viewport, setViewport] = useState({
    latitude: 30.508,
    longitude: 114.394,
    zoom: 14.5,
    bearing: 0,
    pitch: 0
  })

  const [toggle, setToggle] = useState(true)

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
          <CardTitle tag="h4">Three Demensional</CardTitle>
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
      <CardBody className="p-0">
        <ThreeFiber />
      </CardBody>
    </Card>
  )
}
