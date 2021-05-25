import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PolygonShape extends Component {

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

PolygonShape.PropTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  rotation: PropTypes.number,
  scale: PropTypes.object,
  visible: PropTypes.bool,
  selected: PropTypes.bool
}