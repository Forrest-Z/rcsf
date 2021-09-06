// React Imports
import React, { useState, createRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Stage } from 'react-konva'
import { observer } from 'mobx-react'

// Custom Components
import { GridLayer, OriginAxisLayer, MapLayer, ShapeLayer, PathLayer } from './layers'
import { getMouseRealPos } from './utils/Coordinate'
import { DRAW_TOOL_TYPE } from './constants'

// Mobx
import StageMobx from '@src/utility/mobx/StageMobx'
import { ShapeMobx } from '../../utility/mobx/StageMobx'

export const RCSCanvas = observer((props) => {
  const {
    // Render options
    data,
    width,
    height,
    mode
  } = props

  const stageRef = createRef()

  const polyDefaultPoints = (position) => {
    return [
      position.x - 20,
      position.y + 20,
      position.x + 20,
      position.y + 20,
      position.x + 20,
      position.y - 20,
      position.x - 20,
      position.y - 20
    ]
  }

  const onWheel = (e) => {
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

  const onMouseMove = (e) => {
    StageMobx.setMousePosition(getMouseRealPos(e))
  }

  const onClick = (e) => {
    e.evt.preventDefault()
    console.log(e)
    const position = getMouseRealPos(e)

    if (position === null) {
      return
    }

    if (e.target.className === 'Image') {
      switch (StageMobx.drawTool) {
        case DRAW_TOOL_TYPE.INACTIVE:
          break
        case DRAW_TOOL_TYPE.ROUTE_POINT:
        case DRAW_TOOL_TYPE.CHARGE_POINT:
        case DRAW_TOOL_TYPE.PARK_POINT:
          StageMobx.setShapes(
            StageMobx.shapes.concat(
              new ShapeMobx({
                id: `Point-${StageMobx.getPointIndex()}`,
                x: position.x,
                y: position.y,
                type: StageMobx.drawTool,
                rotation: 0
              })
            )
          )
          break
        case DRAW_TOOL_TYPE.AREA:
          StageMobx.setShapes(
            StageMobx.shapes.concat(
              new ShapeMobx({
                id: `Area-${StageMobx.getAreaIndex()}`,
                x: 0,
                y: 0,
                type: StageMobx.drawTool,
                points: polyDefaultPoints(position)
              })
            )
          )
          break
        case DRAW_TOOL_TYPE.BLOCK:
          StageMobx.setShapes(
            StageMobx.shapes.concat(
              new ShapeMobx({
                id: `Block-${StageMobx.getBlockIndex()}`,
                x: 0,
                y: 0,
                type: StageMobx.drawTool,
                points: polyDefaultPoints(position)
              })
            )
          )
          break

          break
      }

      StageMobx.setSelection({ id: -1 })
    }

    const selection = StageMobx.shapes.find(
      (element) => element.id === e.target.id()
    )
    if (selection) {
      StageMobx.setSelection(selection)
    }
  }

  useEffect(() => {}, [props])

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
      onClick={onClick}
    >
      <MapLayer />
      <GridLayer // 网格辅助线
        visible={StageMobx.grid}
        width={10000}
        height={10000}
        padding={30}
      />
      <OriginAxisLayer // 坐标系
        visible={StageMobx.axis}
        width={width}
        height={height}
        x={0}
        y={0}
      />
      <ShapeLayer visible={true} />
      <PathLayer />
    </Stage>
  )
})

RCSCanvas.propTypes = {
  mode: PropTypes.oneOfType(['edit', 'view', 'simple']),
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.object
}
