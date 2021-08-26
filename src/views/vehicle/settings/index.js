import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// ** Third Party Components
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Alert
} from 'reactstrap'
import { Command, HardDrive, Battery, Volume2, Sun } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import '@styles/base/pages/app-ecommerce-details.scss'

// ** Custom Components
import General from './General'
import Hardware from './Hardware'
import BreadCrumbs from '@components/breadcrumbs'
import Sounds from './Sounds'
import Lights from './Lights'

const Settings = (props) => {
  const [vehicle, setVehicle] = useState()
  const [activeTab, setActiveTab] = useState('1')
  
  // ** Function to toggle tabs
  const toggle = (tab) => setActiveTab(tab)

  useEffect(() => {
    if (props.location.vehicle) {
      localStorage.setItem('vehicle', JSON.stringify(props.location.vehicle))
      setVehicle(props.location.vehicle)
    } else {
      setVehicle(JSON.parse(localStorage.getItem('vehicle')))
    }
  }, [])

  return (
    <Row className="app-ecommerce-details">
      <Col>
        <BreadCrumbs
          breadCrumbTitle="Vehicle Settings"
          breadCrumbParent="Vehicle"
          breadCrumbActive="Settings"
        />
        <Card>
          <CardBody className="pt-2 nav-vertical">
            <Nav tabs className="nav-left">
              <NavItem>
                <NavLink active={activeTab === '1'} onClick={() => toggle('1')}>
                  <Command size={16} />
                  <span className="align-middle d-none d-sm-block">
                    General
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '2'} onClick={() => toggle('2')}>
                  <HardDrive size={16} />
                  <span className="align-middle d-none d-sm-block">
                    Hardware
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '4'} onClick={() => toggle('4')}>
                  <Volume2 size={16} />
                  <span className="align-middle d-none d-sm-block">
                    Sounds
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={activeTab === '5'} onClick={() => toggle('5')}>
                  <Sun size={16} />
                  <span className="align-middle d-none d-sm-block">
                    Lights
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <General vehicle={vehicle} />
              </TabPane>
              <TabPane tabId="2">
                <Hardware />
              </TabPane>
              <TabPane tabId="4">
                <Sounds />
              </TabPane>
              <TabPane tabId="5">
                <Lights />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Settings
