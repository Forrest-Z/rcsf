import { Group, Line, Arrow } from 'react-konva'

export const PredictionPathShape = (props) => {
  return (
    <Group>
      <Arrow
        points={[35, 90, 56, 22]}
        stroke={'rgb(8F,8F,21,0.9)'}
        strokeWidth={1}
        lineCap="round"
        lineJoin="round"
        tension={0.3}
        pointerLength={5}
        pointerWidth={5}
        fill={'rgb(8F,8F,21,0.9)'}
      />
    </Group>
  )
}
