// ** React Imports
import React, { useState, useEffect, Fragment, forwardRef } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Row, Col, CustomInput, Label, Input } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { ChevronDown } from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import ReactPaginate from 'react-paginate'

// ** Store & Actions
import { getMap, multiDelete } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@store/storeConfig/store'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { columns } from './colums'


// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const Header = ({ selected, onDeleted, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
            {selected.length > 0 && (
              <Button
                className='ml-1'
                color='danger'
                onClick={() => {
                  store.dispatch(multiDelete(selected))
                  onDeleted()
                }}
              >Delete Selected</Button>
            )}
          </div>
        </Col>
        <Col xl='6' className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'>
          <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
            <Label className='mb-0' for='search-invoice'>
              Search:
            </Label>
            <Input
              id='search-invoice'
              className='ml-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleFilter(e.target.value)}
            />
          </div>
          <Button.Ripple tag={Link} to='/map/add' color='primary'>
            Add New Map
          </Button.Ripple>

        </Col>
      </Row>
    </div>
  )
}

const MapView = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.maps)

  const [pageSize, setPageSize] = useState(10)
  const [pageNo, setPageNo] = useState(1)
  const [selected, setSelected] = useState([])
  const [clearSelected, setClearSelected] = useState(false)

  useEffect(() => {
    dispatch(
      getMap({
        pageNo,
        pageSize
      })
    )
  }, [dispatch])

  const dataToRender = () => {

    if (store.data.length > 0) {
      return store.data
    } else {
      return []
    }
  }

  const handlePagination = page => {
    dispatch(
      getMap({
        pageNo: page.selected + 1,
        pageSize
      })
    )
    setPageNo(page.selected + 1)
  }

  const handlePerPage = e => {
    dispatch(
      getMap({
        pageNo,
        pageSize: parseInt(e.target.value)
      })
    )
    setPageSize(parseInt(e.target.value))
  }

  const handleFilter = val => {
    dispatch(
      getMap({
        pageSize,
        pageNo
      })
    )
  }

  const handleSelectedRowsChange = (e) => {
    if (e.selectedCount > 0) {
      setSelected(e.selectedRows.map(row => row.id))
    } else {
      setSelected([])
    }
  }

  const handleDeleted = () => {
    setSelected([])
    setClearSelected(!clearSelected)
  }

  const Pagination = () => {
    const count = Number((store.count / pageSize).toFixed(0))

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        activeClassName='active'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        forcePage={pageNo !== 0 ? pageNo - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName='page-item'
        nextLinkClassName='page-link'
        nextClassName='page-item next'
        previousClassName='page-item prev'
        previousLinkClassName='page-link'
        pageLinkClassName='page-link'
        containerClassName='pagination react-pagination justify-content-end p-1'
      />
    )
  }

  return (
    <Fragment>
      <div className='app-user-list'>
        <Card>
          <CardBody>
            <DataTable
              noHeader
              selectableRows
              pagination
              subHeader
              responsive
              sortIcon={<ChevronDown />}
              defaultSortField='id'
              paginationDefaultPage={pageNo}
              paginationComponent={Pagination}
              columns={columns}
              paginationServer
              clearSelectedRows={clearSelected}
              data={dataToRender()}
              className='react-dataTable'
              selectableRowsComponent={BootstrapCheckbox}
              onSelectedRowsChange={handleSelectedRowsChange}
              subHeaderComponent={
                <Header
                  selected={selected}
                  handlePerPage={handlePerPage}
                  rowsPerPage={pageSize}
                  handleFilter={handleFilter}
                  onDeleted={handleDeleted}
                />
              }
            />
          </CardBody>
        </Card>
      </div>

    </Fragment>

  )
}

export default MapView