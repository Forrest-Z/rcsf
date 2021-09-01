import React, { useState } from 'react'
import {
  MoreVertical,
  Edit,
  Trash,
  List,
  Move,
  Maximize,
  X
} from 'react-feather'
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

export const TableList = (props) => {
  const [toggle, setToggle] = useState(true)
  const deleteChild = () => {
    props.onClick()
  }
  const TableData = [
    {
      id: '001',
      name: '巡检机器人001号',
      status: 0, // 0 正常 1 空闲 2 充电 3 异常
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00'
    },
    {
      id: '002',
      name: '巡检机器人002号',
      status: 2, // 0 正常 1 空闲 2 充电 3 异常
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00'
    },
    {
      id: '003',
      name: '巡检机器人003号',
      status: 3, // 0 正常 1 空闲 2 充电 3 异常
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
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
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
                    <td>{el.name}</td>
                    <td>
                      {el.status === 0 ? (
                        <Badge pill color="light-success" className="mr-1">
                          Runing
                        </Badge>
                      ) : el.status === 1 ? (
                        <Badge pill color="light-primary" className="mr-1">
                          Free
                        </Badge>
                      ) : el.status === 2 ? (
                        <Badge pill color="light-info" className="mr-1">
                          Charging
                        </Badge>
                      ) : (
                        <Badge pill color="light-danger" className="mr-1">
                          Error
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
