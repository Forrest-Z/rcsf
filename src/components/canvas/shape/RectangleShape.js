import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Group, Rect, Transformer } from 'react-konva'

export class RectangleShape extends Component {

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

RectangleShape.PropTypes = {
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