import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Circle, Group } from 'react-konva'

export class PointShape extends Component {
  constructor() {
    this.state = {
      fill: '#FFFFFF',
      stroke: '#FFFFFF'
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate(nextProps, nextState) {
    
  }

  render() {
    return (
      <Group>
        <Circle 
          x={this.props.x}
          y={this.props.y}
          scale={this.props.scale}
          fill={this.state.fill}
          stroke={this.state.stroke}
        />
      </Group>
    )
  }
}

PointShape.PropTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  rotation: PropTypes.number,
  scale: PropTypes.object,
  visible: PropTypes.bool,
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['charge', 'route', 'parking'])
}