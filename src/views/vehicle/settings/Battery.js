import { Form, Row, Col, FormGroup, Input, Button, Label } from 'reactstrap'

const Battery = () => {
  return (
    <Form>
      <Row className='w-100'>
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-critical">Energy level critical</Label>
            <Input
              type="text"
              id="energy-level-critical"
              placeholder="The value at/below which the vehicle's energy level is considered 'critical'"
              // defaultValue={vehicle && vehicle.name}
            />
          </FormGroup>
        </Col>
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="vehicle-energy-level-sufficiently">
              Energy level sufficiently
            </Label>
            <Input
              type="text"
              id="vehicle-energy-level-sufficiently"
              placeholder="The value at/above which the vehicle's energy level is considered sufficiently recharged."
              // defaultValue={vehicle && vehicle.name}
            />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default Battery