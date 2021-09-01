// React Imports
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Circle, Group, Transformer, Arrow } from 'react-konva'
import { observer } from 'mobx-react'

// Custom Conponents
import { SHAPE_STYLES_STROKE, SHAPE_STYLES_FILL } from '../constants'

// Mobx
import StageMobx from '../../../utility/mobx/StageMobx'

export const PointShape = observer((props) => {
  console.log(props)

  const { id, x, y, rotation, type } = props.data

  // State
  const [selection, setSelection] = useState(false)
  const [fill, setFill] = useState(SHAPE_STYLES_FILL.INACTIVE)
  const [stroke, setStroke] = useState(SHAPE_STYLES_STROKE.INACTIVE)
  const [transformerShow, setTransformerShow] = useState(false)

  // Refs
  const trRef = useRef()
  const pointRef = useRef()

  // Callback
  const onMouseOver = (e) => {
    setFill(SHAPE_STYLES_FILL.HOVERED)
  }

  const onMouseLeave = (e) => {
    setFill(SHAPE_STYLES_FILL.INACTIVE)
  }

  const onTransformEnd = (e) => {
    console.log(props.data)
    const node = pointRef.current
    props.data.setRotation(node.rotation())
    trRef.current.getLayer().batchDraw()
  }

  const onDragMove = (e) => {
    props.data.setX(e.target.attrs.x)
    props.data.setY(e.target.attrs.y)
  }

  const onContextMenu = (e) => {
    e.evt.preventDefault(true)
    StageMobx.shapes.remove(props.data)
  }

  useEffect(() => {
    if (StageMobx.selection.id === id) {
      setSelection(true)
      setStroke(SHAPE_STYLES_STROKE.SELECTED)
    } else {
      setSelection(false)
      setTransformerShow(false)
      setStroke(SHAPE_STYLES_STROKE.INACTIVE)
    }
  }, [StageMobx.selection])

  useEffect(() => {
    if (transformerShow) {
      trRef.current.nodes([pointRef.current])
      trRef.current.getLayer().batchDraw()
    }
  }, [transformerShow])

  return (
    <Group>
      <Group
        name="object"
        rotation={rotation}
        ref={pointRef}
        x={x}
        y={y}
        draggable={true}
        scaleX={1 / StageMobx.scale.x}
        scaleY={1 / StageMobx.scale.y}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onDragMove={onDragMove}
        onDblClick={() => setTransformerShow(!transformerShow)}
        onTransformEnd={onTransformEnd}
        onTransform={onTransformEnd}
        onContextMenu={onContextMenu}
      >
        <Circle
          id={id}
          radius={18}
          fill={fill}
          stroke={stroke}
          strokeWidth={2}
        />
        <Arrow
          listening={false}
          points={[0, -8, 0, 6]}
          fill={stroke}
          stroke={stroke}
          strokeWidth={5}
          strokeScaleEnabled={false}
          pointerLength={4}
          pointerWidth={6}
        />
      </Group>
      {transformerShow && (
        <Transformer
          listening={transformerShow}
          borderEnabled={true}
          ref={trRef}
          ignoreStroke
          enabledAnchors={[]}
        />
      )}
    </Group>
  )
})

PointShape.propTypes = {
  data: PropTypes.object
}
