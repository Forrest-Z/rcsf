import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Group, Rect, Transformer } from 'react-konva'
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'

export class RectangleShape extends Component {
  static propsTypes = {
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

  constructor(props) {
    super(props)
    this.state = {
      fill: SHAPE_STYLES_FILL.INACTIVE,
      stroke: SHAPE_STYLES_STROKE.INACTIVE,
      selected: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleMouseOver() {
    this.setState({
      fill: SHAPE_STYLES_FILL.HOVERED
    })
  }

  handleMouseLeave() {
    this.setState({
      fill: SHAPE_STYLES_FILL.INACTIVE
    })
  }

  handleClick() {
    this.setState({
      selected: true
    })
  }

  render() {
    return (
      <Group
        draggable={true}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <Rect
          x={this.props.x}
          y={this.props.y}
          width={this.props.width}
          height={this.props.height}
          fill={this.state.fill}
          stroke={this.state.stroke}
          strokeWidth={2}
          strokeScaleEnabled={false}
          dash={!this.state.selected && [10, 2]}
        />
      </Group>
    )
  }
}