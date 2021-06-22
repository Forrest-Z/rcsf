// ** React Imports
import React, { useEffect } from 'react'

// ** Thrid Components
import { Layer } from 'react-konva'
import { observer } from 'mobx-react-lite'
// ** Custom Components
import { PointShape, PolygonShape, RectangleShape, TrackShape } from '../shape'

// ** Mobx
import CanvasMobx from '@src/utility/mobx/CanvasMobx'

const ShapeLayer = observer((props) => {

  return (
    <Layer>
      {
        CanvasMobx.raw.map((item, key) => {
          console.log(item)
          switch (item.type) {
            case 'point':
              return (
                <PointShape store={item.store} />
              )
            case 'area':
              return (
                <PolygonShape />
              )
            case 'block':
              return (
                <PolygonShape />
              )

          }
        })
      }
    </Layer>
  )
})

export default ShapeLayer