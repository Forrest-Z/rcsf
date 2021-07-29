import { Fragment, useState } from 'react'

// ** Thrid Components
import {
  Card,
  CardBody,
  CardText,
  CardHeader,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from 'reactstrap'
import { Settings, Server, Clock } from 'react-feather'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'
import General from './General'
import Advanced from './Advanced'
import Datetime from './Datetime'

// ** Styles
import '@styles/react/apps/app-users.scss'
import '@styles/base/pages/app-ecommerce-details.scss'

const SystemView = (props) => {
  const [activeTab, setActiveTab] = useState('1')

  // ** Function to toggle tabs
  const toggle = (tab) => setActiveTab(tab)

  return (
    <Row className="app-ecommerce-details">
      <Col>
        <BreadCrumbs
          breadCrumbTitle="System"
          // breadCrumbParent="Home"
          breadCrumbActive="System"
        />
        <Card>
          <CardBody className="pt-2 nav-vertical">
            <Nav tabs className="nav-left">
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <Settings size={16} />
                  <span className="align-middle d-none d-sm-block">
                    General
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                  <Server size={16} />
                  <span className="align-middle d-none d-sm-block">
                    Advanced
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '3'} onClick={() => toggle('3')}>
                  <Clock size={16} />
                  <span className="align-middle d-none d-sm-block">
                    Datetime
                  </span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <General />
              </TabPane>
              <TabPane tabId="2">
                <Advanced />
              </TabPane>
              <TabPane tabId="3">
                <Datetime />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default SystemView
