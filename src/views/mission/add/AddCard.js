import { Fragment } from 'react'

import {
  Card,
  CardBody,
  CardText,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Button,
  UncontrolledTooltip,
  CardTitle
} from 'reactstrap'

import { Hash } from 'react-feather'

const AddCard = () => {
  return (
    <Fragment>
      <Card className="mb-0 h-100">
        <CardBody className="pb-0">
        <CardTitle>Add Mission</CardTitle>
          <Row>
            <Col xl='6'>
              <Form className='w-75'>
                <FormGroup>
                  <Label>SN</Label>
                  <InputGroup className='input-group-merge invoice-edit-input-group disabled'>
                  <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                      <Hash size={15} />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type='number'
                    className='invoice-edit-input'
                    value={3171}
                    placeholder='53634'
                    disabled
                  />
                </InputGroup>
                </FormGroup>

                <FormGroup>
                  <Label>
                    Name
                  </Label>
                  <Input type='text' />
                </FormGroup>

                <FormGroup>
                  <Label>
                    Vehicle
                  </Label>
                  <Input type='select' />
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default AddCard
