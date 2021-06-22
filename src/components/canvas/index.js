import React, { createRef } from 'react'
import { Stage } from 'react-konva'
import MapLayer from './layer/MapLayer'
import ShapeLayer from './layer/ShapeLayer'


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
    const scaleBy = 1.06

    const oldScale = this.state.scale.x
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

    this.setState({
      scale: {
        x: newScale,
        y: newScale
      }
    })

    // const circles = this.stageRef.current.find('Circle')
    // circles.scale({
    //   x: 1 / newScale,
    //   y: 1 / newScale
    // })

    // const wedges = this.stageRef.current.find('Path')
    // wedges.scale({
    //   x: 1 / newScale,
    //   y: 1 / newScale
    // })

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
      <Stage
        x={width / 2}
        y={height / 2}
        width={width}
        height={height}
        draggable={true}
        onWheel={this.onWheel}
        ref={this.stageRef}
        scale={this.state.scale}
        style={{
          backgroundColor: '#000'
        }}
      >
        <MapLayer />
        <ShapeLayer />
      </Stage>
    )
  }
}