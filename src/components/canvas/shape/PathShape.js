import React, { Component } from 'react'
import { Line } from 'react-konva'
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'

export class PathShape extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fill: SHAPE_STYLES_FILL.INACTIVE,
      stroke: SHAPE_STYLES_STROKE.INACTIVE,
      selected: false
    }
  }
  render() {
    return (
      <Line 
        fill='rgb(122, 203, 67)'
        stroke='rgb(122, 203, 67, 0.4)'
      />
    )
  }
}