import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { PieChart, Maximize, Minimize, Move } from 'react-feather'
import Chart from 'react-apexcharts'

import '@styles/react/libs/charts/apex-charts.scss'
export class VehicleState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
      options: {
        plotOptions: {
          radialBar: {
            size: 150,
            offsetY: -20,
            startAngle: -150,
            endAngle: 150,
            hollow: {
              size: '65%'
            },
            track: {
              background: '#f1f1f1',
              strokeWidth: '100%'
            },
            dataLabels: {
              name: {
                offsetY: -5,
                fontFamily: 'Montserrat',
                fontSize: '1rem'
              },
              value: {
                offsetY: 15,
                fontFamily: 'Montserrat',
                fontSize: '1.714rem',
                formatter: (val) => {
                  return (val / 100).toFixed(1).toString().concat(' m/s')
                }
              }
            }
          }
        },
        colors: [this.props && this.props.danger],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: [this.props && this.props.primary],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          dashArray: 8
        },
        labels: ['车辆速度']
      },
      series: [83]
    }
  }

  render() {
    return (
      <Card className='h-100'>
        <CardHeader
          onMouseEnter={(e) => {
            this.setState({
              toggle: false
            })
          }}
          onMouseLeave={(e) => {
            this.setState({
              toggle: true
            })
          }}
        >
          <div className="d-flex align-items-center">
            <PieChart className="mr-2" size={20} />
            <CardTitle tag='h4'>
              Controller
            </CardTitle>
          </div>
          <div
            className='ml-auto'
            style={{ visibility: this.state.toggle ? 'hidden' : 'visible' }}
          >
            <Button.Ripple size='sm' className='btn-icon drag-handler' color='flat-primary'>
              <Move className='cursor-move' size={16} />
            </Button.Ripple>
            <Button.Ripple size='sm' className='btn-icon' color='flat-primary'>
              <Maximize size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody className='p-0 d-flex'>
          <Chart options={this.state.options} series={[0.5 * 100]} height={280} type='radialBar' id='support-tracker-card' />
          
        </CardBody>
      </Card>
    )
  }
}
