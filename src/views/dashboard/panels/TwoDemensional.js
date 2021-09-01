// ** React Imports
import React, { Component, createRef, useRef, useEffect, useState } from 'react'

// ** Thrid Components
import { Card, CardHeader, CardBody, CardTitle, Button } from 'reactstrap'
import { List, Maximize, Minimize, Move, X } from 'react-feather'
import { useResizeDetector } from 'react-resize-detector'
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components
import { RCSCanvas } from '@src/components/canvas'
import StageMobx from '../../../utility/mobx/StageMobx'
import { NoData } from '.'

const RCSCanvasContainer = () => {
  const { width, height, ref } = useResizeDetector()
  const store = useSelector((state) => state.maps)
  const [status, setStatus] = useState(false)
  useEffect(() => {
    if (store.data.length > 0) {
      setStatus(false)
    } else {
      setStatus(true)
    }
  }, [])
  return (
    <div className="h-100" ref={ref}>
      {status ? (
        <NoData className="h-100" />
      ) : (
        <RCSCanvas width={width} height={height} />
      )}
    </div>
  )
}

export class TwoDemensional extends Component {
  constructor(props) {
    super(props)

    this.canvasNode = createRef()
    this.state = {
      fullScreen: false,
      toggle: true
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
            <List className="mr-2" size={20} />
            <CardTitle tag="h4">Two Demensional</CardTitle>
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
            {this.state.fullScreen ? (
              <Button.Ripple
                size="sm"
                className="btn-icon"
                color="flat-primary"
                onClick={() => {
                  this.props.onFullScreen(
                    'two-demensional',
                    this.state.fullScreen
                  )
                  this.setState({
                    fullScreen: false
                  })
                }}
              >
                <Minimize size={16} />
              </Button.Ripple>
            ) : (
              <Button.Ripple
                size="sm"
                className="btn-icon"
                color="flat-primary"
                onClick={() => {
                  this.props.onFullScreen(
                    'two-demensional',
                    this.state.fullScreen
                  )
                  this.setState({
                    fullScreen: true
                  })
                }}
              >
                <Maximize size={16} />
              </Button.Ripple>
            )}
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
        <CardBody className="p-0 h-100">
          <RCSCanvasContainer />
        </CardBody>
      </Card>
    )
  }
}
