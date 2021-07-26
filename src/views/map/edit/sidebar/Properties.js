// React Imports
import { useState, useEffect } from 'react'

// Thrid Components
import { Label, Row, Col, InputGroup, InputGroupAddon, Input, InputGroupText, Badge, CustomInput, Button } from 'reactstrap'
import { observer } from "mobx-react"
import { toJS } from 'mobx'

// Custom Components
import StageMobx from '../../../../utility/mobx/StageMobx'


export const PointProperties = observer(() => {

  return (
    <div className='p-1'>
      <Row>
        <Col xl='4'>
          <Label>Name</Label>
        </Col>
        <Col xl='8'>
          <Input bsSize='sm' value={StageMobx.selection.id} onChange={() => StageMobx.selection.setID(StageMobx.selection.id)} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Position</Label>
        </Col>
        <Col xl='4' className='pr-0'>
          <InputGroup size='sm'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                X:
              </InputGroupText>
            </InputGroupAddon>
            <Input value={StageMobx.selection.x} onChange={() => StageMobx.selection.setX(StageMobx.selection.x)} />
          </InputGroup>
        </Col>
        <Col xl='4' className='pl-0'>
          <InputGroup size='sm'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                Y:
          </InputGroupText>
            </InputGroupAddon>
            <Input value={StageMobx.selection.y} onChange={() => StageMobx.selection.setY(StageMobx.selection.y)} />
          </InputGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Orientation</Label>
        </Col>
        <Col xl='4'>
          <InputGroup size='sm'>
            <Input value={StageMobx.selection.rotation} />
            <InputGroupAddon addonType='append'>
              <InputGroupText>∠</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col>
          <Input disabled bsSize='sm' defaultValue={'[0,0,0,1]'} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Type</Label>
        </Col>
        <Col xl='8'>
          <Input type='select' name='select' bsSize='sm' id='select-sm'>
            <option>Route</option>
            <option>Charge</option>
            <option>Parking</option>
          </Input>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Group</Label>
        </Col>
        <Col xl='8'>
          <Input type='select' name='select' bsSize='sm' id='select-sm'>
          </Input>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Active</Label>
        </Col>
        <Col xl='8'>
          <CustomInput className='custom-control-success' inline type='checkbox' id='exampleCustomCheckbox' defaultChecked />
        </Col>
      </Row>
      <hr />
    </div>
  )
})

export const AreaProperties = observer(properties => {
  return (
    <div className='p-1'>
      <Row>
        <Col xl='4'>
          <Label>Name</Label>
        </Col>
        <Col xl='8'>
          <Input bsSize='sm' value={StageMobx.selection.id} onChange={() => StageMobx.selection.setID(StageMobx.selection.id)} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Position</Label>
        </Col>
        <Col xl='4'>
          <InputGroup size='sm' >
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                X:
        </InputGroupText>
            </InputGroupAddon>
            <Input bsSize='sm' value={StageMobx.selection.x} onChange={() => StageMobx.selection.setX(StageMobx.selection.x)} />
          </InputGroup>
        </Col>
        <Col xl='4'>
          <InputGroup size='sm'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                Y:
              </InputGroupText>
            </InputGroupAddon>
            <Input value={StageMobx.selection.y} onChange={() => StageMobx.selection.setY(StageMobx.selection.y)} />
          </InputGroup>
        </Col>
      </Row>
      <hr />
      {/* <Row>
        <Col xl='4'>
          <Label>Orientation</Label>
        </Col>
        <Col xl='4'>
          <InputGroup size='sm'>
            <Input />
            <InputGroupAddon addonType='append'>
              <InputGroupText>∠</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col>
          <Input disabled bsSize='sm' defaultValue={'[0,0,0,1]'} />
        </Col>
      </Row>
      <hr /> */}
      {/* <Row>
        <Col xl='4'>
          <Label>Type</Label>
        </Col>
        <Col xl='8'>
          <Input type='select' name='select' bsSize='sm' id='select-sm'>
            <option>Route</option>
            <option>Charge</option>
            <option>Parking</option>
          </Input>
        </Col>
      </Row>
      <hr /> */}
      <Row>
        <Col xl='4'>
          <Label>Group</Label>
        </Col>
        <Col xl='8'>
          <Input type='select' name='select' bsSize='sm' id='select-sm'>
          </Input>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xl='4'>
          <Label>Active</Label>
        </Col>
        <Col xl='8'>
          <CustomInput className='custom-control-success' inline type='checkbox' id='exampleCustomCheckbox' defaultChecked />
        </Col>
      </Row>
      <hr />
    </div>
  )

})

export const VehicleProperties = properties => (
  <div className='p-1'>
    <Row>
      <Col xl='4'>
        <Label>Name</Label>
      </Col>
      <Col xl='8'>
        <Input size='sm' />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xl='4'>
        <Label>Position</Label>
      </Col>
      <Col xl='4'>
        <InputGroup size='sm'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>
              X:
        </InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      </Col>
      <Col xl='4'>
        <InputGroup size='sm'>
          <InputGroupAddon addonType='prepend'>
            <InputGroupText>
              Y:
        </InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xl='4'>
        <Label>Orientation</Label>
      </Col>
      <Col xl='4'>
        <InputGroup size='sm'>
          <Input />
          <InputGroupAddon addonType='append'>
            <InputGroupText>∠</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Col>
      <Col>
        <Input disabled size='sm' defaultValue={'[0,0,0,1]'} />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col xl='4'>
        <Label>Group</Label>
      </Col>
      <Col xl='8'>
        <Input type='select' name='select' bsSize='sm' id='select-sm'>
        </Input>
      </Col>
    </Row>
    <hr />
  </div>
)