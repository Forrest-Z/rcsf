import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Circle, Group, Arrow } from 'react-konva'
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'
import { getMouseRealPos } from '../utils/Coordinate'

export const PointShape = props => {

  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [selected, setSelected] = useState(false)

  const handleMouseOver = () => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const handleMouseLeave = () => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  const handleDragEnd = (e) => {
    const position = getMouseRealPos(e)
    console.log(position)
    props.store.setX(position.x)
    console.log(props.store)
  }

  return (
    <Group
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    // onDragEnd={handleDragEnd}
    >
      <Circle
        draggable={true}
        x={props.store.x}
        y={props.y}
        radius={16}
        scale={props.scale}
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        strokeScaleEnabled={false}
        dash={!selected && [10, 2]}
        onDragEnd={handleDragEnd}
      />
      {
        props.rotation && (
          <Arrow
            x={props.x}
            y={props.y}
            points={[0, -8, 0, 6]}
            fill={stroke}
            stroke={stroke}
            strokeWidth={5}
            strokeScaleEnabled={false}
            pointerLength={4}
            pointerWidth={6}
          />
        )
      }
    </Group>
  )
}