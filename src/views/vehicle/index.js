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
  Badge
} from 'reactstrap'
import {
  Info,
  X,
  Settings,
  WifiOff,
  MinusCircle,
  Loader,
  BatteryCharging,
  PauseCircle,
  AlertTriangle
} from 'react-feather'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from './store/actions'

// ** Styles
import '@styles/base/pages/app-ecommerce.scss'

const VehicleView = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.vehicle)

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

  const renderVehicleList = () => {
    return store.data.map((item) => {
      return (
        <Card className="ecommerce-card" key={item.id}>
          <div className="item-img text-center mx-auto">
            <img className="img-fluid" src={item.image} alt={item.name} />
          </div>
          <CardBody>
            <div className="item-wrapper">
              <div className="item-name">
                <h5 color="primary">{item.name}</h5>
              </div>
              <div className="item-cost">{renderState(item.state)}</div>
            </div>
          </CardBody>
          <div className="item-options text-center">
            <Button className="btn-wishlist remove-wishlist bg-dark bg-lighten-1">
              <X className="mr-25" size={14} />
              <span>Remove</span>
            </Button>
            <Button
              tag={Link}
              to={{ pathname: '/vehicle/settings', vehicle: item }}
              // params={{ vehicle: item }}
              className="btn-cart move-cart bg-primary bg-lighten-1"
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
      <BreadCrumbs breadCrumbTitle="VEHICLE" breadCrumbActive="Vehicle" />
      {store.data && store.data.length ? (
        <section className="grid-view wishlist-items">
          {renderVehicleList()}
        </section>
      ) : (
        <Alert color="info">
          <div className="alert-body">
            <Info size={14} />
            <span className="align-middle ml-50">Vehicle list is empty</span>
          </div>
        </Alert>
      )}
    </Fragment>
  )
}

export default VehicleView
