// ** React Imports
import React, { useState, useContext, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  CustomInput,
  Label,
  Input,
  Alert,
  Badge,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import {
  Info,
  Menu,
  Settings,
  WifiOff,
  MinusCircle,
  Loader,
  BatteryCharging,
  PauseCircle,
  AlertTriangle,
  Wifi,
  Plus,
  HardDrive
} from 'react-feather'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from './store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
import ScanForRobotsModal from './ScanForRobotsModal'

import defaultImage from '@src/assets/images/pages/intelligent.jpg'
import VehicleList from './List'
import VehicleMap from './Map'

const VehicleView = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.vehicle)

  // ** States
  const [isOpenScanModal, setIsOpenScanModal] = useState(false)
  const [active, setActive] = useState('1')

  const renderState = (state) => {
    switch (state) {
      case 0:
        return (
          <div>
            <Badge className="mr-1" color="dark">
              OFFLINE
            </Badge>
            <WifiOff size={20} />
          </div>
        )
      case 1:
        return (
          <div>
            <Badge className="mr-1" color="success">
              IDLE
            </Badge>
            <MinusCircle size={20} />
          </div>
        )
      case 2:
        return (
          <div>
            <Badge className="mr-1" color="info">
              BUSY
            </Badge>
            <Loader className="spinner" size={18} />
          </div>
        )
      case 3:
        return (
          <div>
            <Badge className="mr-1" color="primary">
              PAUSE
            </Badge>
            <PauseCircle size={20} />
          </div>
        )
      case 4:
        return (
          <div>
            <Badge className="mr-1" color="warning">
              ERROR
            </Badge>
            <AlertTriangle size={20} />
          </div>
        )
      case 5:
        return (
          <div>
            <Badge className="mr-1" color="info bg-darken-2">
              CHARGING
            </Badge>
            <BatteryCharging size={20} />
          </div>
        )
    }
  }

  const toggle = (tab) => {
    setActive(tab)
  }

  const renderVehicleList = () => {
    return store.data.map((item) => {
      return (
        <Card className="ecommerce-card" key={item.id}>
          <CardBody>
            <div className="item-img text-center mx-auto">
              <img
                className="img-fluid"
                src={item.image || defaultImage}
                alt={item.name}
              />
            </div>
            <div className="item-wrapper">
              <div className="item-name">
                <h5 color="primary">{item.name}</h5>
              </div>
              <div className="item-cost">{renderState(item.state)}</div>
            </div>
          </CardBody>
          <div className="item-options text-center">
            <Button className="btn-wishlist remove-wishlist" color="primary">
              <Menu className="mr-25" size={14} />
              <span>Detail</span>
            </Button>
            <Button
              tag={Link}
              to={{ pathname: '/vehicle/settings', vehicle: item }}
              // params={{ vehicle: item }}
              className="btn-cart move-cart"
              color="primary"
            >
              <Settings className="mr-50" size={14} />
              <span>Setting</span>
            </Button>
          </div>
        </Card>
      )
    })
  }

  useEffect(() => {
    dispatch(getVehicle())
  }, [dispatch])

  return (
    <Fragment>
      <ScanForRobotsModal
        isOpen={isOpenScanModal}
        toggle={() => setIsOpenScanModal(!isOpenScanModal)}
        data={[]}
      />
      {/* <Row className="w-100 d-flex">
        <Col xl="9">
          <BreadCrumbs breadCrumbTitle="VEHICLE" breadCrumbActive="Vehicle" />
        </Col>
        <Col xl="3">
          <Button.Ripple
            className="mr-1 rounded"
            color="relief-primary"
            onClick={() => setIsOpenScanModal(!isOpenScanModal)}
          >
            <Wifi className="mr-1" size={18} />
            <span>Scan for robots</span>
          </Button.Ripple>
          <Button.Ripple className="rounded" color="relief-primary">
            <Plus className="mr-1" size={18} />
            <span>Add robot manually</span>
          </Button.Ripple>
        </Col>
      </Row> */}
      <Row>
        <Col xl="8">
          <div className="d-fex flex-column">
            <div className="d-flex justify-content-center align-content-center w-100">
              <div
                className="d-flex justify-content-center align-content-center w-75 rounded-pill d-flex row"
                style={{ backgroundColor: '#3f4364' }}
              >
                <div className="p-1 py-xl-50 col-1">
                  <HardDrive className="ml-1" size={20} />
                </div>

                <div
                  className="d-flex ml-1 p-1 py-xl-50 px-lg-3 px-xl-2 col-lg-3 align-items-center"
                  style={{ backgroundColor: '#2a2c42' }}
                >
                  <span className="font-weight-bolder mr-auto">DEVICES</span>
                  <h3 className="m-0 text-light">9</h3>
                </div>

                <div
                  className="d-flex ml-1 p-1 py-xl-50 px-3 px-xl-2 col-3 align-items-center"
                  style={{ backgroundColor: '#2a2c42' }}
                >
                  <Badge color="info" className="px-0 mr-1">
                    &ensp;
                  </Badge>
                  <span className="font-weight-bolder mr-auto">ONLINE</span>
                  <h3 className="m-0 text-light">7</h3>
                </div>

                <div
                  className="d-flex ml-1 p-1 py-xl-50 px-3 px-xl-2 col-3 align-items-center"
                  style={{ backgroundColor: '#2a2c42' }}
                >
                  <Badge color="secondary" className="px-0 mr-1">
                    &ensp;
                  </Badge>
                  <span className="font-weight-bolder mr-auto">OFFLINE</span>
                  <h3 className="m-0 text-light">2</h3>
                </div>

                <div className="col-1 d-flex justify-content-center align-content-center px-xl-0">
                  <Button.Ripple
                    color="flat-primary btn-icon py-lg-50 my-lg-50 py-xl-0 px-xl-50 mx-xl-0 my-xl-50"
                    size="sm"
                    onClick={() => setIsOpenScanModal(true)}
                  >
                    <Plus size={20} />
                  </Button.Ripple>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center mt-1">
              <Nav tabs>
                <NavItem>
                  <NavLink active={active === '1'} onClick={() => toggle('1')}>
                    Map
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={active === '2'} onClick={() => toggle('2')}>
                    LIST
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <TabContent activeTab={active}>
              <TabPane tabId='1' className='h-100'>
                <VehicleMap />
              </TabPane>
              <TabPane tabId="2">
                <VehicleList />
              </TabPane>
            </TabContent>
          </div>
        </Col>
        <Col xl="4">
          {store.data && store.data.length ? (
            <section className="grid-view wishlist-items">
              {renderVehicleList()}
            </section>
          ) : (
            <Alert color="info">
              <div className="alert-body">
                <Info size={14} />
                <span className="align-middle ml-50">
                  Vehicle list is empty
                </span>
              </div>
            </Alert>
          )}
        </Col>
      </Row>
    </Fragment>
  )
}

export default VehicleView
