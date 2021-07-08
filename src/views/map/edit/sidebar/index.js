
// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { X, Search, CheckSquare, Bell, User, Trash, Map } from 'react-feather'
import { Label, Row, Col, InputGroup, InputGroupAddon, Input, InputGroupText, Badge, CustomInput, Button } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Tree, { TreeNode } from 'rc-tree'
import Select, { components } from 'react-select'
import { PointProperties } from './Properties'
import { observer } from "mobx-react"

// ** Custom Components
import Avatar from '@components/avatar'
import { DRAW_TOOL_TYPE } from '@src/components/canvas/constants'

// ** Styles
import 'rc-tree/assets/index.css'
import '@styles/react/libs/react-select/_react-select.scss'

// Mobx
import StageMobx from '../../../../utility/mobx/StageMobx'

const treeData = [
  {
    key: '0',
    title: 'Points',
    children: [
      {
        key: '0-0',
        title: 'Point-01'
      },
      {
        key: '0-1',
        title: 'Point-02'
      },
      {
        key: '0-2',
        title: 'Point-03'
      }
    ]
  },
  {
    key: '1',
    title: 'Areas',
    children: [
      {
        key: '1-0',
        title: 'Area-01'
      },
      {
        key: '1-1',
        title: 'Area-02'
      },
      {
        key: '1-2',
        title: 'Area-03'
      }
    ]
  },
  {
    key: '2',
    title: 'Blocks',
    children: [
      {
        key: '2-0',
        title: 'Block-01'
      },
      {
        key: '2-1',
        title: 'Block-02'
      },
      {
        key: '2-2',
        title: 'Block-03'
      },
      {
        key: '2-3',
        title: 'Block-03'
      },
      {
        key: '2-4',
        title: 'Block-03'
      }
    ]
  }
]

const Sidebar = observer(props => {
  // ** Props & Store
  const { map, store, sidebar, handleSidebar, mapSidebarLeft, handleMapSidebarLeft } = props
  const [query, setQuery] = useState('')

  const handleSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
    // this.selKey = info.node.props.eventKey;
  }

  const renderElements = () => {
    return (
      <div className='pl-2 pt-1 h-100'>
        <Tree
          // showLine
          // checkable={true}
          defaultExpandAll
          onSelect={handleSelect}
          treeData={treeData}
        >
        </Tree>
      </div>

    )
  }

  const renderProperties = (item) => {
    switch (StageMobx.selection.type) {
      case DRAW_TOOL_TYPE.ROUTE_POINT:
        return (
          <PointProperties />
        )
    }
  }

  // ** Handles Filter
  const handleFilter = e => {
  }

  return (
    <div className='sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('chat-profile-sidebar', {
            show: mapSidebarLeft
          })}
        >
          <header className='chat-profile-header'>
            <div className='close-icon' onClick={handleMapSidebarLeft}>
              <X size={14} />
            </div>
            <div className='header-profile-sidebar rounded-circle bg-dark bg-darken-2 p-1'>
              <Map className='text-light ' size={35} />
            </div>
          </header>
          <PerfectScrollbar className='profile-sidebar-area justify-content-center align-items-center' options={{ wheelPropagation: false }}>
            <div>
              <h6 className='section-label mb-1'>Name</h6>
              <div>
                <Input
                  rows='1'
                  defaultValue={map && map.name}
                  defaultValue={map && map.name}
                // onChange={e => setAbout(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-3'>
              <h6 className='section-label mb-1'>Description</h6>
              <div>
                <Input
                  rows='3'
                  defaultValue={map && map.name}
                  type='textarea'
                  defaultValue={map && map.name}
                // onChange={e => setAbout(e.target.value)}
                />
              </div>
            </div>
            <div className='mt-3'>
              <Row>
                <Col xl='6'>
                  <h6 className='section-label mb-1'>Height</h6>
                </Col>
                <Col xl='6'>
                  <span>{map && map.config.height}</span>
                </Col>
              </Row>
            </div>
            <div className='mt-3'>
              <Row>
                <Col xl='6'>
                  <h6 className='section-label mb-1'>Width</h6>
                </Col>
                <Col xl='6'>
                  <span>{map && map.config.width}</span>
                </Col>
              </Row>
            </div>
            <div className='pt-5 mt-5 text-center'>
              <Button color='primary'>
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
          <div className='sidebar-close-icon' onClick={handleSidebar}>
            <X size={14} />
          </div>
          <div className='chat-fixed-search'>
            <div className='d-flex align-items-center w-100'>
              <div className='sidebar-profile-toggle' onClick={handleMapSidebarLeft}>
                <div className='header-profile-sidebar rounded-circle bg-dark bg-darken-2 p-1 cursor-pointer'>
                  <Map className='text-light ' size={23} />
                </div>
              </div>
              <InputGroup className='input-group-merge ml-1 w-100'>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText className='round'>
                    <Search className='text-muted' size={14} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  value={query}
                  className='round'
                  placeholder='Search element'
                  onChange={handleFilter}
                />
              </InputGroup>
            </div>
          </div>
          <PerfectScrollbar className='chat-user-list-wrapper list-group' options={{ wheelPropagation: false }}>
            <div className='h-50'>
              <PerfectScrollbar className='chat-user-list-wrapper list-group h-100' options={{ wheelPropagation: false }}>
                <h4 className='m-1 text-primary'>Elements</h4>
                <div className='chat-users-list chat-list media-list'>{renderElements()}</div>
              </PerfectScrollbar>
            </div>
            <hr className='m-0' />
            <div className='h-50'>
              <PerfectScrollbar className='chat-user-list-wrapper list-group h-100' options={{ wheelPropagation: false }}>
                <h4 className='m-1 text-primary'>Properties</h4>
                <div className='chat-users-list chat-list media-list'>{renderProperties()}</div>
              </PerfectScrollbar>
            </div>
          </PerfectScrollbar>

        </div>
      </div>
    </div>
  )
})

export default Sidebar