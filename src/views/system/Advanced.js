import {
  Row,
  Card,
  CardTitle,
  Col,
  CardText,
  CardBody,
  Button
} from 'reactstrap'

const Advanced = () => {
  return (
    <Row className="w-100">
      <Col xl="4">
        <CardTitle className="mt-1 mb-75">Restart rcs software</CardTitle>
        <CardText></CardText>
        <CardBody>
          <Button color="primary">Restart</Button>
        </CardBody>
      </Col>
      <Col xl="4">
        <CardTitle className="mt-1 mb-75">Factory reset</CardTitle>
        <CardText></CardText>
        <CardBody>
          <Button color="danger">Reset</Button>
        </CardBody>
      </Col>
    </Row>
  )
}

export default Advanced
