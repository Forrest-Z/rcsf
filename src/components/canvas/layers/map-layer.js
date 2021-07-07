// React Imports
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'

// Custom Components
import { ImageShape } from '../shapes'

// Mobx
import StageMobx from '@src/utility/mobx/StageMobx'

export const MapLayer = props => {
  const { visible } = props

  return (
    <Layer
      visible={visible}
    >
      {StageMobx.map && (
        <ImageShape url={`http://localhost:8000/media/maps/${StageMobx.map.name}/map.png`} />
      )}
    </Layer>
  )
}

MapLayer.propTypes = {
  visible: PropTypes.bool
}