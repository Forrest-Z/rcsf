import React from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { ArrowRight } from 'react-feather'
import './css/noData.css'
export const NoData = () => {
  const colorWhite = {
    color: 'white'
  }
  const history = useHistory()
  const goMap = () => {
    history.push('/map')
  }
  return (
    <div className='pt-5'>
      <Result
        style={colorWhite}
        title="暂无地图数据,请前往添加或启用地图"
        extra={
          <Button onClick={goMap} type="info" key="console">
            前往地图配置 <ArrowRight />
          </Button>
        }
        status="warning"
      />
    </div>
  )
}
