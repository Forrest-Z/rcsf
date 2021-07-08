// React Imports
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Circle, Group } from 'react-konva'
import { observer } from "mobx-react"

// Custom Conponents
import { SHAPE_STYLES_STROKE, SHAPE_STYLES_FILL } from '../constants'

// Mobx
import StageMobx from '../../../utility/mobx/StageMobx'

export const PointShape = observer(props => {
  const { id, x, y, rotation, type } = props.data

  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)

  // State
  const [selection, setSelection] = useState(false)

  // Callback
  const onMouseOver = e => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const onMouseLeave = e => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  useEffect(() => {
    if (StageMobx.selection.id === id) {
      setSelection(true)
      setStroke(SHAPE_STYLES_STROKE.SELECTED)
    } else {
      setSelection(false)
      setStroke(SHAPE_STYLES_STROKE.INACTIVE)
    }
  }, [StageMobx.selection])

  return (
    <Group
      rotation={rotation}
    >
      <Circle
        id={id}
        draggable={selection}
        x={x}
        y={y}
        radius={18}
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        scaleX={1 / StageMobx.scale.x}
        scaleY={1 / StageMobx.scale.y}
      />
    </Group>
  )
})

PointShape.propTypes = {
  data: PropTypes.object
}