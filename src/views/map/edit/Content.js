// ** React Imports
import { useState, useEffect, useRef, useContext } from 'react'
import ReactDOM from 'react-dom'


// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { useDispatch } from 'react-redux'

// ** Third Party Components
import classnames from 'classnames'
import { IoArrowRedoOutline, IoArrowUndoOutline } from 'react-icons/io5'
import { SiSocketDotIo } from 'react-icons/si'
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
  XOctagon
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
  ButtonGroup
} from 'reactstrap'
import { useResizeDetector } from 'react-resize-detector'

// ** Custom Components
import { RCSCanvas } from '@src/components/canvas'

// ** Mobx
import CanvasMobx from '@src/utility/mobx/CanvasMobx'


const Content = props => {
  // ** Props & Store
  const { handleUser, handleUserSidebarRight, handleSidebar, store, userSidebarLeft, map } = props

  return (
    <div className='chat-app-window'>
      <div className={classnames('start-chat-area')}>
        <div className='start-chat-icon mb-1'>
          <Map size={23} />
        </div>
        <h4 className='sidebar-toggle start-chat-text'>
          Start Edit Map
        </h4>
      </div>
      <div className={classnames('active-chat')}>
        <div className='chat-navbar'>
          <header className='chat-header'>
            <div className='d-flex align-items-center'>
              <div className='sidebar-toggle d-block d-lg-none mr-1' onClick={handleSidebar}>
                <Menu size={23} />
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Content