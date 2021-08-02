// ** React Imports
import { Fragment } from 'react'
// ** Thrid Components
import { Card, CardBody } from 'reactstrap'

// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

const MissionAdd = () => {
  return (
    <Fragment>
    <BreadCrumbs
    breadCrumbTitle="Add Mission"
    breadCrumbParent="Mission"
    breadCrumbActive="Add Mission"
  />
    <Card>
      <CardBody>


      </CardBody>
    </Card>
    </Fragment>

  )
}

export default MissionAdd