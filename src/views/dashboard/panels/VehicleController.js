import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { List, Maximize, Minimize, Move } from 'react-feather'

import Joystick from '@src/components/joystick'

export class VehicleController extends Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
  }

  handleMove(evt, data) {

  }

  handleEnd(evt, data) {

  }

  render() {
    return (
      <Card className='h-100'>
        <CardHeader
          onMouseEnter={(e) => {
            this.setState({
              toggle: false
            })
          }}
          onMouseLeave={(e) => {
            this.setState({
              toggle: true
            })
          }}
        >
          <div className="d-flex align-items-center">
            <List className="mr-2" size={20} />
            <CardTitle tag='h4'>
              Controller
            </CardTitle>
          </div>
          <div
            className='ml-auto'
            style={{ visibility: this.state.toggle ? 'hidden' : 'visible' }}
          >
            <Button.Ripple size='sm' className='btn-icon drag-handler' color='flat-primary'>
              <Move className='cursor-move' size={16} />
            </Button.Ripple>
            <Button.Ripple size='sm' className='btn-icon' color='flat-primary'>
              <Maximize size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody>
          <Joystick onMove={this.handleMove} onEnd={this.handleEnd} />
        </CardBody>
      </Card>
    )
  }
}
