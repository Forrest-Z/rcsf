import React from 'react'
import { Layer } from 'react-konva'
import { PointShape, RectangleShape, TrackShape } from '../shape'

class ShapeLayer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layer>
      </Layer>
    )
  }
}

export default ShapeLayer