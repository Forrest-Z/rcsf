/**
 * Show lidar scan and obstacles
 */

// React Imports
import React from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'

const LidarLayer = props => {
  const { visible } = props

  return (
    <Layer visible={visible}>

    </Layer>
  )
}

LidarLayer.propTypes = {
  visible: PropTypes.bool
}