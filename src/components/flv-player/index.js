import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flvjs from 'flv.js'

/**
 * react component wrap flv.js
 */
export class Reflv extends Component {
  constructor(props) {
    super(props)
    this.initFlv = this.initFlv.bind(this)
  }

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * media URL, can be starts with 'https(s)' or 'ws(s)' (WebSocket)
     */
    url: PropTypes.string,
    /**
     * media type, 'flv' or 'mp4'
     */
    type: PropTypes.oneOf(['flv', 'mp4']).isRequired,
    /**
     * whether the data source is a **live stream**
     */
    isLive: PropTypes.bool,
    /**
     * whether to enable CORS for http fetching
     */
    cors: PropTypes.bool,
    /**
     * whether to do http fetching with cookies
     */
    withCredentials: PropTypes.bool,
    /**
     * whether the stream has audio track
     */
    hasAudio: PropTypes.bool,
    /**
     * whether the stream has video track
     */
    hasVideo: PropTypes.bool,
    /**
     * total media duration, in milliseconds
     */
    duration: PropTypes.bool,
    /**
     * total file size of media file, in bytes
     */
    filesize: PropTypes.number,
    /**
     * Optional field for multipart playback, see MediaSegment
     */
    segments: PropTypes.arrayOf(PropTypes.shape({
      /**
       * indicates segment duration in milliseconds
       */
      duration: PropTypes.number.isRequired,
      /**
       * indicates segment file size in bytes
       */
      filesize: PropTypes.number,
      /**
       * indicates segment file URL
       */
      url: PropTypes.string.isRequired
    })),
    /**
     * @see https://github.com/Bilibili/flv.js/blob/master/docs/api.md#config
     */
    config: PropTypes.object
  }

  initFlv($video) {
    if ($video) {
      if (flvjs.isSupported()) {
        const flvPlayer = flvjs.createPlayer({ ...this.props }, this.props.config)
        flvPlayer.attachMediaElement($video)
        flvPlayer.load()
        flvPlayer.play()
        this.flvPlayer = flvPlayer
      }
    }
  }

  componentWillUnmount() {
    if (this.flvPlayer) {
      this.flvPlayer.unload()
      this.flvPlayer.detachMediaElement()
    }
  }

  render() {
    const { className, style } = this.props
    return (
      <video
        className={className}
        controls={true}
        muted
        style={Object.assign({
          width: '100%',
          height: '100%'
        }, style)}
        ref={this.initFlv}
      />
    )
  }
}