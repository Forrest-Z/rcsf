// ** React Imports
import React, { useState, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Row, Col, CustomInput, Label, Input, Alert } from 'reactstrap'
import { Info } from 'react-feather'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'

const VehicleView = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.vehicle)

  const renderVehicleList = () => {

  }

  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='VEHICLE' breadCrumbActive='Vehicle' />
      {store.data.length ? (
        <section className='grid-view wishlist-items'>{renderVehicleList()}</section>
      ) : (
          <Alert color='info'>
            <div className='alert-body'>
              <Info size={14} />
              <span className='align-middle ml-50'>Vehicle list is empty</span>
            </div>
          </Alert>
        )}
    </Fragment>
  )
}

export default VehicleView