import { Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const General = () => {
  return (
    <Form>
      <Row className="w-100 d-flex flex-column">
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-critical">Auto charging</Label>
            <Input
              type="select"
              id="energy-level-critical"
              // placeholder="Select True to auto charge the robot"
              // defaultValue={vehicle && vehicle.name}
            >
              <option>True</option>
              <option>False</option>
            </Input>
            <FormText className='text-muted'>Select True to auto charge the robot</FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-critical">Auto parking</Label>
            <Input
              type="select"
              id="energy-level-critical"
              // placeholder="Select True to auto park the robot"
              // defaultValue={vehicle && vehicle.name}
            >
              <option>True</option>
              <option>False</option>
            </Input>
            <FormText>Select True to auto park the robot</FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-critical">Idle time</Label>
            <Input
              type="text"
              id="energy-level-critical"
              // placeholder=""
              // defaultValue={vehicle && vehicle.name}
            >
            </Input>
            <FormText>Minimum of minutes a robot is allowed to idle, befor it is sent to park point</FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-critical">Energy level critical</Label>
            <Input
              type="text"
              id="energy-level-critical"
              // placeholder="The value at/below which the vehicle's energy level is considered 'critical'"
              // defaultValue={vehicle && vehicle.name}
            />
            <FormText>The value at/below which the vehicle's energy level is considered 'critical'</FormText>
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
              // placeholder="The value at/above which the vehicle's energy level is considered sufficiently recharged."
              // defaultValue={vehicle && vehicle.name}
            />
            <FormText>The value at/above which the vehicle's energy level is considered sufficiently recharged.</FormText>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default General
