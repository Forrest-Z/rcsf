import { useEffect } from 'react'

// ** Thrid Components
import DataTable from 'react-data-table-component'
import { ChevronDown } from 'react-feather'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Custom Components
import { columns } from './columns'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getVehicle } from './store/actions'

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
    <div>
      <DataTable
        noHeader
        responsive
        sortIcon={<ChevronDown />}
        defaultSortField="id"
        className="react-dataTable"
        data={dataToRender()}
        columns={columns}
      />
    </div>
  )
}

export default VehicleList
