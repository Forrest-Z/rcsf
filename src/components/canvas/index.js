import React, { createRef } from 'react'
import { Stage } from 'react-konva'
import { Map } from './layer'

export class RCSCanvas extends React.Component {
  constructor(props) {
    super(props)
    this.stageRef = createRef()
    this.state = {
      width: 0,
      height: 0,
      scale: {
        x: 1,
        y: 1
      }
    }

    this.onWheel = this.onWheel.bind(this)
  }

  onWheel(e) {
    e.evt.preventDefault()
    const scaleBy = 1.04

    const oldScale = this.state.scale.x
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

    this.setState({
      scale: {
        x: newScale,
        y: newScale
      }
    })

    const circles = this.stageRef.current.find('Circle')
    circles.scale({
      x: 1 / newScale,
      y: 1 / newScale
    })

    const wedges = this.stageRef.current.find('Path')
    wedges.scale({
      x: 1 / newScale,
      y: 1 / newScale
    })

    // const arrows = stageRef.current.find('Arrow')
    // arrows.scale({
    //   x: 1 / newScale,
    //   y: 1 / newScale
    // })

    this.stageRef.current.batchDraw()
  }

  render() {
    const { width, height } = this.props

    return (
      <div>
        <Stage
          width={width}
          height={height}
          draggable={true}
          onWheel={this.onWheel}
          ref={this.stageRef}
          scale={this.state.scale}
        >
          <Map />
        </Stage>
      </div>
    )
  }
}