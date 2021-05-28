import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layer } from 'react-konva'
import { ImageShape } from '../shape'

export class MapLayer extends Component {

  render() {
    return (
      <Layer visible={this.props.visible}>
        <ImageShape src='http://localhost:9000/files/123/map.png' />
      </Layer>
    )
  }
}