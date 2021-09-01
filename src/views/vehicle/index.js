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
  TabPane,
  CardHeader,
  CardTitle
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
  HardDrive,
  Grid
} from 'react-feather'
import Chart from 'react-apexcharts'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import Avatar from '@components/avatar'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle, getVehicleType } from './store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'
import ScanForRobotsModal from './ScanForRobotsModal'

import defaultImage from '@src/assets/images/pages/intelligent.jpg'
import connection from '@src/assets/images/icons/rocket.svg'
import bell from '@src/assets/images/icons/bell.png'

import VehicleList from './List'
import VehicleMap from './Map'
import { columns } from './columns'

const onlineChartOptions = {
  options: {
    height: '100%'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '66%',
        image: connection,
        imageWidth: 30,
        imageHeight: 30,
        imageClipped: false,
        imageOffsetY: -12
      },
      track: {
        background: '#303147'
      },
      dataLabels: {
        showOn: 'always',
        name: {
          show: false
        },
        value: {
          show: true,
          fontFamily: 'Montserrat',
          fontSize: '1.514rem',
          color: '#f2f2f2',
          offsetY: 35,
          formatter: (val) => {
            return val / 100
          }
        }
      }
    }
  },
  stroke: {
    lineCap: 'round'
  }
}

const noticeChartOptions = {
  options: {
    height: '100%'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '66%',
        image: bell,
        imageWidth: 30,
        imageHeight: 30,
        imageClipped: false,
        imageOffsetY: -12
      },
      track: {
        background: '#303147'
      },
      dataLabels: {
        showOn: 'always',
        name: {
          show: false
        },
        value: {
          show: true,
          fontFamily: 'Montserrat',
          fontSize: '1.514rem',
          color: '#f2f2f2',
          offsetY: 35,
          formatter: (val) => {
            return val / 100
          }
        }
      }
    }
  },
  stroke: {
    lineCap: 'round'
  }
}

const VehicleView = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const vehicleGroupStore = useSelector((state) => state.vehicleGroup)
  const vehicleStore = useSelector((state) => state.vehicle)

  // ** States
  const [isOpenScanModal, setIsOpenScanModal] = useState(false)
  const [active, setActive] = useState('1')
  const [showGroup, setShowGroup] = useState(true)

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
    return vehicleStore.data.map((item) => {
      return (
        <Card className="ecommerce-card" key={item.id}>
          <CardBody>
            <div className="item-img text-center mx-auto">
              <img
                className="img-fluid"
                src={item.avatar || defaultImage}
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
            <Button.Ripple
              tag={Link}
              to="/vehicle/detail"
              className="btn-wishlist remove-wishlist"
              color="primary"
            >
              <Menu className="mr-25" size={14} />
              <span>Detail</span>
            </Button.Ripple>
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

  const renderGroups = () => {
    console.log(vehicleGroupStore.data)
    return vehicleGroupStore.data.map((item) => {
      return (
        <Card
          className="ecommerce-card"
          key={item.id}
          onClick={() => setShowGroup(!showGroup)}
        >
          <CardBody className="d-flex justify-content-center flex-column align-items-center">
            <div className="row align-items-center w-75 border-primary">
              <div className="col-2 bg-primary px-50 py-25">
                <Grid className="text-light" size={25} />
              </div>
              <div className="col-8">
                <h4 className="p-0 m-0">{item.name}</h4>
              </div>
            </div>
            <div className="row w-100 d-flex my-1">
              <div className="col-6 d-flex">
                <Chart
                  label={11}
                  options={onlineChartOptions}
                  colors={['red']}
                  series={[item.online_count || 0]}
                  type={'radialBar'}
                  height={'100%'}
                  width={'100%'}
                />
              </div>
              <div className="col-6 d-flex">
                <Chart
                  label={11}
                  options={noticeChartOptions}
                  colors={['red']}
                  series={[item.online_count || 0]}
                  type={'radialBar'}
                  height={'100%'}
                  width={'100%'}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      )
    })
  }

  useEffect(() => {
    dispatch(getVehicleType())
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
        <Col xl="12">
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
                    MAP
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
              <TabPane tabId="1" className="h-100">
                <VehicleMap />
              </TabPane>
              <TabPane tabId="2">
                <VehicleList />
              </TabPane>
            </TabContent>
          </div>
        </Col>
        {/* <Col xl="5">
          <section className="grid-view wishlist-items">
            {showGroup ? renderGroups() : renderVehicleList()}
          </section>
        </Col> */}
      </Row>
    </Fragment>
  )
}

export default VehicleView
