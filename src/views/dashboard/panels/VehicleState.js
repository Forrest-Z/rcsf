import React, { Component } from 'react'

// ** Third Party Components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Col,
  Row
} from 'reactstrap'
import {
  PieChart,
  Maximize,
  Minimize,
  Move,
  MapPin,
  Check,
  AlertCircle,
  X
} from 'react-feather'
import Chart from 'react-apexcharts'

// ** Custom Components
import Avatar from '@components/avatar'

import '@styles/react/libs/charts/apex-charts.scss'
export class VehicleState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: true,
      speedChart: {
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
        }
      },
      progress: {
        options: {
          chart: {
            sparkline: {
              enabled: true
            },
            dropShadow: {
              enabled: true,
              blur: 3,
              left: 1,
              top: 1,
              opacity: 0.1
            }
          },
          colors: ['#51e5a8'],
          plotOptions: {
            radialBar: {
              offsetY: -5,
              startAngle: -150,
              endAngle: 150,
              hollow: {
                size: '77%'
              },
              track: {
                background: '#ebe9f1',
                strokeWidth: '50%'
              },
              dataLabels: {
                name: {
                  show: false
                },
                value: {
                  color: '#5e5873',
                  fontFamily: 'Montserrat',
                  fontSize: '2.86rem',
                  fontWeight: '600'
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: [this.props.success],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round'
          },
          grid: {
            padding: {
              bottom: 60
            }
          }
        }
      }
    }
  }

  render() {
    const deleteChild = () => {
      this.props.onClick()
    }
    return (
      <Card className="h-100">
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
            <CardTitle tag="h4">State</CardTitle>
          </div>
          <div
            className="ml-auto"
            style={{ visibility: this.state.toggle ? 'hidden' : 'visible' }}
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
            <Button.Ripple
              size="sm"
              onClick={deleteChild}
              className="btn-icon"
              style={{ display: Boolean(Number(sessionStorage.getItem('showDelete'))) && !this.state.toggle ? '' : 'none' }}
              color="flat-primary"
            >
              <X size={16} />
            </Button.Ripple>
          </div>
        </CardHeader>
        <CardBody className="p-0 d-flex">
          <Row>
            <Col xl="6" md="6">
              <Chart
                options={this.state.speedChart.options}
                series={[0.5 * 100]}
                height={280}
                type="radialBar"
                id="support-tracker-card"
              />
            </Col>
            <Col xl="6" md="6">
              <Chart
                options={this.state.progress.options}
                series={[89]}
                height={280}
                type="radialBar"
              />
            </Col>
          </Row>
          {/* <div className='d-flex flex-column ml-2 mt-1'>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-warning'} content={<AlertCircle size={18} />} />
              <h6 className='mr-2'>GPS</h6>
            </div>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-success'} content={<Check size={18} />} />
              <h6 className='mr-2'>Lidar</h6>
            </div>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-success'} content={<Check size={18} />} />
              <h6 className='mr-2'>IMU</h6>
            </div>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-success'} content={<Check size={18} />} />
              <h6 className='mr-2'>Ultrasonic</h6>
            </div>
          </div>
          <div className='d-flex flex-column ml-2 mt-1'>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-secondary'} content={<X size={18} />} />
              <h6 className='mr-2'>Obstacle</h6>
            </div>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-success'} content={<Check size={18} />} />
              <h6 className='mr-2'>Sirens</h6>
            </div>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-success'} content={<Check size={18} />} />
              <h6 className='mr-2'>Lights</h6>
            </div>
            <div className='d-flex justify-content-left align-items-center mb-1'>
              <Avatar className='mr-2 rounded' color={'light-success'} content={<Check size={18} />} />
              <h6 className='mr-2'>Cameras</h6>
            </div>
          </div> */}
        </CardBody>
      </Card>
    )
  }
}
