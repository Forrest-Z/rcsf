import React from 'react'
import { Layer } from 'react-konva'
import { PointShape, RectangleShape, TrackShape } from '../shape'

export class ShapeLayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layer>
        <RectangleShape width={50} height={50} />
        <TrackShape />
      </Layer>
    )
  }
}