import { useState } from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Alert,
  Media,
  CustomInput
} from 'reactstrap'
import { CheckCircle, RefreshCw, Info } from 'react-feather'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getScanVehicle } from './store/actions'

const ScanForRobotsModal = ({ isOpen, toggle }) => {
  const [scanVehicles, setScanVehicles] = useState([])

  const renderData = () => {
    if (scanVehicles.length > 0) {
      return scanVehicles.map((item, key) => {
        return (
          <div key={key} className="business-item">
            <div className="d-flex align-items-center justify-content-between">
              <CustomInput
                type="checkbox"
                className="custom-control-Primary"
                id={item}
                label={item}
              />
              <Button.Ripple
                size="sm"
                className="btn-icon"
                color="flat-primary"
              >
                <CheckCircle size={21} />
              </Button.Ripple>
            </div>
          </div>
        )
      })
    } else {
      return (
        <Alert color="info">
          <div className="alert-body">
            <Info size={14} />
            <span className="align-middle ml-50">Scan robot list is empty</span>
          </div>
        </Alert>
      )
    }
  }

  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={isOpen}
      toggle={toggle}
      onOpened={() => {
        getScanVehicle().then((response) => {
          setScanVehicles(response.data)
        })
      }}
    >
      <ModalHeader toggle={toggle}>Scan For Robots</ModalHeader>
      <ModalBody>
        <Card className="business-card">
          <CardHeader>
            <CardTitle>Scaning</CardTitle>
            <Button.Ripple
              size={'sm'}
              className="btn-icon"
              color="flat-info"
              onClick={() => {
                getScanVehicle().then((response) => {
                  setScanVehicles(response.data)
                })
              }}
            >
              <RefreshCw size={20} />
            </Button.Ripple>
          </CardHeader>
          <CardBody className='mt-2'>
            <div className="business-items">{renderData()}</div>
          </CardBody>
        </Card>
      </ModalBody>
      <ModalFooter>
        <Button outline color="primary">
          Confirm
        </Button>
        <Button outline color="danger">
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ScanForRobotsModal
