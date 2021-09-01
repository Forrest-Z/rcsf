import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { List, Maximize, Minimize, Move, X } from 'react-feather'

import { Viz } from '@src/components/viz'

export class VehicleLidar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true
    }
  }

  render() {
    const deleteChild = () => {
      this.props.onClick()
    }
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
              Lidar
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
            <Button.Ripple
            size="sm"
            onClick={deleteChild}
            className="btn-icon"
            style={{ display: Boolean(Number(sessionStorage.getItem('showDelete'))) && !this.state.toggle ? '' : 'none' }}
            color="flat-primary"
          >
            <X size={16} />
          </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody className='p-0'>
          <Viz />
        </CardBody>
      </Card>
    )
  }
}
