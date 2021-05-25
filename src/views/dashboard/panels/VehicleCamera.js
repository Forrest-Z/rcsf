import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { List, Maximize, Minimize, Move } from 'react-feather'

export class VehicleCamera extends Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }
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
              Two Demensional
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

        </CardBody>
      </Card>
    )
  }
}
