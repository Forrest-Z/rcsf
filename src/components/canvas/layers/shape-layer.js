// React Imports
import PropTypes from 'prop-types'

// Thrid Components
import { Layer } from 'react-konva'

const ShapeLayer = props => {
  const { visible } = props

  return (
    <Layer>
      
    </Layer>
  )
}

ShapeLayer.propTypes = {
  visible: PropTypes.bool 
}