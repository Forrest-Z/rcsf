// React Imports
import React, { createRef, useEffect } from 'react'
import { PropTypes } from 'prop-types'

// Thrid Components
import { Arrow, Ring, Layer } from 'react-konva'

// Custom Components
import { SHAPE_STYLES_STROKE, LAYER_Z_INDEX } from '../constants'
import StageMobx from '../../../utility/mobx/StageMobx'

export const OriginAxisLayer = props => {
  const { visible, width, height, x, y } = props

  const layerRef = createRef()

  useEffect(() => {
    layerRef.current.zIndex(LAYER_Z_INDEX.AXIS)
  }, [])

  return (
    <Layer ref={layerRef} visible={visible}>
      <Arrow
        id='y-axis'
        points={[x, y, 0, height]}
        stroke={SHAPE_STYLES_STROKE.INACTIVE}
        strokeWidth={2}
        strokeScaleEnabled={false}
        fill={SHAPE_STYLES_STROKE.INACTIVE}
      />
      <Arrow
        id='x-axis'
        points={[x, y, width, 0]}
        stroke={SHAPE_STYLES_STROKE.INACTIVE}
        strokeWidth={2}
        strokeScaleEnabled={false}
        fill={SHAPE_STYLES_STROKE.INACTIVE}
      />
      <Ring
        id='origin'
        stroke={SHAPE_STYLES_STROKE.INACTIVE}
        strokeWidth={1}
        strokeScaleEnabled={false}
        outerRadius={9}
        innerRadius={8}
        scaleX={1 / StageMobx.scale.x}
        scaleY={1 / StageMobx.scale.y}
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