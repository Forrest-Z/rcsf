// React Imports
import React from 'react'

// Thrid
import { Card, CustomInput, Row, Col } from 'reactstrap'
import StageMobx from '../../../../utility/mobx/StageMobx'

const Footer = props => {
  return (
    <div className='chat-app-form p-0 pl-1 m-0'>
      <Row className='w-100'>
        <Col xl='1'>
          <CustomInput
            className='custom-control-primary'
            inline
            type='checkbox'
            id='grid-checkbox'
            label='Grid'
            defaultChecked
            onChange={e => StageMobx.setGrid(e.target.checked)}
          />
        </Col>
        <Col xl='1'>
          <CustomInput
            className='custom-control-primary'
            inline
            type='checkbox'
            id='axis-checkbox'
            label='Axis'
            defaultChecked
            onChange={e => StageMobx.setAxis(e.target.checked)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Footer