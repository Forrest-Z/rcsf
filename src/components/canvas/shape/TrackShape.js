import React, { Component } from 'react'
import { Line, Group } from 'react-konva'
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
      <Group>
        <Line
          fill={this.state.fill}
          stroke={this.state.stroke}
          strokeWidth={this.props.width}
          points={[0, 0, 10, 10, 100, 100]}
        />
        <Line
          fill={this.state.fill}
          stroke={'#7ac943'}
          strokeWidth={this.props.width / 5}
          points={[0, 0, 10, 10, 100, 100]}
          dash={[4, 8]}
        />
      </Group>
    )
  }
}