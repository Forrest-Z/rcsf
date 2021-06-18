import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'
import { store } from '@store/storeConfig/store'

// ** Custom Components
import Avatar from '@components/avatar'

// TODO: add content
const SuccessToast = ({ data }) => {
  return (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Check size={12} />} />
          <h6 className='toast-title'>Form Submitted!</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <ul className='list-unstyled mb-0'>
        </ul>
      </div>
    </Fragment>
  )
}

const Notification = (props) => {
  const isOpen = useSelector(state => state.notification.isOpen)
  const message = useSelector(state => state.notification.message)

  return (
    <>
      {
        isOpen && (
          toast.success(<SuccessToast data={message} />, { hideProgressBar: true, onClose: () => { store.dispatch({ type: 'HIDE' }) } })
        )
      }
    </>
  )
}

export default Notification