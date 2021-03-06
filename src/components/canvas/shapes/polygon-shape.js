// React Imports
import { useState, useEffect } from 'react'
import { PropTypes } from 'prop-types'

// Thrid Components
import { Group, Line, Circle } from 'react-konva'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

// Custom Conponents
import { SHAPE_STYLES_STROKE, SHAPE_STYLES_FILL, DRAW_TOOL_TYPE } from '../constants'

// Mobx
import StageMobx from '../../../utility/mobx/StageMobx'

export const PolygonShape = observer(props => {
  const { id, x, y, points, type } = props.data

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

  const onDragMove = e => {
    if (e.target.attrs.id === id) {
      props.data.setX(e.target.attrs.x)
      props.data.setY(e.target.attrs.y)
    }
  }

  const onContextMenu = e => {
    e.evt.preventDefault(true)
    StageMobx.shapes.remove(props.data)
    setVertices([])
    setAnchors([])
  }

  useEffect(() => {
    if (StageMobx.selection.id === id) {
      setSelection(true)
    } else {
      setSelection(false)
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
    <Group
      id={id}
      draggable
      onDragMove={onDragMove}
      x={x}
      y={y}

    >
      <Line

        id={id}
        points={points}
        fill={type === DRAW_TOOL_TYPE.BLOCK ? 'rgb(234, 172, 172, 0.6)' : fill}
        stroke={stroke}
        strokeWidth={type === DRAW_TOOL_TYPE.AREA && 2}
        closed
        strokeScaleEnabled={false}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onContextMenu={selection && onContextMenu}
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
            fill={SHAPE_STYLES_STROKE.HOVERED}
            stroke={"#f3f3f3"}
            strokeWidth={selection ? 3 : 2}
            visible={selection}
            draggable={true}
            scaleX={1 / StageMobx.scale.x}
            scaleY={1 / StageMobx.scale.y}
            onDragMove={onVerticeDragMove}
            onMouseOver={(e) => {
              e.target.setAttrs({
                scaleX: 1 / StageMobx.scale.x * 1.3,
                scaleY: 1 / StageMobx.scale.y * 1.3
              })
              e.target.getLayer().draw()
            }}
            onMouseLeave={(e) => {
              e.target.setAttrs({
                scaleX: 1 / StageMobx.scale.x,
                scaleY: 1 / StageMobx.scale.y
              })
              e.target.getLayer().draw()
            }}
            onContextMenu={(e) => {
              e.evt.preventDefault(true)
              if (vertices.length > 3) {
                for (let i = 0; i < vertices.length; i++) {
                  if (vertices[i] === item) {
                    points.splice(2 * i, 1)
                    points.splice(2 * i, 1)
                    updatePoints()
                  }
                }
              }
            }}
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
            stroke={"#f3f3f3"}
            strokeWidth={selection ? 3 : 2}
            draggable={true}
            visible={selection}
            scaleX={1 / StageMobx.scale.x}
            scaleY={1 / StageMobx.scale.y}
            onDragStart={onAnchorDragStart}
            onDragMove={onAnchorDragMove}
            onDragEnd={onAnchorDragEnd}
            onMouseOver={(e) => {
              e.target.setAttrs({
                scaleX: 1 / StageMobx.scale.x * 1.3,
                scaleY: 1 / StageMobx.scale.y * 1.3
              })
              e.target.getLayer().draw()
            }}
            onMouseLeave={(e) => {
              e.target.setAttrs({
                scaleX: 1 / StageMobx.scale.x,
                scaleY: 1 / StageMobx.scale.y
              })
              e.target.getLayer().draw()
            }}
          />
        ))
      }
    </Group>
  )
})