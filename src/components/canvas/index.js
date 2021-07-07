// React Imports
import React, { useState, createRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Stage } from 'react-konva'
import { GridLayer, OriginAxisLayer, MapLayer } from './layers'
import { observer } from "mobx-react"

// Custom Components
import { getMouseRealPos } from './utils/Coordinate'
// Mobx
import StageMobx from '@src/utility/mobx/StageMobx'

export const RCSCanvas = observer(props => {
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

    const oldScale = StageMobx.scale.x
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

    // setScale({
    //   x: newScale,
    //   y: newScale
    // })

    StageMobx.setScale({
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

  const onMouseMove = e => {
    StageMobx.setMousePosition(getMouseRealPos(e))
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
      scale={StageMobx.scale}
      onMouseMove={onMouseMove}
    >
      <GridLayer visible={StageMobx.grid} width={10000} height={10000} padding={30} />
      <OriginAxisLayer visible={StageMobx.axis} width={width} height={height} x={0} y={0} />
      <MapLayer />
    </Stage>
  )
})

RCSCanvas.propTypes = {
  mode: PropTypes.oneOfType(['edit', 'view', 'simple']),
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.object
}