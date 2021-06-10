// ** React Imports
import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Row, Col, CustomInput, Label, Input } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { ChevronDown } from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import ReactPaginate from 'react-paginate'

// ** Store & Actions
import { getMap } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { columns } from './colums'


const Header = ({ toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
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
  const store = useSelector(state => state.map)

  const [pageSize, setPageSize] = useState(10)
  const [pageNo, setPageNo] = useState(1)

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
              pagination
              subHeader
              responsive
              sortIcon={<ChevronDown />}
              defaultSortField='id'
              paginationDefaultPage={pageNo}
              paginationComponent={Pagination}
              columns={columns}
              paginationServer
              data={dataToRender()}
              className='react-dataTable'
              subHeaderComponent={
                <Header 
                  handlePerPage={handlePerPage}
                  rowsPerPage={pageSize}
                  handleFilter={handleFilter}
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