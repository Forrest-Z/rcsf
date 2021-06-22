import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layer } from 'react-konva'
import { ImageShape } from '../shape'
import { observer, inject, Provider } from "mobx-react"

const MapLayer = props => {
  const { name, visible } = props

  return (
    <Layer visible={visible}>
      {
        name && (
          <ImageShape src={`http://localhost:8000/media/maps/${name}/map.png`} />
        )
      }
    </Layer>
  )
}

export default MapLayer