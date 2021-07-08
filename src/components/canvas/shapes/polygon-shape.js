// React Imports
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

// Thrid Components
import { Group, Line, Circle } from 'react-konva'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

// Custom Conponents
import { SHAPE_STYLES_STROKE, SHAPE_STYLES_FILL } from '../constants'

// Mobx
import StageMobx from '../../../utility/mobx/StageMobx'

export const PolygonShape = observer(props => {
  const { id, x, y, points } = props.data

  // State
  const [selection, setSelection] = useState(false)
  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [vertices, setVertices] = useState([])
  const [anchors, setAnchors] = useState([])

  const getMidPoint = (start, end) => {
    return {
      x: (start.x + end.x) / 2,
      y: (start.y + end.y) / 2
    }
  }

  const updatePoints = () => {
    const vertices = []
    for (let i = 0; i < points.length; i += 2) {
      vertices.push({
        x: points[i],
        y: points[i + 1]
      })
    }
    console.log(vertices)

    setVertices(vertices)

    const anchors = []
    let anchor = {}
    for (let i = 0; i < vertices.length; i++) {
      if (i === vertices.length - 1) {
        anchor = getMidPoint(vertices[i], vertices[0])
        anchors.push(anchor)
      } else {
        anchor = getMidPoint(vertices[i], vertices[i + 1])
        anchors.push(anchor)
      }
    }

    setAnchors(anchors)
    console.log(anchor)
  }

  // Callback
  const onMouseOver = e => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const onMouseLeave = e => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  const onVerticeDragMove = e => {
    const index = e.target.attrs.index
    points[index * 2] = e.target.attrs.x
    points[(index * 2) + 1] = e.target.attrs.y

    updatePoints()
  }

  const onAnchorDragStart = e => {
    const index = e.target.attrs.index
    points.splice((index * 2) + 2, 0, e.target.attrs.y)
    points.splice((index * 2) + 2, 0, e.target.attrs.x)
  }

  const onAnchorDragMove = e => {
    const index = e.target.attrs.index
    points[(index * 2) + 2] = e.target.attrs.x
    points[(index * 2) + 3] = e.target.attrs.y
  }

  const onAnchorDragEnd = e => {
    updatePoints()
  }

  useEffect(() => {
    if (StageMobx.selection.id === id) {
      setSelection(true)
    }
  }, [StageMobx.selection])

  useEffect(() => {
    const verticesTemp = []
    for (let i = 0; i < points.length; i += 2) {
      verticesTemp.push({
        x: points[i],
        y: points[i + 1]
      })
    }
    setVertices(verticesTemp)
  }, [points])

  return (
    <Group>
      <Line
        id={id}
        points={points}
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        closed
        strokeScaleEnabled={false}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      />
      {
        vertices.map((item, key) => (
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
            visible={selection}
            draggable={true}
            scaleX={1 / StageMobx.scale.x}
            scaleY={1 / StageMobx.scale.y}
            onDragMove={onVerticeDragMove}
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
            strokeWidth={selection ? 3 : 2}
            draggable={true}
            visible={selection}
            scaleX={1 / StageMobx.scale.x}
            scaleY={1 / StageMobx.scale.y}
            onDragStart={onAnchorDragStart}
            onDragMove={onAnchorDragMove}
            onDragEnd={onAnchorDragEnd}
          />
        ))
      }
    </Group>
  )
})