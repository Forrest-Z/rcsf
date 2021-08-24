// ** React Imports
import { useEffect, useState } from 'react'

// ** Thrid Components
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'

// ** API
import { getSystemSettings, setSystemSettings } from './store/actions'

const General = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm()

  const [data, setData] = useState({
    AutoCharging: 'false',
    MissionPriorities: 'BY_NAME',
    IdleTime: '10',
    AutoParking: 'false',
    EnergyLevelCritical: 20,
    EnergyLevelSufficiently: 80
  })

  const onSubmit = () => {
    setSystemSettings(data).then(response => {
      console.log(response)
    })
  }

  useEffect(() => {
    getSystemSettings().then((response) => {
      const temp = {}
      response.data.map((item) => {
          temp[item.key] = item.value
      })
      setData(temp)
    })
  }, [])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="w-100 d-flex flex-column">
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="auto-charging">Auto charging</Label>
            <Input
              type="select"
              id="auto-charging"
              value={data && data.AutoCharging}
              onChange={(e) => setData({ ...data, AutoCharging: e.target.value })}
            >
              <option value={'True'}>True</option>
              <option value={'False'}>False</option>
            </Input>
            <FormText className="text-muted">
              Whether to automatically create recharge mission for idle
              vehicles.
            </FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="auto-parking">Auto parking</Label>
            <Input
              type="select"
              id="auto-parking"
              value={data && data.AutoParking}
              onChange={(e) => {
                setData({ ...data, AutoParking: e.target.value })
              }}
            >
              <option value={'True'}>True</option>
              <option value={'False'}>False</option>
            </Input>
            <FormText>
              Whether to automatically create parking missions for idle
              vehicles.
            </FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="idle-time">Idle time</Label>
            <InputGroup>
              <Input
                type="text"
                id="idle-time"
                // placeholder=""
                value={data.IdleTime}
                onChange={(e) => setData({ ...data, IdleTime: e.target.value })}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>Seconds</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            <FormText>
              Minimum of minutes a robot is allowed to idle, before it is sent
              to park point
            </FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="mission-priorities">Mission priorities</Label>
            <Input
              type="select"
              id="mission-priorities"
              value={data && data.MissionPriorities}
              onChange={(e) => setData({ ...data, MissionPriorities: e.target.value })}
            >
              <option value="BY_AGE">BY_AGE</option>
              <option value="BY_DEADLINE">BY_DEADLINE</option>
              <option value="DEADLINE_AT_RISK_FIRST">
                DEADLINE_AT_RISK_FIRST
              </option>
              <option value="BY_NAME">BY_NAME</option>
            </Input>
            <FormText>
              Keys by which to prioritize transport orders for assignment.
              Possible values: BY_AGE: Sort by age, oldest first. BY_DEADLINE:
              Sort by deadline, most urgent first. DEADLINE_AT_RISK_FIRST: Sort
              orders with deadlines at risk first. BY_NAME: Sort by name,
              lexicographically.
            </FormText>
          </FormGroup>
        </Col>

        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-critical">Energy level critical</Label>
            <InputGroup>
              <Input
                type="text"
                id="energy-level-critical"
                value={data && data.EnergyLevelCritical}
                onChange={(e) => setData({ ...data, EnergyLevelCritical: e.target.value })}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>%</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FormText>
              The value at/below which the vehicle's energy level is considered
              'critical'
            </FormText>
          </FormGroup>
        </Col>
        <Col md="3" xs="12">
          <FormGroup>
            <Label for="energy-level-sufficiently">
              Energy level sufficiently
            </Label>
            <InputGroup>
              <Input
                type="text"
                id="energy-level-sufficiently"
                value={data && data.EnergyLevelSufficiently}
                onChange={(e) => setData({ ...data, EnergyLevelSufficiently: e.target.value })}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>%</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            <FormText>
              The value at/above which the vehicle's energy level is considered
              sufficiently recharged.
            </FormText>
          </FormGroup>
        </Col>
        <Col md="3" xs="12">
          <FormGroup className="d-flex mb-0">
            <Button.Ripple className="mr-1" color="primary" type="submit">
              Submit
            </Button.Ripple>
            <Button.Ripple outline color="secondary" type="reset">
              Reset
            </Button.Ripple>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default General
