import React from 'react'
import PropTypes from 'prop-types'
import { Stage } from 'react-konva'
export class RCSCanvas extends React.Component {
  constructor() {
    this.state = {
      width: null,
      height: null,
      scale: {
        x: 1,
        y: 1
      }
    }
  }

  render() {
    return (
      <Stage>

      </Stage>
    )
  }
}


RCSCanvas.PropTypes = {
  parent: PropTypes.object,
  src: PropTypes.string
}