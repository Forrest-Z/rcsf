/**
 * Render grid
 */

// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'

const GridLayer = props => {
  const { visible } = props

  return (
    <Layer visible={visible}>

    </Layer>
  )
}

GridLayer.propTypes = {
  visible: PropTypes.bool
}