// ** React Imports
import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

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
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'

// ** Styles
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'

// ** Store & Actions
import { addMap } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@store/storeConfig/store'


const Upload = () => {
  const history = useHistory()
  const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm()

  const onSubmit = data => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('file', data.file)
    store.dispatch(addMap(formData))
    history.push('/map')
  }

  const uppy = new Uppy({
    autoProceed: false,
    onBeforeFileAdded: (file) => {
      // Set map file required
      setValue('file', file.data)
      return true
    },
    restrictions: {
      maxNumberOfFiles: 1
      // allowedFileTypes: ['zip/*']
    }
  })

  return (
    <Row>
      <Col xl='4'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input
              {...register('name', { required: true, maxLength: 20 })}
              id='mapName'
              placeholder='Map Name'
            />
            {errors.name && errors.name.type === "required" && <span className='text-danger'>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span className='text-danger'>Max length exceeded</span>}
          </FormGroup>
          <FormGroup>
            <Label for='mapDescription'>Description</Label>
            <Input
              {...register('description', { required: false, maxLength: 100 })}
              type='textarea'
              id='mapDescription'
              placeholder='Map Description'
            />
            {errors.description && errors.description.type === "maxLength" && <span className='text-danger'>Max length exceeded</span>}
          </FormGroup>
          <FormGroup>
            <Label for='mapFile'>Map File</Label>
            <Controller
              name='file'
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <DragDrop
                    uppy={uppy}
                    locale={{
                      strings: {
                        dropHereOr: 'Drop map zip file here or browse'
                      }
                    }}
                  />
                )
              }}
            />
            {errors.file && errors.file.type === "required" && <span className='text-danger'>This is required</span>}
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