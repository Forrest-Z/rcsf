import { Label, Row, Col, InputGroup, InputGroupAddon, Input, InputGroupText, Badge, CustomInput, Button } from 'reactstrap'

export const PointProperties = properties => (
  <div className='p-1'>
    <Row>
      <Col xl='4'>
        <Label>Name</Label>
      </Col>
      <Col xl='8'>
        <Input bsSize='sm' />
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

export const AreaProperties = properties => (
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
        <Input type='select' name='select' bsSize='sm' id='select-sm'>
        </Input>
      </Col>
    </Row>
    <hr />
  </div>
)

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