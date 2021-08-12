import { useEffect } from 'react'

// ** Thrid Components
import { Card, CardText } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { ChevronDown } from 'react-feather'

// ** Custom Components
import { columns } from './columns'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from './store/actions'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'


const NoDataComponent = () => {
  return (
    <Card className='w-100 h-100 m-0 rounded-0 d-flex align-items-center py-2'>
      <CardText className='text-light'>There are no records to display</CardText>
    </Card>
  )
}

const VehicleList = ({ data }) => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector((state) => state.vehicle)

  const dataToRender = () => {
    if (store.data.length > 0) {
      return store.data
    } else {
      return []
    }
  }

  useEffect(() => {
    dispatch(getVehicle())
  }, [dispatch])

  return (
    <div className='app-user-list'>
      <DataTable
        noHeader
        responsive
        sortIcon={<ChevronDown />}
        defaultSortField="id"
        className="react-dataTable"
        data={dataToRender()}
        columns={columns}
        noDataComponent={<NoDataComponent />}
      />
    </div>
  )
}

export default VehicleList
