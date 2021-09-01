import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'
import { Battery, Menu, Settings } from 'react-feather'
import { Button } from 'reactstrap'

const chartOptions = {
  grid: {
    show: false,
    padding: {
      left: -15,
      right: -15,
      top: -12,
      bottom: -15
    }
  },
  // colors: ['#7D72FE'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '22%'
      },
      track: {
        background: '#303147'
      },
      dataLabels: {
        showOn: 'always',
        name: {
          show: false
        },
        value: {
          show: false
        }
      }
    }
  },
  stroke: {
    lineCap: 'round'
  }
}

export const columns = [
  {
    name: 'ID',
    minWidth: '197',
    // selector: 'id',
    sortable: true,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div
          className="pl-0 pr-50 rounded-right mr-1 bg-info py-50"
          color="info"
        >
          &ensp;
        </div>
        <Link to="/"># {row.id}</Link>
      </div>
    )
  },
  {
    name: 'Name',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <h5>{row.name}</h5>
        <small>{row.description}</small>
      </div>
    )
  },
  {
    name: 'Group',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <h5>{row.group}</h5>
      </div>
    )
  },
  {
    name: 'Battery',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <h5 className="m-0 p-0 mr-1">{row.battery || 0}%</h5>
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="0%"
            y1="0%"
            x2={`${row.battery || 0}%`}
            x3="50%"
            y2="0%"
          >
            <stop stopColor="#6dd5ed" offset="0%" />
            <stop stopColor="#6dd5ed" offset="100%" />
            <stop stopColor="#2a2c42" offset="100%" />
          </linearGradient>
        </svg>
        <Battery size={28} fill="url(#blue-gradient)" />
      </div>
    )
  },
  {
    name: 'Cpu',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div className="font-weight-bold text-body-heading mr-1">20%</div>
        <Chart
          options={chartOptions}
          colors={['red']}
          series={[20]}
          type={'radialBar'}
          height={25}
          width={25}
        />
      </div>
    )
  },
  {
    name: 'Disk',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div className="font-weight-bold text-body-heading mr-1">20%</div>
        <Chart
          options={chartOptions}
          colors={['red']}
          series={[20]}
          type={'radialBar'}
          height={25}
          width={25}
        />
      </div>
    )
  },
  {
    name: 'Memory',
    minWidth: '197',
    sortable: false,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <div className="font-weight-bold text-body-heading mr-1">20%</div>
        <Chart
          options={chartOptions}
          colors={['red']}
          series={[20]}
          type={'radialBar'}
          height={25}
          width={25}
        />
      </div>
    )
  },
  {
    name: 'Action',
    minWidth: '257px',
    sortable: true,
    cell: (row) => (
      <div className="d-flex align-items-center">
        <Button.Ripple
          tag={Link}
          to="/vehicle/detail"
          className="btn-wishlist remove-wishlist mr-1 d-flex"
          size="sm"
          color="primary"
        >
          <Menu className="mr-25" size={14} />&nbsp;
          <span>Detail</span>
        </Button.Ripple>
        <Button
          tag={Link}
          to={{ pathname: '/vehicle/settings', vehicle: row }}
          className="btn-cart move-cart mr-1 d-flex"
          size="sm"
          color="primary"
        >
          <Settings className="mr-25" size={14} />
          <span >Setting</span>
        </Button>
      </div>
    )
  }
]
