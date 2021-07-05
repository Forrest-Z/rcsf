// React Imports
import React, { useState, createRef } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Stage } from 'react-konva'

export const RCSCanvas = props => {
  const {
    // Render options
    data,
    width,
    height,
    mode
  } = props

  const stageRef = createRef()

  const onWheel = e => {
    e.evt.preventDefault()
    const scaleBy = 1.06

    const oldScale = scale.x
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

    setScale({
      x: newScale,
      y: newScale
    })

    CanvasMobx.setScale({
      x: newScale,
      y: newScale
    })

    // const circles = this.stageRef.current.find('Circle')
    // circles.scale({
    //   x: 1 / newScale,
    //   y: 1 / newScale
    // })

    // const wedges = this.stageRef.current.find('Path')
    // wedges.scale({
    //   x: 1 / newScale,
    //   y: 1 / newScale
    // })

    // const arrows = stageRef.current.find('Arrow')
    // arrows.scale({
    //   x: 1 / newScale,
    //   y: 1 / newScale
    // })

    stageRef.current.batchDraw()
  }

  return (
    <Stage
      ref={stageRef}
      x={width / 2}
      y={height / 2}
      width={width}
      height={height}
      draggable={true}
      onWheel={onWheel}
      // scale={scale}
    >

    </Stage>
  )
}

RCSCanvas.propTypes = {
  mode: PropTypes.oneOfType(['edit', 'view']),
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.object
}