import {
  MessageSquare,
  Menu,
  PhoneCall,
  Video,
  Search,
  MoreVertical,
  XSquare,
  Image,
  Square,
  Circle,
  Save,
  MousePointer,
  ChevronDown,
  Zap,
  StopCircle,
  Octagon,
  Map,
  XOctagon,
  CornerUpLeft,
  CornerUpRight,
  CreditCard
} from 'react-feather'

import {
  UncontrolledDropdown,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
  Row,
  Col,
  ButtonGroup
} from 'reactstrap'

const Header = props => {
  const { handleSidebar } = props

  return (
    <header className='chat-header'>
      <div className='d-flex align-items-center w-100 p-0'>
        <div className='sidebar-toggle d-block d-lg-none mr-1' onClick={handleSidebar}>
          <Menu size={23} />
        </div>
        {/** Toolbar */}
        <Row className='w-100 h-100'>
          <Col xl='1'>
            <Button className='d-flex align-items-center justify-content-center flex-column m-0 h-100' color='flat-dark'>
              <Save size={23} />
              <small style={{paddingTop: '5px'}}>Save</small>
            </Button>
          </Col>

          <Col xl='1'>
            <Button className='d-flex align-items-center justify-content-center flex-column m-0 h-100' color='flat-dark'>
              <MousePointer size={23} />
              <small style={{paddingTop: '5px'}}>Mouse</small>
            </Button>
          </Col>

          <Col xl='1'>
            <Button className='d-flex align-items-center justify-content-center flex-column m-0 h-100' color='flat-dark'>
              <Circle size={23} />
              <small style={{paddingTop: '5px'}}>Point</small>
            </Button>
          </Col>

          <Col xl='1'>
            <Button className='d-flex align-items-center justify-content-center flex-column m-0 h-100' color='flat-dark'>
              <Square className='text-success' size={23} />
              <small style={{paddingTop: '5px'}}>Area</small>
            </Button>
          </Col>

          <Col xl='1'>
            <Button className='d-flex align-items-center justify-content-center flex-column m-0 h-100' color='flat-dark'>
              <Square className='text-danger text-lighten-2' size={23} />
              <small style={{paddingTop: '5px'}}>Block</small>
            </Button>
          </Col>

          <Col xl='1'>
            <Button className='d-flex align-items-center justify-content-center flex-column m-0 h-100' color='flat-dark'>
              <CreditCard className='text-info text-lighten-2' size={23} />
              <small style={{paddingTop: '5px'}}>Group</small>
            </Button>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header