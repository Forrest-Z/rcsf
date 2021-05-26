import React from 'react'
import { Stage } from 'react-konva'
import { Map } from './layer'

export class RCSCanvas extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      width: 0,
      height: 0,
      scale: {
        x: 1,
        y: 1
      }
    }
  }

  render() {
    const { width, height } = this.props

    return (
      <div>
        <Stage
          width={width}
          height={height}
          draggable={true}
        >
          <Map />
        </Stage>
      </div>
    )
  }
}