// ** React Components
import { useState, useRef, useEffect } from 'react'

// ** Thrid Components
import { Card, CardBody } from 'reactstrap'
import Chart from 'react-apexcharts'

import '@styles/react/libs/charts/apex-charts.scss'

const Performance = (props) => {
  return (
    <Card className="h-100">
      <CardBody className="p-0">
        <Chart
          options={options}
          series={[{ data: series.slice() }]}
          type={'area'}
        />
      </CardBody>
    </Card>
  )
}
