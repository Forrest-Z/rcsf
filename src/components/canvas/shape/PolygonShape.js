// ** React Imports
import React, { useRef, useState, useEffect } from 'react'


// ** Thrid Components
import { Group, Line, Circle } from 'react-konva'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

// ** Custom Components
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'
import CanvasMobx from '@src/utility/mobx/CanvasMobx'

export const PolygonShape = observer(props => {
  // ** State
  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [selected, setSelected] = useState(false)
  const [anchors, setAnchors] = useState([])
  const [vertices, setVertices] = useState([])

  // ** Ref
  const polygonRef = useRef()

  const midpoint = ({ x1, y1 }, { x2, y2 }) => [(x1 + x2) / 2, (y1 + y2) / 2]

  // useEffect(() => {
  //   if (selected && props.store.type === 'route-point') {
  //     trRef.current.nodes([pointRef.current])
  //     trRef.current.getLayer().batchDraw()
  //   }

  // }, [selected])

  const handleMouseOver = () => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const handleMouseLeave = () => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  const handleDragEnd = (e) => {
    props.store.setX(e.target.attrs.x)
    props.store.setY(e.target.attrs.y)
  }

  useEffect(() => {
    if (CanvasMobx.selected === props.store.id) {
      setSelected(true)
      setStroke(SHAPE_STYLES_STROKE.SELECTED)
    } else {
      setSelected(false)
      setStroke(SHAPE_STYLES_STROKE.INACTIVE)
    }
  }, [CanvasMobx.selected])

  useEffect(() => {
    const verticesTemp = []
    for (let i = 0; i < props.store.vertices.length; i += 2) {
      verticesTemp.push({
        x: props.store.vertices[i],
        y: props.store.vertices[i + 1]
      })
    }
    setVertices(verticesTemp)
  }, [props.store.vertices])

  return (
    <Group
      draggable={selected}
      id={props.store.id}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onDragEnd={handleDragEnd}
    >
      <Line
      id={props.store.id}
        points={toJS(props.store.vertices)}
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        closed
        strokeScaleEnabled={false}
        dash={selected && [8, 6]}
      />''
      {
        props.store.vertices.map((item, key) => (
          <Circle
            opacity={0.9}
            index={key}
            key={key}
            radius={8}
            x={item.x}
            y={item.y}
            fill={fill}
            strokeWidth={2}
            stroke={stroke}
            visible={selected}
            draggable={true}
            scaleX={1 / CanvasMobx.scale.x}
            scaleY={1 / CanvasMobx.scale.y}
            // onDragMove={handleVerticeDragMove}
          />
        ))
      }
      {
        anchors.map((item, key) => (
          <Circle
            index={key}
            key={key}
            radius={8}
            fill={"#fbb03b"}
            x={item.x}
            y={item.y}
            stroke={"#ffffff"}
            strokeWidth={selected ? 3 : 2}
            draggable={true}
            visible={selected}
            scale={scale}
            // onDragStart={handleAnchorDragStart}
            // onDragMove={handleAnchorDragMove}
            // onDragEnd={handleAnchorDragEnd}
          />
        ))
      }
    </Group>
  )
})
