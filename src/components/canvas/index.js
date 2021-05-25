import React from 'react'
import PropTypes from 'prop-types'
import { Stage } from 'react-konva'
import { Map } from './layer'

export class RCSCanvas extends React.Component {
  constructor() {
    super()
    
    this.state = {
      width: null,
      height: null,
      scale: {
        x: 1,
        y: 1
      }
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  componentDidUpdate(nextProps) {
    console.log(nextProps)
  }
  
  render() {
    return (
      <Stage
      >
        <Map />
      </Stage>
    )
  }
}