import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { Camera, Maximize, Minimize, Move, X } from 'react-feather'
import { Reflv } from '@src/components/flv-player'

export class VehicleCamera extends Component {
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
            <Camera className="mr-2" size={20} />
            <CardTitle tag='h4'>
              Camera
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
          {/* <Reflv url='./sample-flv-file.flv' type='flv' isLive={false} config={{ enableStashBuffer: false }}/> */}
        </CardBody>
      </Card>
    )
  }
}
