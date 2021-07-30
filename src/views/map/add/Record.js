// ** React Imports
import React, { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import {
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback
} from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import Select, { components } from 'react-select'

// ** Custom Components
import { selectThemeColors } from '@utils'
import Avatar from '@components/avatar'
import { Viz } from '../../../components/viz'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from '@src/views/vehicle/store/actions'

// TODO:  add content
const SuccessToast = ({ data }) => {
  return (
    <Fragment>
      <div className="toastify-header">
        <div className="title-wrapper">
          <Avatar size="sm" color="success" icon={<Check size={12} />} />
          <h6 className="toast-title">Form Submitted!</h6>
        </div>
      </div>
      <div className="toastify-body">
        <ul className="list-unstyled mb-0"></ul>
      </div>
    </Fragment>
  )
}

const OptionComponent = ({ data, ...props }) => {
  return <components.Option {...props}>{data.label}</components.Option>
}

const Record = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm()

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.vehicle)

  const onSubmit = (data) => {
    toast.success(<SuccessToast data={data} />, { hideProgressBar: true })
  }

  const [deviceOptions, setDeviceOptions] = useState([])

  /**
   * Device select handle focus, update options when on focus
   */
  const handleFocus = () => {
    const options = []
    for (let i = 0; i < store.data.length; i++) {
      options.push({
        label: store.data[i].name,
        value: store.data[i].name
      })
    }
    setDeviceOptions(options)
  }

  useEffect(() => {
    dispatch(getVehicle())
  }, [dispatch])

  useEffect(() => {
    const options = []
    for (let i = 0; i < store.data.length; i++) {
      options.push({
        label: store.data[i].name,
        value: store.data[i].name
      })
    }
    setDeviceOptions(options)
  }, [store && store.data.length])

  return (
    <Row>
      <Col xl="4">
        <Form className="h-100" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="mapName">Name</Label>
            <Input
              {...register('mapName', { required: true, maxLength: 20 })}
              id="mapName"
              placeholder="Map Name"
            />
            {errors.mapName && errors.mapName.type === 'required' && (
              <span className="text-danger">This is required</span>
            )}
            {errors.mapName && errors.mapName.type === 'maxLength' && (
              <span className="text-danger">Max length exceeded</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="mapDescription">Description</Label>
            <Input
              {...register('mapDescription', {
                required: false,
                maxLength: 100
              })}
              type="textarea"
              id="mapDescription"
              placeholder="Map Description"
            />
          </FormGroup>
          <FormGroup>
            <Label for="device">Record Device</Label>
            <Controller
              control={control}
              name="test"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState
              }) => (
                <Select 
                  options={deviceOptions}
                  theme={selectThemeColors}
                  className='react-select'
                  classNamePrefix='select'
                  isClearable
                  components={{
                    Option: OptionComponent
                  }}
                />
              )}
            />

            {errors.device && errors.device.type === 'required' && (
              <span className="text-danger">This is required</span>
            )}
          </FormGroup>
          <FormGroup className="d-flex mb-0">
            <Button.Ripple className="mr-1" color="primary" type="submit">
              Submit
            </Button.Ripple>
            <Button.Ripple outline color="secondary" type="reset">
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </Col>
      <Col xl="8">
        <Viz />
      </Col>
    </Row>
  )
}

export default Record
