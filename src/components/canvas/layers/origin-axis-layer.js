// React Imports
import React from 'react'
import { PropTypes } from 'prop-types'

// Thrid Components
import { Arrow, Ring, Layer } from 'react-konva'

// Custom Components
import { SHAPE_STYLES_STROKE } from '../constants'

export const OriginAxisLayer = props => {
  const { visible, width, height, x, y } = props

  return (
    <Layer visible={visible}>
      <Arrow
        id='y-axis'
        points={[x, y, 0, height]}
        stroke={SHAPE_STYLES_STROKE.INACTIVE}
        strokeWidth={1}
        fill={SHAPE_STYLES_STROKE.INACTIVE}
      />
      <Arrow
        id='x-axis'
        points={[x, y, width, 0]}
        stroke={SHAPE_STYLES_STROKE.INACTIVE}
        strokeWidth={1}
        fill={SHAPE_STYLES_STROKE.INACTIVE}
      />
      <Ring
        id='origin'
        points={[x, y, 10000, 0]}
        stroke={SHAPE_STYLES_STROKE.INACTIVE}
        strokeWidth={1}
        outerRadius={11}
        innerRadius={10}
      />
    </Layer>

  )
}

OriginAxisLayer.propTypes = {
  visible: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
}