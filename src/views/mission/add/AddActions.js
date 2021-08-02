// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Input, CustomInput, Label } from 'reactstrap'

const AddActions = () => {
  return (
    <Fragment>
      <Card className="mt-0">
        <CardBody className="invoice-payment-option">
          <p className="mb-50">Accept payments via</p>
          <Input type="select" id="payment-select">
            <option>Debit Card</option>
            <option>Credit Card</option>
            <option>Paypal</option>
            <option>Internet Banking</option>
            <option>UPI Transfer</option>
          </Input>
        </CardBody>
        <CardBody className="invoice-terms mt-1">
          <div className="d-flex justify-content-between">
            <Label className="mb-0" for="payment-terms">
              Auto Parking
            </Label>
            <CustomInput type="switch" id="payment-terms" defaultChecked />
          </div>
          <div className="d-flex justify-content-between py-1">
            <Label className="mb-0" for="client-notes">
              Auto Charge
            </Label>
            <CustomInput type="switch" id="client-notes" defaultChecked />
          </div>
          <div className="d-flex justify-content-between">
            <Label className="mb-0" for="payment-stub">
              Record
            </Label>
            <CustomInput type="switch" id="payment-stub" />
          </div>
        </CardBody>
      </Card>
      <Card className="invoice-action-wrapper">
        <CardBody>
          <Button.Ripple color="primary" block className="mb-75" disabled>
            Submit Mission
          </Button.Ripple>
          <Button.Ripple
            tag={Link}
            to="/apps/invoice/preview"
            color="primary"
            block
            outline
            className="mb-75"
          >
            Preview
          </Button.Ripple>
          <Button.Ripple color="primary" block outline>
            Save As Template
          </Button.Ripple>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default AddActions
