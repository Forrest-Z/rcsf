import { Group, Line } from 'react-konva'

export const PlanPathShape = (props) => {
  return (
    <Group>
      <Line
        points={[0, 0, 10, 10, 2, 9, 35, 90, 56, 22]}
        stroke={'rgb(34,56,21,0.9)'}
        strokeWidth={1}
        lineCap="round"
        lineJoin="round"
        tension={0.3}
      />
    </Group>
  )
}
