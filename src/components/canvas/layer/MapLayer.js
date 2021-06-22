import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layer } from 'react-konva'
import { ImageShape } from '../shape'
import { observer, inject, Provider } from "mobx-react"

class MapLayer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layer visible={this.props.visible}>
        <ImageShape src={`http://localhost:8000/media/maps/${this.props.name}/map.png`} />
      </Layer>
    )
  }
}

export default MapLayer