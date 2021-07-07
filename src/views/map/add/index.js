// ** React Imports
import React, { useEffect, useState } from 'react'

// ** Third Party Components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'

// ** Custom Components
import Upload from './Upload'
import Record from './Record'

import '@styles/base/pages/app-chat.scss'
import '@styles/base/pages/app-chat-list.scss'

const AddNewMap = () => {
  const [active, setActive] = useState('0')

  return (
    <Card className='h-100 w-100'>
      <CardBody>
        <Nav pills id='tab-header'>
          <NavItem>
            <NavLink active={active === '0'} onClick={() => setActive('0')}>
              Upload
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={active === '1'} onClick={() => setActive('1')}>
              Record
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent id='tab-content' className='h-100' activeTab={active}>
          <TabPane className='h-100' tabId='0'>
            <Upload />
          </TabPane>
          <TabPane tabId='1'>
            <Record />
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  )
}

export default AddNewMap