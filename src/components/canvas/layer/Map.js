import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layer } from 'react-konva'
import { ImageShape } from '../shape'

export class Map extends Component {

  render() {
    return (
      <Layer visible={this.props.visible}>
        <ImageShape src='http://localhost:9000/files/123/map.png' />
      </Layer>
    )
  }
}

// Map.PropTypes = {
//   id: PropTypes.any,
//   name: PropTypes.string,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   rotation: PropTypes.number,
//   scale: PropTypes.object,
//   visible: PropTypes.bool,
//   padding: PropTypes.number
// }