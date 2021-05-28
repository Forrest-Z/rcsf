import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Circle, Group, Arrow } from 'react-konva'
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'
export class PointShape extends Component {
  static propsTypes = {
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

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected
    })
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
        <Circle
          x={this.props.x}
          y={this.props.y}
          radius={16}
          scale={this.props.scale}
          fill={this.state.fill}
          stroke={this.state.stroke}
          strokeWidth={2}
          strokeScaleEnabled={false}
          dash={!this.state.selected && [10, 2]}
        />
        {
          this.props.rotation && (
            <Arrow
              x={this.props.x}
              y={this.props.y}
              points={[0, -8, 0, 6]}
              fill={this.state.stroke}
              stroke={this.state.stroke}
              strokeWidth={5}
              strokeScaleEnabled={false}
              pointerLength={4}
              pointerWidth={6}
            />
          )
        }
      </Group>
    )
  }
}