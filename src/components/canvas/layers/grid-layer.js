/**
 * Render grid
 */

// React Imports
import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Layer, Line } from 'react-konva'

// Custom Components
import { LAYER_Z_INDEX } from '../constants'

export const GridLayer = props => {
  const { visible, width, height, padding } = props

  // State
  const [rowLines, setRowLines] = useState([])
  const [colLines, setColLines] = useState([])

  // Refs
  const layerRef = createRef()

  useEffect(() => {
    const rowLinesTemp = []
    const colLinesTemp = []
    for (let i = 0; i < width / padding; i++) {
      rowLinesTemp.push([Math.round(i * padding) + 0.5, 0, Math.round(i * padding) + 0.5, height])
    }

    for (let i = 0; i < height / padding; i++) {
      colLinesTemp.push([0, Math.round(i * padding), width, Math.round(i * padding)])
    }

    setRowLines(rowLinesTemp)
    setColLines(colLinesTemp)
  }, [width, height])


  useEffect(() => {
    layerRef.current.zIndex(LAYER_Z_INDEX.GRID)
  }, [])

  return (
    <Layer
      ref={layerRef}
      visible={visible}
      offsetX={width / 2}
      offsetY={height / 2}
    >
      {
        rowLines.map((item, key) => (
          <Line
            key={key}
            stroke={key % 5 === 0 ? '#445075' : '#2b3450'}
            strokeWidth={key % 5 === 0 ? 2 : 1}
            points={item}
            strokeScaleEnabled={false}
          />
        ))
      }
      {
        colLines.map((item, key) => (
          <Line
            key={key}
            stroke={key % 5 === 0 ? '#445075' : '#2b3450'}
            strokeWidth={key % 5 === 0 ? 2 : 1}
            points={item}
            strokeScaleEnabled={false}
          />
        ))
      }
    </Layer>
  )
}

GridLayer.propTypes = {
  visible: PropTypes.bool
}