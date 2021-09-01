import React, { Fragment, useState } from 'react'
import Timeline from '@components/timeline'
import { Card, CardBody, CardHeader, CardTitle, Button } from 'reactstrap'

import { List, Move, X } from 'react-feather'

export const TimeLine = (props) => {
  const basicData = [
    {
      title: '12 Invoices have been paid',
      content: 'Invoices have been paid to the company.',
      meta: '12 min ago'
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '45 min ago',
      color: 'secondary'
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '45 min ago',
      color: 'secondary'
    },
    {
      title: 'Client Meeting',
      content: 'Project meeting with john @10:15am.',
      meta: '45 min ago',
      color: 'secondary'
    },
    {
      title: 'Financial Report',
      content: 'Click the button below to read financial reports',
      meta: '2 hours ago',
      color: 'success'
    },
    {
      title: 'Interview Schedule',
      content: 'Have to interview Katy Turner for the developer job.',
      meta: '03:00 PM',
      color: 'warning'
    }
  ]
  const [toggle, setToggle] = useState(false)
  const deleteChild = () => {
    props.onClick()
  }
  return (
    <div className="h-100">
      <Card id="time-line" className="h-100">
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
            <CardTitle tag="h4">Message Time Line</CardTitle>
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
            <Button.Ripple
              size="sm"
              onClick={deleteChild}
              className="btn-icon"
              style={{ display: Boolean(Number(sessionStorage.getItem('showDelete'))) && !toggle ? '' : 'none' }}
              color="flat-primary"
            >
              <X size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody className="h-100">
          <Timeline data={basicData} />
        </CardBody>
      </Card>
    </div>
  )
}
