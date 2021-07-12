import React, { useState, Fragment, useEffect } from 'react'

// Thrid Components
import { observer } from "mobx-react"

// ** Custom Components
import Content from './content'
import Sidebar from './sidebar'

// Mobx
import StageMobx from '@src/utility/mobx/StageMobx'

// Styles
import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const MapEdit = observer(props => {
  const [sidebar, setSidebar] = useState(false)
  const [mapSidebarLeft, setMapSidebarLeft] = useState(false)

  const handleMapSidebarLeft = () => setMapSidebarLeft(!mapSidebarLeft)
  const handleSidebar = () => setSidebar(!sidebar)

  useEffect(() => {
    if (props.location.map) {
      StageMobx.setMap(props.location.map)
    }
  }, [props.location.map])

  return (
    <Fragment>
      <Sidebar
        map={props.location.map}
        mapSidebarLeft={mapSidebarLeft}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        handleMapSidebarLeft={handleMapSidebarLeft}
      />
      <div className='content-right'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <Content
              map={props.location.map}
              handleSidebar={handleSidebar}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
})

MapEdit.propTypes = {

}

export default MapEdit