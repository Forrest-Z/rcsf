
// ** React Imports
import { useState } from 'react'

// ** Third Party Components
import classnames from 'classnames'
import { X, Search, CheckSquare, Bell, User, Trash, Map } from 'react-feather'
import { CardText, InputGroup, InputGroupAddon, Input, InputGroupText, Badge, CustomInput, Button } from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Custom Components
import Avatar from '@components/avatar'

const Sidebar = props => {
  // ** Props & Store
  const {map, store, sidebar, handleSidebar, mapSidebarLeft, handleMapSidebarLeft } = props
  const [query, setQuery] = useState('')

  const renderElements = () => {
  }

  const renderProperties = () => {

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
            <div className='header-profile-sidebar'>
              <Avatar className='box-shadow-1 avatar-border' content={<Map />} status={status} size='xl' />
              <h4 className='chat-user-name'>123</h4>
              <span className='user-post'>345</span>
            </div>
          </header>
          <PerfectScrollbar className='profile-sidebar-area' options={{ wheelPropagation: false }}>
            <h6 className='section-label mb-1'>Name</h6>
            <div className='about-user'>
              <Input
                rows='1'
                defaultValue={map && map.name}
                type='textarea'
                // onChange={e => setAbout(e.target.value)}
              />
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
                <Avatar content={<Map size={15} />} />
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
            <h4 className='chat-list-title h-50'>Elements</h4>
            <ul className='chat-users-list chat-list media-list'>{renderElements()}</ul>
            <h4 className='chat-list-title h-50'>Properties</h4>
            <ul className='chat-users-list contact-list media-list'>{renderProperties()}</ul>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  )
}

export default Sidebar