// React Imports
import { useState } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Circle } from 'react-konva'


const PointShape = props => {
  const { x, y, rotation } = props.data

  // State
  const [selection, setSelection] = useState(false)

  return (
    <Group
      rotation={rotation}
    >
      <Circle
        x={x}
        y={y}
        radius={18}

      />
    </Group>
  )
}

PointShape.propTypes = {
  data: PropTypes.object
}