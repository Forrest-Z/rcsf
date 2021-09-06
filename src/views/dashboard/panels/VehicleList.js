// ** React Imports
import React, { useState, useEffect } from 'react'
// ** Third Party Components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  ListGroup,
  ListGroupItem,
  Badge,
  Row,
  Col
} from 'reactstrap'
import {
  List,
  Maximize,
  Minimize,
  Move,
  MapPin,
  PauseCircle,
  PlayCircle,
  X
} from 'react-feather'
import { FcHighBattery, FcChargeBattery } from 'react-icons/fc'
import { GiPlug, GiUnplugged } from 'react-icons/gi'
import { Menu, Item, useContextMenu } from 'react-contexify'
import { createPortal } from 'react-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from '../../vehicle/store/actions'

// Styles
import 'react-contexify/dist/ReactContexify.min.css'
import '@styles/react/libs/context-menu/context-menu.scss'
import ClientsMobx from '../../../utility/mobx/ClientsMobx'

function Portal({ children }) {
  return createPortal(children, document.body)
}

export const VehicleList = (props) => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.vehicle)

  const [toggle, setToggle] = useState(false)
  const [actived, setActived] = useState(0)

  useEffect(() => {
    dispatch(getVehicle())
  }, [dispatch])

  useEffect(() => {
    const vehicleList = []
    store.data.map((item) => {
      vehicleList.push(item.name)
    })

    ClientsMobx.init(vehicleList)
    ClientsMobx.enableAll()
  }, [store && store.data.length])

  const { show } = useContextMenu({
    id: 'menu_id'
  })

  const handleContextMenu = (e) => {
    show(e, {
      position: {
        x: e.pageX,
        y: e.pageY
      }
    })
  }

  const deleteChild = () => {
    props.onClick()
  }

  return (
    <Card id="vehicle-list-card" className="h-100">
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
          <CardTitle tag="h4">Vehicles</CardTitle>
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
            style={{
              display:
                Boolean(Number(sessionStorage.getItem('showDelete'))) && !toggle ? '' : 'none'
            }}
            color="flat-primary"
          >
            <X size={16} />
          </Button.Ripple>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <Portal>
          {/* Context Menu */}
          <Menu id="menu_id">
            <Item className="d-flex justify-content-left align-items-center">
              <MapPin className="mr-1" size={18} />
              <h5 className="p-0 m-0">Init Pose</h5>
            </Item>
            <Item className="d-flex justify-content-left align-items-center">
              <PauseCircle className="mr-1" size={18} />
              <h5 className="p-0 m-0">Pause</h5>
            </Item>
            <Item className="d-flex justify-content-left align-items-center">
              <PlayCircle className="mr-1" size={18} />
              <h5 className="p-0 m-0">Continue</h5>
            </Item>
            <Item className="d-flex justify-content-left align-items-center">
              <GiPlug className="mr-1" size={18} />
              <h5 className="p-0 m-0">Charge</h5>
            </Item>
            <Item className="d-flex justify-content-left align-items-center">
              <GiUnplugged className="mr-1" size={18} />
              <h5 className="p-0 m-0">Discharge</h5>
            </Item>
          </Menu>
        </Portal>
        <ListGroup>
          {store &&
            store.data.map((el, index) => {
              return (
                <div key={index}>
                  <ListGroupItem
                    className={`border-0 ${
                      actived === index ? 'bg-primary' : ''
                    }`}
                    onContextMenu={handleContextMenu}
                    onClick={() => {
                      setActived(index)
                    }}
                    key={index}
                    id={el.name}
                  >
                    <Row>
                      <Col
                        className="d-flex justify-content-left align-items-center"
                        xl="7"
                      >
                        <Avatar
                          className="mr-1"
                          content="R"
                          size="lg"
                          status="online"
                          color="dark"
                        />
                        <div className="d-flex flex-column mr-2">
                          <h4 className="text-truncate mb-0">{el.name}</h4>
                          <small className="text-truncate mb-0">
                            {el.type}
                          </small>
                        </div>
                      </Col>
                      <Col xl="5">
                        <div className="d-flex flex-column">
                          <div className="mb-50">
                            <FcChargeBattery size={20} />
                            <small className="text-truncate mb-0">
                              {el.battry} %
                            </small>
                          </div>
                          <div>
                            <Badge color="light-info">{el.state}</Badge>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <hr className="w-100 p-0 my-25" />
                </div>
              )
            })}
        </ListGroup>
      </CardBody>
    </Card>
  )
}
