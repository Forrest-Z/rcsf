// ** React Imports
import { useState, useEffect } from 'react'

// ** Thrid Components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import { Send, Move, Maximize, Check } from 'react-feather'
import { ProgressBar, Step } from "react-step-progress-bar"
import Avatar from '@components/avatar'

import "react-step-progress-bar/styles.css"

const movements = [
  {
    title: 'Point-01'
  },
  {
    title: 'Point-02'
  },
  {
    title: 'Point-03'
  },
  {
    title: 'Point-04'
  },
  {
    title: 'Point-05'
  },
  {
    title: 'Point-06'
  }
]

export const MissionProcession = () => {
  const [toggle, setToggle] = useState(true)
  const [progress, setProgress] = useState(0)

  return (
    <Card className='h-100'>
      <CardHeader
        onMouseEnter={(e) => {
          setToggle(false)
        }}
        onMouseLeave={(e) => {
          setToggle(true)
        }}
      >
        <div className="d-flex align-items-center">
          <Send className="mr-2" size={20} />
          <CardTitle tag='h4'>
            Mission Progress
          </CardTitle>
        </div>
        <div
          className='ml-auto'
          style={{ visibility: toggle ? 'hidden' : 'visible' }}
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
          <ListGroupItem className='pt-0 pb-0 border-0'>
            <Row>
              <Col className='p-1 justify-content-center align-items-center' xl='3'>
                <h3>Robot-02</h3>
              </Col>
              <Col className='p-2' xl='9'>
                <ProgressBar
                  height={5}
                  percent={progress}
                  filledBackground="linear-gradient(to right, #26B5F2, #7AC943)"
                >
                  <Step>
                    {({ accomplished }) => (
                      <div className='d-flex flex-column'>
                        <Avatar content={<Check size={15} />} size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                      </div>
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='2' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='3' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='4' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='5' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                </ProgressBar>
              </Col>
            </Row>
          </ListGroupItem>
          <hr className='w-100 m-0' />
          <ListGroupItem className='pt-0 pb-0 border-0'>
            <Row>
              <Col className='p-1 justify-content-center align-items-center' xl='3'>
                <h3>Robot-02</h3>
              </Col>
              <Col className='p-2' xl='9'>
                <ProgressBar
                  height={5}
                  percent={progress}
                  filledBackground="linear-gradient(to right, #26B5F2, #7AC943)"
                >
                  <Step>
                    {({ accomplished }) => (
                      <div className='d-flex flex-column'>
                        <Avatar content={<Check size={15} />} size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                      </div>
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='2' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='3' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='4' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                  <Step>
                    {({ accomplished }) => (
                      <Avatar content='5' size='md' color={`${accomplished ? 'info' : 'secondary'}`} />
                    )}
                  </Step>
                </ProgressBar>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  )
}