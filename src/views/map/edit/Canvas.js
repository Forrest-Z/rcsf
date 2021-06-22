// ** React Imports
import { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { IoArrowRedoOutline, IoArrowUndoOutline } from 'react-icons/io5'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { useDispatch } from 'react-redux'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { MessageSquare, Menu, PhoneCall, Video, Search, MoreVertical, XSquare, Image, Square, Circle, Save, MousePointer } from 'react-feather'
import {
  UncontrolledDropdown,
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

const RCSCanvasContainer = ({ map }) => {
  console.log(map)
  const { width, height, ref } = useResizeDetector()
  return (
    <div className='h-100' ref={ref}>
      <RCSCanvas width={width} height={height} map={map} />
    </div>
  )

}

const Canvas = props => {
  // ** Props & Store
  const { handleUser, handleUserSidebarRight, handleSidebar, store, userSidebarLeft, map } = props

  return (
    <div className='chat-app-window'>
      {/* <div className={classnames('start-chat-area')}>
        <div className='start-chat-icon mb-1'>
          <Map />
        </div>
        <h4 className='sidebar-toggle start-chat-text'>
          Start Edit Map
        </h4>
      </div> */}
      <div className={classnames('active-chat')}>
        <div className='chat-navbar'>
          <header className='chat-header'>
            <div className='d-flex align-items-center'>
              <div className='sidebar-toggle d-block d-lg-none mr-1' onClick={handleSidebar}>
                <Menu size={21} />
              </div>
              <Button.Ripple className='btn-icon mr-3' color='flat-dark'>
                <Save size={19} className='cursor-pointer d-sm-block d-none  ' />
              </Button.Ripple>
              <Button.Ripple className='btn-icon' color='flat-dark' >
                <MousePointer size={19} className='cursor-pointer d-sm-block d-none' />
              </Button.Ripple>
              <Button.Ripple className='btn-icon' color='flat-dark'>
                <IoArrowUndoOutline size={20} className='cursor-pointer d-sm-block d-none' />
              </Button.Ripple>
              <Button.Ripple className='btn-icon mr-3' color='flat-dark'>
                <IoArrowRedoOutline size={20} className='cursor-pointer d-sm-block d-none' />
              </Button.Ripple>

              <Button.Ripple className='btn-icon' color='flat-dark'>
                <Circle size={19} className='cursor-pointer d-sm-block d-none' />
              </Button.Ripple>
              <Button.Ripple className='btn-icon' color='flat-dark'>
                <Square size={19} className='cursor-pointer d-sm-block d-none' />
              </Button.Ripple>
              <Button.Ripple className='btn-icon' color='flat-dark'>
                <XSquare size={19} className='cursor-pointer d-sm-block d-none' />
              </Button.Ripple>

            </div>
            <div className='d-flex align-items-center'>
              <UncontrolledDropdown>
                <DropdownToggle className='btn-icon' color='transparent' size='sm'>
                  <MoreVertical size='18' />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href='/' >
                    View Contact
                    </DropdownItem>
                  <DropdownItem href='/' >
                    Mute Notifications
                    </DropdownItem>
                  <DropdownItem href='/' >
                    Block Contact
                    </DropdownItem>
                  <DropdownItem href='/' >
                    Clear Chat
                    </DropdownItem>
                  <DropdownItem href='/' >
                    Report
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </header>
        </div>
        <RCSCanvasContainer map={map} />
      </div>
    </div>
  )
}

export default Canvas