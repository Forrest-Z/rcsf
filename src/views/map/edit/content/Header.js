import { useState } from 'react'
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

// Mobx
import StageMobx from '../../../../utility/mobx/StageMobx'
import { toJS} from 'mobx'

import { updateMap } from '../../store/actions'
import { store } from '@store/storeConfig/store'

// Custom Conponents
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'

const PointDrawTool = () => {
  const [type, setType] = useState('Route Point')

  return (
    <UncontrolledButtonDropdown className="h-100">
      <Button
        className="d-flex align-items-center justify-content-center flex-column m-0 h-100 px-1 rounded-0"
        color="flat-dark"
        onClick={() => {
          if (type === 'Route Point') {
            StageMobx.setDrawTool(DRAW_TOOL_TYPE.ROUTE_POINT)
          } else if (type === 'Charge Point') {
            StageMobx.setDrawTool(DRAW_TOOL_TYPE.CHARGE_POINT)
          } else if (type === 'Park Point') {
            StageMobx.setDrawTool(DRAW_TOOL_TYPE.PARK_POINT)
          }
        }}
        style={{
          minWidth: '111px'
        }}
      >
        <Circle
          className={`${type === 'Charge Point' && 'text-info'} 
             ${type === 'Park Point' && 'text-primary'}
             ${type === 'Route Point' && 'text-success'}`}
          size={23}
        />
        <small className="font-weight-bold" style={{ paddingTop: '5px' }}>
          {type}
        </small>
      </Button>
      <DropdownToggle
        className="dropdown-toggle-split pl-0"
        outline
        color="flat-success"
        caret
      ></DropdownToggle>
      <DropdownMenu tag="ul">
        <DropdownItem
          className="d-flex align-items-center justify-content-center flex-column px-0"
          tag="li"
          onClick={() => {
            setType('Route Point')
            StageMobx.setDrawTool(DRAW_TOOL_TYPE.ROUTE_POINT)
          }}
        >
          <Circle className="text-success" size={23} />
          <small>Route Point</small>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-center flex-column px-0"
          tag="li"
          onClick={() => {
            setType('Charge Point')
            StageMobx.setDrawTool(DRAW_TOOL_TYPE.CHARGE_POINT)
          }}
        >
          <Circle className="text-info" size={23} />
          <small>Charge Point</small>
        </DropdownItem>
        <DropdownItem
          className="d-flex align-items-center justify-content-center flex-column px-0"
          tag="li"
          onClick={() => {
            setType('Park Point')
            StageMobx.setDrawTool(DRAW_TOOL_TYPE.PARK_POINT)
          }}
        >
          <Circle className="text-primary" size={23} />
          <small>Park Point</small>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  )
}

const Header = (props) => {
  const { handleSidebar, map } = props

  return (
    <header className="chat-header">
      <div className="d-flex align-items-center w-100 p-0">
        <div
          className="sidebar-toggle d-block d-lg-none mr-1"
          onClick={handleSidebar}
        >
          <Menu size={23} />
        </div>
        {/** Toolbar */}
        <Row className="w-100 h-100">
          <Col xl="1">
            <Button
              className="d-flex align-items-center justify-content-center flex-column m-0 h-100 rounded-0"
              color="flat-dark"
              onClick={() => {
                store.dispatch(updateMap(map.id, {
                  name: map.name,
                  active: map.active,
                  raw: toJS(StageMobx.shapes)
                }))
              }}
            >
              <Save size={23} />
              <small className="font-weight-bold" style={{ paddingTop: '5px' }}>
                Save
              </small>
            </Button>
          </Col>

          <Col xl="1">
            <Button
              className="d-flex align-items-center justify-content-center flex-column m-0 h-100 rounded-0"
              color="flat-dark"
              onClick={() => {
                StageMobx.setDrawTool(DRAW_TOOL_TYPE.INACTIVE)
              }}
            >
              <MousePointer size={23} />
              <small className="font-weight-bold" style={{ paddingTop: '5px' }}>
                Mouse
              </small>
            </Button>
          </Col>

          <Col xl="1.5">
            <PointDrawTool />
          </Col>

          <Col xl="1">
            <Button
              className="d-flex align-items-center justify-content-center flex-column m-0 h-100 rounded-0"
              color="flat-dark"
              onClick={() => {
                StageMobx.setDrawTool(DRAW_TOOL_TYPE.AREA)
              }}
            >
              <Square className="text-success" size={23} />
              <small className="font-weight-bold" style={{ paddingTop: '5px' }}>
                Area
              </small>
            </Button>
          </Col>

          <Col xl="1">
            <Button
              className="d-flex align-items-center justify-content-center flex-column m-0 h-100 rounded-0"
              color="flat-dark"
              onClick={() => {
                StageMobx.setDrawTool(DRAW_TOOL_TYPE.BLOCK)
              }}
            >
              <Square className="text-danger text-lighten-2" size={23} />
              <small className="font-weight-bold" style={{ paddingTop: '5px' }}>
                Block
              </small>
            </Button>
          </Col>

          <Col xl="1">
            <Button
              className="d-flex align-items-center justify-content-center flex-column m-0 h-100 rounded-0"
              color="flat-dark"
            >
              <CreditCard className="text-info text-lighten-2" size={23} />
              <small className="font-weight-bold" style={{ paddingTop: '5px' }}>
                Group
              </small>
            </Button>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default Header
