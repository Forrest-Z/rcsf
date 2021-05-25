import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Group, Rect, Transformer } from 'react-konva'

export class Rectangle extends Component {

  render() {
    return (
      <Group>
        <Rect
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
        />
      </Group>
    )
  }
}

Rectangle.PropTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  rotation: PropTypes.number,
  scale: PropTypes.object,
  visible: PropTypes.bool,
  selected: PropTypes.bool
}