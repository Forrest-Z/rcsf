// ** React Imports
import { useState, useEffect } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import {
  X,
  Search,
  CheckSquare,
  Bell,
  User,
  Trash,
  Map,
  Circle,
  Square
} from 'react-feather'
import {
  Label,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Badge,
  CustomInput,
  Button
} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Select, { components } from 'react-select'
import { observer } from 'mobx-react'

// ** Custom Components
import { AreaProperties, PointProperties } from './Properties'
import Avatar from '@components/avatar'
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'
import Elements from './Elements'

// ** Styles
import 'rc-tree/assets/index.css'
import '@styles/react/libs/react-select/_react-select.scss'

import { updateMap } from '../../store/actions'
import { store } from '@store/storeConfig/store'

// Mobx
import StageMobx from '../../../../utility/mobx/StageMobx'

const treeData = [
  {
    key: '0',
    title: 'Points',
    children: []
  },
  {
    key: '1',
    title: 'Areas',
    children: []
  },
  {
    key: '2',
    title: 'Blocks',
    children: []
  }
]

const Sidebar = observer((props) => {
  // ** Props & Store
  const { map, sidebar, handleSidebar, mapSidebarLeft, handleMapSidebarLeft } =
    props
  const [query, setQuery] = useState('')

  const renderProperties = (item) => {
    switch (StageMobx.selection.type) {
      case DRAW_TOOL_TYPE.ROUTE_POINT:
      case DRAW_TOOL_TYPE.CHARGE_POINT:
      case DRAW_TOOL_TYPE.PARK_POINT:
        return <PointProperties />
      case DRAW_TOOL_TYPE.AREA:
      case DRAW_TOOL_TYPE.BLOCK:
        return <AreaProperties />
    }
  }

  // ** Handles Filter
  const handleFilter = (e) => {}

  return (
    <div className="sidebar-left">
      <div className="sidebar">
        <div
          className={classnames('chat-profile-sidebar', {
            show: mapSidebarLeft
          })}
        >
          <header className="chat-profile-header">
            <div className="close-icon" onClick={handleMapSidebarLeft}>
              <X size={14} />
            </div>
            <div className="header-profile-sidebar rounded-circle bg-dark bg-darken-2 p-1">
              <Map className="text-light " size={35} />
            </div>
          </header>
          <PerfectScrollbar
            className="profile-sidebar-area justify-content-center align-items-center"
            options={{ wheelPropagation: false }}
          >
            <div>
              <h6 className="section-label mb-1">Name</h6>
              <div>
                <Input
                  rows="1"
                  defaultValue={map && map.name}
                  defaultValue={map && map.name}
                  onChange={(e) => (map.name = e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3">
              <h6 className="section-label mb-1">Description</h6>
              <div>
                <Input
                  rows="3"
                  defaultValue={map && map.description}
                  type="textarea"
                  defaultValue={map && map.description}
                  onChange={(e) => (map.description = e.target.value)}
                />
              </div>
            </div>
            <div className="mt-3">
              <Row>
                <Col xl="6">
                  <h6 className="section-label mb-1">Height</h6>
                </Col>
                <Col xl="6">
                  <span>{map && map.config.height} px</span>
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row>
                <Col xl="6">
                  <h6 className="section-label mb-1">Width</h6>
                </Col>
                <Col xl="6">
                  <span>{map && map.config.width} px</span>
                </Col>
              </Row>
            </div>
            <div className="pt-5 mt-5 text-center">
              <Button
                color="primary"
                onClick={() => {
                  store.dispatch(
                    updateMap(map.id, {
                      name: map.name,
                      description: map.description,
                      active: map.active
                    })
                  )
                }}
              >
                Save
              </Button>
            </div>
          </PerfectScrollbar>
        </div>
        <div
          className={classnames('sidebar-content', {
            show: sidebar === true
          })}
        >
          <div className="sidebar-close-icon" onClick={handleSidebar}>
            <X size={14} />
          </div>
          <div className="chat-fixed-search">
            <div className="d-flex align-items-center w-100">
              <div
                className="sidebar-profile-toggle"
                onClick={handleMapSidebarLeft}
              >
                <div className="header-profile-sidebar rounded-circle bg-dark bg-darken-2 p-1 cursor-pointer">
                  <Map className="text-light " size={23} />
                </div>
              </div>
              <InputGroup className="input-group-merge ml-1 w-100">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="round">
                    <Search className="text-muted" size={14} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  value={query}
                  className="round"
                  placeholder="Search element"
                  onChange={handleFilter}
                />
              </InputGroup>
            </div>
          </div>
          <PerfectScrollbar
            className="chat-user-list-wrapper list-group"
            options={{ wheelPropagation: false }}
          >
            <div className="h-50">
              <PerfectScrollbar
                className="chat-user-list-wrapper list-group h-100"
                options={{ wheelPropagation: false }}
              >
                <h4 className="m-1 text-primary">Elements</h4>
                <div className="chat-users-list chat-list media-list">
                  <Elements />
                </div>
              </PerfectScrollbar>
            </div>
            <hr className="m-0" />
            <div className="h-50">
              <PerfectScrollbar
                className="chat-user-list-wrapper list-group h-100"
                options={{ wheelPropagation: false }}
              >
                <h4 className="m-1 text-primary">Properties</h4>
                <div className="chat-users-list chat-list media-list">
                  {renderProperties()}
                </div>
              </PerfectScrollbar>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  )
})

export default Sidebar
