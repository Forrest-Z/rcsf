import React from 'react'
import { useHistory } from 'react-router'
import { ArrowRight } from 'react-feather'
import noComponent from '../../../assets/images/noData.png'
import { Button } from 'reactstrap'
export const NoData = () => {
  const history = useHistory()
  const goMap = () => {
    history.push('/map')
  }
  return (
    <div className="h-100 p-1">
      <img
        style={{ width: '100%', height: '80%', padding: '10px' }}
        src={noComponent}
        alt=""
      />
      <Button
        color="primary"
        onClick={goMap}
        style={{ position: 'fixed', right: '6%', bottom: '30px' }}
      >
        前往地图配置页
      </Button>
    </div>
  )
}
