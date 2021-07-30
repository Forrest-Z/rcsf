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
  Alert
} from 'reactstrap'
import { CheckCircle, RefreshCw, Info } from 'react-feather'

const ScanForRobotsModal = ({ isOpen, toggle, data }) => {
  const renderData = () => {
    if (data.length > 0) {
      return data.map((item) => {
        return (
          <div key={item.id} className="browser-states">
            <Media>
              {/* <img className='rounded mr-1' src={state.avatar} height='30' alt={state.title} /> */}
              <h6 className="align-self-center mb-0">{item.name}</h6>
              <small>{item.type}</small>
            </Media>
            <div className="d-flex align-items-center">
              <div className="btn-icon">
                <CheckCircle />
              </div>
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
    <Modal className="modal-dialog-centered" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Scan For Robots</ModalHeader>
      <ModalBody>
        <Card>
          <CardHeader>
            <CardTitle>Scaning</CardTitle>
            <Button.Ripple className='btn-icon' color="flat-info">
              <RefreshCw size={20} />
            </Button.Ripple>
          </CardHeader>
          <CardBody>{renderData()}</CardBody>
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
