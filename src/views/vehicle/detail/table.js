import React, { useState } from 'react'
import { MoreVertical, Edit, Trash, List, Move, Maximize } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Table,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'

const TableComponent = () => {
  const [toggle, setToggle] = useState(true)
  const TableData = [
    {
      id: '001',
      jobName: '巡查B2栋L1消防栓',
      status: 1, // 0 正在进行 1 已经完成
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00'
    },
    {
      id: '002',
      jobName: '巡查B2栋L2消防栓',
      status: 1, // 0 正在进行 1 已经完成
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00'
    },
    {
      id: '003',
      jobName: '巡查B2栋L3消防栓',
      status: 1, // 0 正在进行 1 已经完成
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00'
    },
    {
      id: '005',
      jobName: '巡查B2栋L4消防栓',
      status: 0, // 0 正在进行 1 已经完成
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00'
    }
  ]

  return (
    <div className="h-100">
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
            <CardTitle tag="h4">Task detail list</CardTitle>
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
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Job Name</th>
                <th>Status</th>
                <th>Job Describe</th>
                <th>Start Time</th>
                <th>Final Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.jobName}</td>
                    <td>
                      {el.status === 0 ? (
                        <Badge pill color="light-success" className="mr-1">
                          Runing
                        </Badge>
                      ) : (
                        <Badge pill color="light-danger" className="mr-1">
                          Finish
                        </Badge>
                      )}
                    </td>
                    <td>{el.describe}</td>
                    <td>{el.starTime}</td>
                    <td>{el.endTime}</td>
                    <td>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="icon-btn hide-arrow"
                          color="transparent"
                          size="sm"
                          caret
                        >
                          <MoreVertical size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            href="/"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Edit className="mr-50" size={15} />{' '}
                            <span className="align-middle">Edit</span>
                          </DropdownItem>
                          <DropdownItem
                            href="/"
                            onClick={(e) => e.preventDefault()}
                          >
                            <Trash className="mr-50" size={15} />{' '}
                            <span className="align-middle">Delete</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  )
}

export default TableComponent
