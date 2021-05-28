import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layer, Line } from 'react-konva'

export class GridLayer extends Component {

  static propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    rotation: PropTypes.number,
    scale: PropTypes.object,
    visible: PropTypes.bool,
    padding: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }

  constructor(props) {
    super(props)

    this.state = {
      rowLines: [],
      colLines: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const rowLines = []
    const colLines = []
    for (let i = 0; i < nextProps.width / nextProps.padding; i++) {
      rowLines.push([Math.round(i * nextProps.padding) + 0.5, 0, Math.round(i * nextProps.padding) + 0.5, nextProps.height])
    }

    for (let i = 0; i < nextProps.height / nextProps.padding; i++) {
      colLines.push([0, Math.round(i * nextProps.padding), nextProps.width, Math.round(i * nextProps.padding)])
    }
    this.setState({
      rowLines,
      colLines
    })
  }

  render() {
    return (
      <Layer 
      visible={this.props.visible}
      offsetX={this.props.width / 2}
      offsetY={this.props.width / 2}
      >
        {
          this.state.rowLines.map((item, key) => (
            <Line
              key={key}
              stroke={'#ddd'}
              strokeWidth={1}
              points={item}
              strokeScaleEnabled={false}
            />
          ))
        }
        {
          this.state.colLines.map((item, key) => (
            <Line
              key={key}
              stroke={'#ddd'}
              strokeWidth={1}
              points={item}
              strokeScaleEnabled={false}
            />
          ))
        }
      </Layer>
    )
  }
}