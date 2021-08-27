// ** React Imports
import { useState, useEffect } from 'react'

// ** Thrid Components
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
import { useForm } from 'react-hook-form'
import { Check } from 'react-feather'

// ** Store
import { getMap } from '@src/views/map/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle, updateVehicle } from '../store/actions'

// ** Custom Components
import Avatar from '@components/avatar'

const General = ({ vehicleId }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm()

  // ** State
  const [selectedColor, setSelectedColor] = useState('primary')
  const [vehicle, setVehicle] = useState({
    name: '',
    state: '',
    map: '',
    ip: ''
  })
  const dispatch = useDispatch()
  const mapStore = useSelector((state) => state.maps)
  const vehicleStore = useSelector((state) => state.vehicle)

  useEffect(() => {
    dispatch(getMap())
    dispatch(getVehicle({ id: vehicleId }))
  }, [dispatch])

  useEffect(() => {
    if (vehicleStore.data.length > 0) {
      setVehicle(vehicleStore.data[0])
    }
  }, [vehicleStore, vehicleStore.data.length])

  const renderVehicleAvatar = () => {
    // TODO: show vehicle avatar
    if (true) {
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

  const onSubmit = () => {
    dispatch(updateVehicle({ id: vehicle.id, data: vehicle }))
  }

  const renderColorOptions = () => {
    return ['success', 'danger', 'warning', 'info', 'primary'].map(
      (color, index) => {
        return (
          <li
            key={index}
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
      }
    )
  }

  return (
    <Row className="w-100">
      <Col sm="12">
        <Media className="mb-2">
          {vehicle && renderVehicleAvatar()}
          <Media className="mt-50" body>
            <h4>{vehicle && vehicle.name}</h4>
            <small>Sweep Robot</small>
          </Media>
        </Media>
      </Col>
      <Col sm="12">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="d-flex flex-column">
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-name">Name</Label>
                <Input
                  type="text"
                  id="vehicle-name"
                  placeholder="Vehicle name"
                  value={vehicle && vehicle.name}
                  onChange={(e) => {
                    setVehicle({ ...vehicle, name: e.target.value })
                  }}
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
                  onChange={(e) => {
                    setVehicle({ ...vehicle, state: e.target.value })
                  }}
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
            {/* <Col md="4" xs="12">
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
            </Col> */}
            {/* <Col md="4" xs="12">
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
            </Col> */}
            <Col md="4" xs="12">
              <FormGroup>
                <Label for="vehicle-map">Map</Label>
                <Input
                  type="select"
                  id="vehicle-map"
                  value={vehicle && vehicle.map}
                  onChange={(e) => {
                    setVehicle({ ...vehicle, state: e.target.value })
                  }}
                >
                  {mapStore.data.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    )
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
                  {vehicle && renderColorOptions()}
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
