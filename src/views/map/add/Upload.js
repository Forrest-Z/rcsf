// ** React Imports
import React, { Fragment, useState } from 'react'

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
import { DragDrop } from '@uppy/react'
import Uppy from '@uppy/core'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Styles
import '@styles/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'

// TODO: add content
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
        </ul>
      </div>
    </Fragment>
  )
}

const Upload = () => {
  const { control, register, handleSubmit, watch, formState: { errors }, setValue } = useForm()

  const onSubmit = data => {
    console.log(data)
    toast.success(<SuccessToast data={data} />, { hideProgressBar: true })
  }

  const uppy = new Uppy({
    autoProceed: false,
    onBeforeFileAdded: (file) => {
      // Set map file required
      setValue('mapFile', file.data)
      return true
    },
    restrictions: {
      maxNumberOfFiles: 1,
      allowedFileTypes: ['zip/*']
    }
  })

  return (
    <Row>
      <Col xl='4'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for='mapName'>Name</Label>
            <Input
              {...register('mapName', { required: true, maxLength: 20 })}
              id='mapName'
              placeholder='Map Name'
            />
            {errors.mapName && errors.mapName.type === "required" && <span className='text-danger'>This is required</span>}
            {errors.mapName && errors.mapName.type === "maxLength" && <span className='text-danger'>Max length exceeded</span>}
          </FormGroup>
          <FormGroup>
            <Label for='mapDescription'>Description</Label>
            <Input
              {...register('mapDescription', { required: false, maxLength: 100 })}
              type='textarea'
              id='mapDescription'
              placeholder='Map Description'
            />
            {errors.mapDescription && errors.mapDescription.type === "maxLength" && <span className='text-danger'>Max length exceeded</span>}
          </FormGroup>
          <FormGroup>
            <Label for='mapFile'>Map File</Label>
            <Controller
              name='mapFile'
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
            {errors.mapFile && errors.mapFile.type === "required" && <span className='text-danger'>This is required</span>}
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