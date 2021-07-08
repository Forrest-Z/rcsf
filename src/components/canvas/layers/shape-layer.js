// React Imports
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'
import { observer } from "mobx-react"

// Custom Components
import { PointShape, PolygonShape } from '../shapes'
import { DRAW_TOOL_TYPE } from '../constants'

// Mobx
import StageMobx from '../../../utility/mobx/StageMobx'

export const ShapeLayer = observer(props => {
  const { visible } = props

  return (
    <Layer visible={visible}>
      {
        StageMobx.shapes.map((item, key) => {
          switch (item.type) {
            case DRAW_TOOL_TYPE.ROUTE_POINT: case DRAW_TOOL_TYPE.CHARGE_POINT: case DRAW_TOOL_TYPE.PARK_POINT:
              return (
                <PointShape
                  data={item}
                  key={key}
                />
              )
            case DRAW_TOOL_TYPE.AREA:
              return (
                <PolygonShape
                  data={item}
                  key={key}
                />
              )
          }
        })
      }
    </Layer>
  )
})

ShapeLayer.propTypes = {
  visible: PropTypes.bool
}