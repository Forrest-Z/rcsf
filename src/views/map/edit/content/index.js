// ** React Imports
import { useState, useEffect, useRef, useContext } from 'react'
import ReactDOM from 'react-dom'


// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { useDispatch } from 'react-redux'

// ** Third Party Components
import classnames from 'classnames'
import { useResizeDetector } from 'react-resize-detector'

// ** Custom Components
import { RCSCanvas } from '@src/components/canvas'
import Header from './Header'
import Footer from './Footer'

// ** Mobx
import StageMobx, { ShapeMobx } from '../../../../utility/mobx/StageMobx'

const RCSCanvasContainer = () => {
  const { width, height, ref } = useResizeDetector()
  return (
    <div className='h-100' ref={ref}>
      {
        width !== undefined && (
          <RCSCanvas width={width} height={height} mode='edit' />
        )
      }
    </div>
  )
}

const Content = props => {
  // ** Props & Store
  const { handleUser, handleUserSidebarRight, handleSidebar, store, userSidebarLeft, map } = props

  useEffect(() => {
    StageMobx.setShapes(map.raw.map(item => new ShapeMobx(item)))
  }, [])

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
          <Header handleSidebar={handleSidebar} map={map} />
        </div>
        <RCSCanvasContainer />
        <Footer />
      </div>
    </div>
  )
}

export default Content