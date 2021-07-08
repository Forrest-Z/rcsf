// React Imports
import { createRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'
import { observer } from "mobx-react"

// Custom Components
import { ImageShape } from '../shapes'
import { LAYER_Z_INDEX } from '../constants'

// Mobx
import StageMobx from '@src/utility/mobx/StageMobx'

export const MapLayer = observer(props => {
  const { visible } = props

  // Refs
  const layerRef = createRef()

  useEffect(() => {
    layerRef.current.zIndex(LAYER_Z_INDEX.MAP)
  }, [])

  return (
    <Layer
      ref={layerRef}
      visible={visible}
    >
      {StageMobx.map && (
        <ImageShape url={`http://localhost:8000/media/maps/${StageMobx.map.name}/map.png`} />
      )}
    </Layer>
  )
})

MapLayer.propTypes = {
  visible: PropTypes.bool
}