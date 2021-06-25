import React, { createRef, useState, useEffect } from 'react'
import { Stage } from 'react-konva'
import MapLayer from './layer/MapLayer'
import ShapeLayer from './layer/ShapeLayer'
import { observer } from 'mobx-react'
import ThemeMobx from '@src/utility/mobx/ThemeMobx'

import CanvasMobx, { ShapeMobx } from '@src/utility/mobx/CanvasMobx'
import { getMouseRealPos } from './utils/Coordinate'

export const RCSCanvas = observer(props => {
  const { width, height, map } = props
  const [scale, setScale] = useState({ x: 1, y: 1 })

  const stageRef = createRef()

  const onWheel = (e) => {
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

  const handleClick = (e) => {
    e.evt.preventDefault()
    const position = getMouseRealPos(e)

    if (e.target.className === 'Image') {
      console.log(CanvasMobx.currentTool)
      switch (CanvasMobx.currentTool) {
        case 'mouse-pointer':
          break
        case 'route-point':
          CanvasMobx.setRaw(CanvasMobx.raw.concat(
            new ShapeMobx({
              type: 'route-point',
              shape: 'circle',
              x: position.x,
              y: position.y,
              rotation: 0
            })
          ))
          break
        case 'charge-point':
          CanvasMobx.setRaw(CanvasMobx.raw.concat(
            new ShapeMobx({
              type: 'charge-point',
              shape: 'circle',
              x: position.x,
              y: position.y,
              rotation: 0
            })
          ))
          break
        case 'rectarea':
          CanvasMobx.setRaw(CanvasMobx.raw.concat(
            new ShapeMobx({
              type: 'area',
              shape: 'rectangle',
              x: position.x,
              y: position.y,
              width: 30,
              height: 30,
              rotation: 0
            })
          ))
          break
        case 'rectblock':
          CanvasMobx.setRaw(CanvasMobx.raw.concat(
            new ShapeMobx({
              type: 'block',
              shape: 'rectangle',
              x: position.x,
              y: position.y,
              width: 30,
              height: 30,
              rotation: 0
            })
          ))
          break
      }
    }
    console.log(e.target.id())
    CanvasMobx.setSelected(e.target.id())

  }

  return (
    <Stage
      x={width / 2}
      y={height / 2}
      width={width}
      height={height}
      draggable={true}
      onWheel={onWheel}
      ref={stageRef}
      scale={scale}
      style={{
        backgroundColor: ThemeMobx.skin === "\"light\"" ? '#f3f3f3' : '#000'
      }}
      onClick={handleClick}
    >
      {
        map && (
          <MapLayer name={map.name} />
        )
      }
      <ShapeLayer width={width} height={height} />
    </Stage>
  )
})