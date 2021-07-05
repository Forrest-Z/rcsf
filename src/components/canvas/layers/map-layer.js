// React Imports
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'

const MapLayer = props => {
  const { visible, url } = props

  return (
    <Layer
      visible={visible}
    >
      
    </Layer>
  )
}

MapLayer.propTypes = {
  url: PropTypes.string,
  visible: PropTypes.bool
}