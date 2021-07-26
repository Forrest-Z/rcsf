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
  Alert
} from 'reactstrap'
import { Info, X, Settings } from 'react-feather'

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
                <h5 color='primary'>{item.name}</h5>
              </div>
            </div>
          </CardBody>
          <div className="item-options text-center">
            <Button className="btn-wishlist remove-wishlist" color="flat-light">
              <X className="mr-25" size={14} />
              <span>Remove</span>
            </Button>
            <Button color="primary" className="btn-cart move-cart">
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
