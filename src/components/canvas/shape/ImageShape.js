import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-konva'

export class ImageShape extends Component {
  constructor() {
    super()
    
    this.state = {
      image: null
    }
    
    this.handleLoad = this.handleLoad.bind(this)
  }

  componentDidMount() {
    this.loadImage()
  }

  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad)
  }

  loadImage() {
    this.image = new window.Image()
    this.image.src = this.props.src
    this.image.addEventListener('load', this.handleLoad)
  }

  handleLoad() {
    this.setState({
      image: this.image
    })

    this.imageNode.getLayer().cache()
    this.imageNode.getLayer().batchDraw()
  }

  render() {
    return (
      <Image 
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={node => {
          this.imageNode = node
        }}
      />
    )
  }
}

// ImageShape.PropTypes = {
//   id: PropTypes.any,
//   name: PropTypes.string,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   rotation: PropTypes.number,
//   scale: PropTypes.object,
//   visible: PropTypes.bool,
//   src: PropTypes.string
// }