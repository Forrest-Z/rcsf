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
import { useResizeDetector } from 'react-resize-detector'

// ** Custom Components
import { RCSCanvas } from '@src/components/canvas'
import Header from './Header'

// ** Mobx
import CanvasMobx from '@src/utility/mobx/CanvasMobx'
import { Footer } from './Footer'

const RCSCanvasContainer = () => {
  const { width, height, ref } = useResizeDetector()
  return (
    <div className='h-100' ref={ref}>
      <RCSCanvas width={width} height={height} />
    </div>
  )
}

const Content = props => {
  // ** Props & Store
  const { handleUser, handleUserSidebarRight, handleSidebar, store, userSidebarLeft, map } = props

  return (
    <div className='chat-app-window'>
      {/* <div className={classnames('start-chat-area')}>
        <div className='start-chat-icon mb-1'>
          <Map size={23} />
        </div>
        <h4 className='sidebar-toggle start-chat-text'>
          Start Edit Map
        </h4>
      </div> */}
      <div className={classnames('active-chat d-flex flex-column')}>
        <div className='chat-navbar'>
          <Header handleSidebar={handleSidebar} />
        </div>
        <RCSCanvasContainer />
        <Footer />
      </div>
    </div>
  )
}

export default Content