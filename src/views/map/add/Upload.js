
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
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const SuccessToast = ({ data }) => {
  return (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Check size={12} />} />
          <h6 className='toast-title'>Form Submitted!</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <ul className='list-unstyled mb-0'>
          <li>
            <strong>firstName</strong>: {data.firstName}
          </li>
          <li>
            <strong>lastName</strong>: {data.lastName}
          </li>
          <li>
            <strong>email</strong>: {data.email}
          </li>
        </ul>
      </div>
    </Fragment>
  )
}

const Upload = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = data => {
    toast.success(<SuccessToast data={data} />, { hideProgressBar: true })
  }

  return (
    <Row>
      <Col xl='4'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='mapName'>Name</Label>
            <Input
              {...register('mapName', { required: true, maxLength: 20 })}
              id='mapName'
              // onChange={e => setMapName(e.target.value)}
              placeholder='Map Name'
            />
            {errors && errors.mapName && <span className='text-danger'>This field is required</span>}
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              type='textarea'
              id='mapDescription'
            />
          </FormGroup>
          <FormGroup className='d-flex mb-0'>
            <Button.Ripple className='mr-1' color='primary' type='submit'>
              Submit
            </Button.Ripple>
            <Button.Ripple outline color='secondary' type='reset'>
              Reset
            </Button.Ripple>
          </FormGroup>
        </Form>
      </Col>
      <Col xl='6'>
      </Col>
    </Row>
  )
}

export default Upload