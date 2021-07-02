// ** React Imports
import React, { useState, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Row, Col, CustomInput, Label, Input } from 'reactstrap'

import '@styles/base/pages/app-ecommerce.scss'

const VehicleView = () => {
  const [vehicles, setVehicles] = useState([{name: 1, id: 1, image: 'http://localhost:9000/files/123/vehicle.png'}])
  const renderVehicles = ()  => {
    return vehicles.map(item => {
      return (
        <Card key={item.id} className='ecommerce-card h-100'>
          <div className='item-img'>
            <Link>
              <img className='img-fluid' src={item.image} alt={item.name} />
            </Link>
          </div>
        </Card>
      )
    })

  }

  return (
    <div className='list-view product-checkout'>
      <div className='checkout-items'>{vehicles.length ? renderVehicles() : <h4>Vehicle is empty</h4>}</div>

    </div>
  )
}

export default VehicleView