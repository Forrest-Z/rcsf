// ** React Imports
import React, { useState, useEffect, useRef } from 'react'

// ** Thrid Components
import { Circle, Group, Arrow, Transformer } from 'react-konva'
import { observer } from 'mobx-react'

// ** Custom Components
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'
import CanvasMobx from '../../../utility/mobx/CanvasMobx'

export const PointShape = observer(props => {
  // ** State
  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [selected, setSelected] = useState(false)
  
  // ** Ref
  const trRef = useRef()
  const arrowRef = useRef()

  const handleMouseOver = () => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const handleMouseLeave = () => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  const handleDragEnd = (e) => {
    console.log(e.target)
    props.store.setX(e.target.attrs.x)
    props.store.setY(e.target.attrs.y)
  }

  const handleTransformEnd = (e) => {
    const node = arrowRef.current
    console.log(node.rotation())
    props.store.setRotation(node.rotation())
    trRef.current.getLayer().batchDraw()
  }

  useEffect(() => {
    trRef.current.nodes([arrowRef.current])
    trRef.current.getLayer().batchDraw()
  }, [])


  return (
    <Group>
      <Group
        scale={{
          x: 1 / CanvasMobx.scale.x,
          y: 1 / CanvasMobx.scale.y
        }}
        x={props.store.x}
        y={props.store.y}
        ref={arrowRef}
        rotation={props.store.rotation}
        draggable={true}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onDragEnd={handleDragEnd}
        onTransformEnd={handleTransformEnd}
      >
        <Circle
          radius={18}
          fill={fill}
          stroke={stroke}
          strokeWidth={2}
          strokeScaleEnabled={false}
          dash={!selected && [8, 2]}

        />
        <Arrow
          points={[0, -8, 0, 6]}
          fill={stroke}
          stroke={stroke}
          strokeWidth={5}
          strokeScaleEnabled={false}
          pointerLength={4}
          pointerWidth={6}
        />

      </Group>
      <Transformer
        borderEnabled={true}
        ref={trRef}
        ignoreStroke
        enabledAnchors={[]}
      />
    </Group>

  )
})