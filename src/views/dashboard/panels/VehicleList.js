// ** React Imports
import React, { Component } from 'react'

// ** Third Party Components
import { Card, CardHeader, CardBody, CardTitle, Button, ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap'
import { List, Maximize, Minimize, Move } from 'react-feather'
import { FcHighBattery, FcChargeBattery } from 'react-icons/fc'

// ** Custom Components
import Avatar from '@components/avatar'
export class VehicleList extends Component {
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
              Vehicles
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
        <CardBody className='p-0'>
          <ListGroup>
            <ListGroupItem className='border-0'>
              <Row>
                <Col className='d-flex justify-content-left align-items-center' xl='7'>
                  <Avatar className='mr-1' content='R' size='lg' status='online' color='light-primary' />
                  <div className='d-flex flex-column mr-2'>
                    <h4 className='text-truncate mb-0'>Robot-01</h4>
                    <small className='text-truncate text-muted mb-0'>Sweep Robot</small>
                  </div>
                </Col>
                <Col xl='5'>
                  <div className='d-flex flex-column'>
                    <div className='mb-50'>
                      <FcChargeBattery size={20} />
                      <small className='text-truncate mb-0'>30%</small>
                    </div>
                    <div>
                      <Badge color='light-info'>CHARGING</Badge>
                    </div>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
            <hr className='w-100 p-0 mb-1' />
            <ListGroupItem className='border-0'>
              <Row>
                <Col className='d-flex justify-content-left align-items-center' xl='7'>
                  <Avatar className='mr-1' content='R' size='lg' status='online' color='light-primary' />
                  <div className='d-flex flex-column mr-2'>
                    <h4 className='text-truncate mb-0'>Robot-02</h4>
                    <small className='text-truncate text-muted mb-0'>Sweep Robot</small>
                  </div>
                </Col>
                <Col xl='5'>
                  <div className='d-flex flex-column'>
                    <div className='mb-50'>
                      <FcHighBattery size={20} />
                      <small className='text-truncate mb-0'>80%</small>
                    </div>
                    <div>
                      <Badge color='light-primary'>IDLE</Badge>
                    </div>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
            <hr className='w-100 p-0 mb-1' />
            <ListGroupItem className='border-0'>
              <Row>
                <Col className='d-flex justify-content-left align-items-center' xl='7'>
                  <Avatar className='mr-1' content='R' size='lg' status='online' color='light-primary' />
                  <div className='d-flex flex-column mr-2'>
                    <h4 className='text-truncate mb-0'>Robot-03</h4>
                    <small className='text-truncate text-muted mb-0'>Sweep Robot</small>
                  </div>
                </Col>
                <Col xl='5'>
                  <div className='d-flex flex-column'>
                    <div className='mb-50'>
                      <FcHighBattery size={20} />
                      <small className='text-truncate mb-0'>80%</small>
                    </div>
                    <div>
                      <Badge color='light-success'>PROCESS</Badge>
                    </div>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
            <hr className='w-100 p-0 mb-1' />
            <ListGroupItem className='border-0'>
              <Row>
                <Col className='d-flex justify-content-left align-items-center' xl='7'>
                  <Avatar className='mr-1' content='R' size='lg' status='online' color='light-primary' />
                  <div className='d-flex flex-column mr-2'>
                    <h4 className='text-truncate mb-0 text-black'>Robot-04</h4>
                    <small className='text-truncate text-muted mb-0'>Sweep Robot</small>
                  </div>
                </Col>
                <Col xl='5'>
                  <div className='d-flex flex-column'>
                    <div className='mb-50'>
                      <FcHighBattery size={20} />
                      <small className='text-truncate mb-0'>80%</small>
                    </div>
                    <div>
                      <Badge color='light-danger'>ERROR</Badge>
                    </div>
                  </div>
                </Col>
              </Row>
            </ListGroupItem>
            <hr className='w-100 p-0 mb-1' />
          </ListGroup>
        </CardBody>
      </Card>
    )
  }
}
