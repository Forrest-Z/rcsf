import React, { useState } from 'react'
import {
  MoreVertical,
  Edit,
  Trash,
  List,
  Move,
  Maximize,
  StopCircle,
  AlignLeft,
  ChevronDown
} from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from 'reactstrap'
import { VscDebugStart } from 'react-icons/vsc'
import './table.css'
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const TableComponent = () => {
  const [toggle, setToggle] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)

  const [TableData, setTableData] = useState([
    {
      id: '001',
      jobName: '巡查B2栋L1消防栓',
      status: 2, // 0 等待着 1 正在进行 2 已完成
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00',
      trajectory:
        'https://bookmanagementdatabase.oss-cn-hangzhou.aliyuncs.com/2049996.jpg'
    },
    {
      id: '002',
      jobName: '巡查B2栋L2消防栓',
      status: 2,
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00',
      trajectory: '//bookmanageme'
    },
    {
      id: '003',
      jobName: '巡查B2栋L3消防栓',
      status: 1,
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00',
      trajectory: ''
    },
    {
      id: '004',
      jobName: '巡查B2栋L4消防栓',
      status: 0,
      describe: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      starTime: '2021/08/27 09:00:00',
      endTime: '2021/08/27 12:00:00',
      trajectory:
        'https://bookmanagementdatabase.oss-cn-hangzhou.aliyuncs.com/2049996.jpg'
    }
  ])

  const ExpandableTable = ({ data }) => {
    // 下拉显示的内容
    return (
      <div className="expandable-content p-2">
        <p>
          任务描述: <span>{data.describe}</span>
        </p>
      </div>
    )
  }

  const stopClick = (el) => {
    // 暂停
    el.status = 0
    setTableData([...new Set([...TableData, el])])
  }

  const runClick = (el) => {
    // 启动
    el.status = 1
    setTableData([...new Set([...TableData, el])])
  }

  const handlePagination = (page) => {
    // 分页
    setCurrentPage(page.selected)
  }

  const rowClick = (e) => {
    console.log(e)
  }

  const columns = [
    {
      name: 'Id',
      selector: 'id',
      sortable: false,
      width: '70px'
    },
    {
      name: 'Job Name',
      selector: 'jobName',
      sortable: false,
      width: '200px'
    },
    {
      name: 'Status',
      selector: 'status',
      sortable: false,
      // width: '150px',
      cell: (row) => {
        return row.status === 0 ? (
          <Badge pill color="light-warning" className="mr-1">
            Waiting
          </Badge>
        ) : row.status === 1 ? (
          <Badge pill color="light-success" className="mr-1">
            Runing
          </Badge>
        ) : (
          <Badge pill color="light-danger" className="mr-1">
            Finish
          </Badge>
        )
      }
    },
    {
      name: 'Describe',
      selector: 'describe',
      sortable: false,
      width: '500px'
    },
    {
      name: 'Start Time',
      selector: 'starTime',
      sortable: false,
      width: '200px'
    },
    {
      name: 'Finish Time',
      selector: 'endTime',
      sortable: false,
      width: '200px'
    },
    {
      name: 'Actions',
      allowOverflow: true,
      cell: (row) => {
        return (
          <div className="d-flex">
            <UncontrolledDropdown>
              <DropdownToggle
                className="icon-btn hide-arrow"
                style={{
                  visibility: row.status === 2 ? 'hidden' : 'visible'
                }}
                color="transparent"
                size="sm"
                caret
              >
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  // href="/" // 暂停
                  onClick={() => {
                    stopClick(row)
                  }}
                  style={{ display: row.status === 1 ? '' : 'none' }}
                >
                  <StopCircle className="mr-50" size={15} />
                  <span className="align-middle">Stop</span>
                </DropdownItem>
                <DropdownItem
                  // href="/" // 开始
                  onClick={() => {
                    runClick(row)
                  }}
                  style={{ display: row.status === 0 ? '' : 'none' }}
                >
                  <VscDebugStart className="mr-50" size={15} />
                  <span className="align-middle">Runing</span>
                </DropdownItem>
                <DropdownItem // 编辑
                  // href="/"
                  onClick={(e) => e.preventDefault()}
                  style={{ display: row.status === 0 ? '' : 'none' }}
                >
                  <Edit className="mr-50" size={15} />
                  <span className="align-middle">Edit</span>
                </DropdownItem>
                <DropdownItem
                  // href="/" // 删除
                  onClick={(e) => e.preventDefault()}
                  style={{ display: row.status === 0 ? '' : 'none' }}
                >
                  <Trash className="mr-50" size={15} />
                  <span className="align-middle">Delete</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )
      }
    }
  ]
  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={''}
      nextLabel={''}
      forcePage={currentPage}
      onPageChange={(page) => handlePagination(page)}
      pageCount={10}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName={
        'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1'
      }
    />
  )

  return (
    <div className="h-100">
      <Card className="h-100">
        <CardHeader
          onMouseEnter={(e) => {
            setToggle(false)
          }}
          onMouseLeave={(e) => {
            setToggle(true)
          }}
        >
          <div className="d-flex align-items-center">
            <List className="mr-2" size={20} />
            <CardTitle tag="h4">Task detail list</CardTitle>
          </div>
          <div
            className="ml-auto"
            style={{ visibility: toggle ? 'hidden' : 'visible' }}
          >
            <Button.Ripple
              size="sm"
              className="btn-icon drag-handler"
              color="flat-primary"
            >
              <Move className="cursor-move" size={16} />
            </Button.Ripple>
            <Button.Ripple size="sm" className="btn-icon" color="flat-primary">
              <Maximize size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody>
          <DataTable
            noHeader
            pagination
            data={TableData}
            expandableRows
            columns={columns}
            expandOnRowClicked
            className="react-dataTable"
            sortIcon={<ChevronDown size={10} />}
            paginationDefaultPage={currentPage + 1}
            expandableRowsComponent={<ExpandableTable />}
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            paginationComponent={CustomPagination} // 引入分页组件
          />

          {/* <Table responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Job Name</th>
                <th>Status</th>
                <th>Job Describe</th>
                <th>Start Time</th>
                <th>Final Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((el, index) => {
                return (
                  <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.jobName}</td>
                    <td>
                      {el.status === 0 ? (
                        <Badge pill color="light-warning" className="mr-1">
                          Waiting
                        </Badge>
                      ) : el.status === 1 ? (
                        <Badge pill color="light-success" className="mr-1">
                          Runing
                        </Badge>
                      ) : (
                        <Badge pill color="light-danger" className="mr-1">
                          Finish
                        </Badge>
                      )}
                    </td>
                    <td>{el.describe}</td>
                    <td>{el.starTime}</td>
                    <td>{el.endTime}</td>
                    <td>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="icon-btn hide-arrow"
                          // style={{
                          //   visibility: el.status === 2 ? 'hidden' : 'visible'
                          // }}
                          color="transparent"
                          size="sm"
                          caret
                        >
                          <MoreVertical size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            // href="/" // 暂停
                            onClick={() => {
                              stopClick(el)
                            }}
                            style={{ display: el.status === 1 ? '' : 'none' }}
                          >
                            <StopCircle className="mr-50" size={15} />
                            <span className="align-middle">Stop</span>
                          </DropdownItem>
                          <DropdownItem
                            // href="/" // 开始
                            onClick={(e) => e.preventDefault()}
                            style={{ display: el.status === 0 ? '' : 'none' }}
                          >
                            <VscDebugStart className="mr-50" size={15} />
                            <span className="align-middle">Runing</span>
                          </DropdownItem>
                          <DropdownItem // 编辑
                            // href="/"
                            onClick={(e) => e.preventDefault()}
                            style={{ display: el.status === 0 ? '' : 'none' }}
                          >
                            <Edit className="mr-50" size={15} />{' '}
                            <span className="align-middle">Edit</span>
                          </DropdownItem>
                          <DropdownItem // 查看详情
                            onClick={() => detailClick(el)}
                          >
                            <AlignLeft className="mr-50" size={15} />{' '}
                            <span className="align-middle">Detail</span>
                          </DropdownItem>
                          <DropdownItem
                            // href="/" // 删除
                            onClick={(e) => e.preventDefault()}
                            style={{ display: el.status === 0 ? '' : 'none' }}
                          >
                            <Trash className="mr-50" size={15} />{' '}
                            <span className="align-middle">Delete</span>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table> */}
        </CardBody>
      </Card>
    </div>
  )
}

export default TableComponent
