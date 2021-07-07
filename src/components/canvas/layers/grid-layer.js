/**
 * Render grid
 */

// React Imports
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Layer, Line } from 'react-konva'

export const GridLayer = props => {
  const { visible, width, height, padding } = props

  // State
  const [rowLines, setRowLines] = useState([])
  const [colLines, setColLines] = useState([])

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

  return (
    <Layer
      visible={visible}
      offsetX={width / 2}
      offsetY={height / 2}
    >
      {
        rowLines.map((item, key) => (
          <Line
            key={key}
            stroke={'#283046'}
            strokeWidth={1}
            points={item}
            strokeScaleEnabled={false}
          />
        ))
      }
      {
        colLines.map((item, key) => (
          <Line
            key={key}
            stroke={'#283046'}
            strokeWidth={1}
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