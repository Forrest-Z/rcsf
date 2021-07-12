// React Imports
import { useState } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Rect, Group } from 'react-konva'

// Custom Conponents
import { SHAPE_STYLES_STROKE, SHAPE_STYLES_FILL} from '../constants'

export const RectangleShape = props => {
  // Props
  const { x, y, rotation, width, height } = props.data

  // State
  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [selection, setSelection] = useState(false)

  // Callback
  const onMouseOver = e => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const onMouseLeave = e => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  return (
    <Group
      rotation={rotation}
    >
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
    </Group>
  )
}

PointShape.propTypes = {
  data: PropTypes.object
}