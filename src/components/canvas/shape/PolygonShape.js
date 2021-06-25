// ** React Imports
import React, { useRefm, useState } from 'react'


// ** Thrid Components
import { Group, Line, Circle } from 'react-konva'
import { observer } from 'mobx-react'

// ** Custom Components
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'
import CanvasMobx from '@src/utility/mobx/CanvasMobx'

export const PolygonShape = observer(props => {
  // ** State
  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [selected, setSelected] = useState(false)
  const [anchors, setAnchors] = useState([])

  // ** Ref
  const polygonRef = useRef()

  const midpoint = ({ x1, y1 }, { x2, y2 }) => [(x1 + x2) / 2, (y1 + y2) / 2]

  return (
    <Group
      draggable={selected}
    >
      <Line
        points={props.store.vertices}
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        strokeScaleEnabled={false}
        dash={!selected && [8, 6]}
      />
      {
        props.stroe.vertices.map((item, key) => (
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
