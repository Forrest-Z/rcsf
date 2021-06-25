import React, { useState, useEffect, useRef } from 'react'
import { Group, Rect, Transformer } from 'react-konva'
import { SHAPE_STYLES_FILL, SHAPE_STYLES_STROKE } from '../utils/styles'
import CanvasMobx from '@src/utility/mobx/CanvasMobx'
import { observer } from 'mobx-react'

export const RectangleShape = observer(props => {
  // ** State
  const [fill, setFill] = useState(props.store.type === 'rect-area' ? SHAPE_STYLES_FILL.INACTIVE : SHAPE_STYLES_FILL.BLOCK)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [selected, setSelected] = useState(false)

  // ** Ref
  const trRef = useRef()
  const RectRef = useRef()

  const handleMouseOver = () => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const handleMouseLeave = () => {
    setFill(props.store.type === 'rect-area' ? SHAPE_STYLES_FILL.INACTIVE : SHAPE_STYLES_FILL.BLOCK)
  }

  useEffect(() => {
    if (selected) {
      trRef.current.nodes([RectRef.current])
      trRef.current.getLayer().batchDraw()
    }

  }, [selected])

  useEffect(() => {
    if (CanvasMobx.selected === props.store.id) {
      setSelected(true)
      setStroke(SHAPE_STYLES_STROKE.SELECTED)
    } else {
      setSelected(false)
      setStroke(SHAPE_STYLES_STROKE.INACTIVE)
    }
  }, [CanvasMobx.selected])

  return (
    <Group
      name='object'
      draggable={true}

    >
      <Rect
        listening={true}
        ref={RectRef}
        id={props.store.id}
        offsetX={props.store.width / 2}
        offsetY={props.store.height / 2}
        x={props.store.x}
        y={props.store.y}
        width={props.store.width}
        height={props.store.height}
        fill={fill}
        stroke={props.store.type !== 'block' && stroke}
        strokeWidth={2}
        strokeScaleEnabled={false}
        // dash={!selected && [10, 2]}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      />
      {
        selected && (
          <Transformer
            listening={selected}
            ref={trRef}
            ignoreStroke
          // enabledAnchors={['top-center']}
          />
        )
      }
    </Group>
  )
})