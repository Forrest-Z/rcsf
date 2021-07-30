// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Store & Actions
import { deleteMap } from './store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Edit2, Eye, MoreVertical, Download, Trash, CheckCircle, XCircle, Check } from 'react-feather'
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'

export const columns = [
  {
    name: 'ID',
    minWidth: '197',
    selector: 'id',
    sortable: true,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`# ${row.id}`}</Link>
  },
  {
    name: 'Name',
    minWidth: '197',
    selector: 'name',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h5 className='user-name text-truncate mb-0'>{row.name}</h5>
            <small className='text-truncate text-muted mb-0'>{row.description}</small>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Create Time',
    minWidth: '297',
    selector: 'createTime',
    sortable: true,
    cell: row => (
      <div>
        <span className='mb-0'>{row.createTime}</span>
      </div>
    )
  },
  {
    name: 'Update Time',
    minWidth: '297',
    selector: 'active',
    sortable: true,
    cell: row => (
      <div>
        <span className='mb-0'>{row.updateTime}</span>
      </div>
    )
  },
  {
    name: 'Using',
    minWidth: '47',
    selector: 'using',
    sortable: true,
    cell: row => (
      <div>
        {
          row.active ? <Check className='text-success' size={20} /> : null
        }
      </div>
    )
  },
  {
    name: 'Action',
    selector: '',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <div className='mr-1'>
          <Link id={`edit-tooltip-${row.id}`} to={{ pathname: 'map/edit', map: row }}>
            <Edit2 size={17} />
          </Link>
          <UncontrolledTooltip placement='top' target={`edit-tooltip-${row.id}`}>
            Edit Map
        </UncontrolledTooltip>
        </div>
        <div>
          <Link id={`preview-tooltip-${row.id}`} to='' >
            <Eye size={17} />
          </Link>
          <UncontrolledTooltip placement='top' target={`preview-tooltip-${row.id}`}>
            Preview Map
          </UncontrolledTooltip>
        </div>
        <div className='mx-1'>
          <UncontrolledDropdown>
            <DropdownToggle tag='span'>
              <MoreVertical size={17} className='cursor-pointer' />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Download size={14} className='mr-50' />
                <span className='align-middle'>Download</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                {
                  row.active ? (
                    <div>
                      <XCircle size={14} className='mr-50' />
                      <span className='align-middle'>Don't Use</span>
                    </div>
                  ) : (
                      <div>
                        <CheckCircle size={14} className='mr-50' />
                        <span className='align-middle'>Use</span>
                      </div>
                    )
                }
              </DropdownItem>
              <DropdownItem
                tag='a'
                href='/'
                className='w-100'
                onClick={e => {
                  e.preventDefault()
                  store.dispatch(deleteMap(row.id))
                }}
              >
                <Trash size={14} className='mr-50' />
                <span className='align-middle'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    )
  }

]