import { useState, useEffect } from 'react'
import {
  Form,
  Col,
  Row,
  Media,
  FormGroup,
  Label,
  Input,
  Button,
  FormText
} from 'reactstrap'
import classnames from 'classnames'

import { getMap, multiDelete } from '@src/views/map/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@components/avatar'

const General = ({ vehicle }) => {
  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')

  const dispatch = useDispatch()
  const store = useSelector((state) => state.maps)

  useEffect(() => {
    dispatch(getMap())
  }, [dispatch])

  const renderVehicleAvatar = () => {
    if (vehicle.image === null || vehicle.image === undefined) {
      return (
        <Avatar
          initials
          color="light-primary"
          className="rounded mr-2 my-25"
          content={'R'}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    } else {
      return (
        <div className="bg-light-success rounded my-25 mr-2">
          <img
            className="user-avatar cursor-pointer"
            src={vehicle.image}
            alt="vehicle avatar"
            width="140"
            height="100"
          />
        </div>
      )
    }
  }

  const renderColorOptions = () => {
    return ['success', 'danger', 'warning', 'info', 'primary'].map((color) => {
      return (
        <li
          key={color}
          className={classnames('d-inline-block', {
            selected: selectedColor === color
          })}
          onClick={() => setSelectedColor(color)}
        >
          <div className={`color-option b-${color}`}>
            <div className={`filloption bg-${color}`}></div>
          </div>
        </li>
      )
    })
  }

  return (
    <Row className="w-100">
      <Col sm="12">
        <Media className="mb-2">
          {renderVehicleAvatar()}
          <Media className="mt-50" body>
            <h4>{vehicle.name}</h4>
            <small>Sweep Robot</small>
          </Media>
        </Media>
      </Col>
      <Col sm="12">
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row className="d-flex flex-column">
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-name">Name</Label>
                <Input
                  type="text"
                  id="vehicle-name"
                  placeholder="Vehicle name"
                  defaultValue={vehicle && vehicle.name}
                />
              </FormGroup>
            </Col>
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-state">State</Label>
                <Input
                  type="select"
                  id="vehicle-state"
                  value={vehicle && vehicle.state}
                  // defaultValue={vehicle && vehicle.name}
                >
                  <option value={0}>Offline</option>
                  <option value={1}>Idle</option>
                  <option value={2}>Busy</option>
                  <option value={3}>Pause</option>
                  <option value={4}>Error</option>
                  <option value={5}>Changing</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-max-velocity">Max Linear Speed</Label>
                <Input
                  type="text"
                  id="vehicle-max-velocity"
                  // placeholder="his vehicle's maximum velocity (in m/s)."
                  // defaultValue={vehicle && vehicle.name}
                />
                <FormText>
                  Enter a value in meters/second for the max. forward or
                  backward speed during the relative move, or select the XYZ
                  icon to define a variable.
                </FormText>
              </FormGroup>
            </Col>
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-max-reverse-velocity">
                  Max Angular Speed
                </Label>
                <Input
                  type="text"
                  id="vehicle-max-reverse-velocity"
                  // placeholder="This vehicle's maximum reverse velocity (in m/s)."
                  // defaultValue={vehicle && vehicle.name}
                />
                <FormText>
                  Enter a value in meters/second for the max. turn speed during
                  the relative move, or select the XYZ icon to define a
                  variable.
                </FormText>
              </FormGroup>
            </Col>
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-map">Map</Label>
                <Input
                  type="select"
                  id="vehicle-map"
                  // placeholder="Actived map"
                  // defaultValue={vehicle && vehicle.name}
                >
                  {store.data.map((item) => {
                    return <option value={item.id}>{item.name}</option>
                  })}
                </Input>
                <FormText>Active map</FormText>
              </FormGroup>
            </Col>
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-map">IP</Label>
                <Input
                  disabled
                  type="text"
                  id="vehicle-map"
                  placeholder="Actived map"
                  defaultValue="192.168.1.120"
                  // defaultValue={vehicle && vehicle.name}
                />
              </FormGroup>
            </Col>
            <Col md="4" xs="12">
              <FormGroup className="product-color-options mt-0">
                <Label for="theme-color">Theme Color</Label>
                <ul className="list-unstyled mb-0 mt-50">
                  {renderColorOptions()}
                </ul>
              </FormGroup>
            </Col>
            <Col className="d-flex flex-sm-row flex-column mt-2" sm="12">
              <Button.Ripple
                className="mb-1 mb-sm-0 mr-0 mr-sm-1"
                type="submit"
                color="primary"
              >
                Save
              </Button.Ripple>
              <Button.Ripple color="secondary" outline>
                Reset
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  )
}

export default General
