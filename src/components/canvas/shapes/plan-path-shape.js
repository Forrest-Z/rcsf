// ** React Imports
import { useState, useEffect } from 'react'
 
// ** Thrid Components
import { Spring, animated } from '@react-spring/konva'

// ** Custom Components
import { Group, Line } from 'react-konva'

export const PlanPathShape = (props) => {
  const [points, setPoints] = useState([0, 0, 10, 10, 2, 9, 35, 90, 56, 22])

  useEffect(() => {

  }, [])

  return (
    <Group>
      <animated.Line
        points={points}
        stroke={'rgb(34,255,21,0.9)'}
        strokeWidth={3}
        // lineCap="round"
        lineJoin="round"
        tension={0.3}
        dash={[6, 3]}
      />
    </Group>
  )
}
