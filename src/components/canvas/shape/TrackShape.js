import React, { Component } from 'react'
import { Line } from 'react-konva'
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'

export class TrackShape extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fill: SHAPE_STYLES_FILL.INACTIVE,
      stroke: SHAPE_STYLES_FILL.HOVERED,
      selected: false
    }
  }

  render() {
    return (
      <Line
        fill={this.state.fill}
        stroke={this.state.stroke}
        strokeWidth={4}
        points={[0, 0, 10, 10, 100, 100]}
      />
    )
  }
}