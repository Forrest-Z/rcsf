import { useEffect, useRef, useState } from 'react'
import MapGL, {
  AttributionControl,
  ScaleControl,
  FullscreenControl,
  NavigationControl
} from 'react-map-gl'

const attributionStyle = {
  right: 0,
  top: 0
}

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
}

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
}

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
}

const VehicleMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 30.508,
    longitude: 114.394,
    zoom: 14.5,
    bearing: 0,
    pitch: 0
  })

  const [mapWidth, setMapWidth] = useState(0)
  const [mapHeight, setMapHeight] = useState(0)

  const initMapHeight = () => {
    const dom = document.getElementsByClassName('vehicle-map')[0]
    const bound = dom.getBoundingClientRect()
    console.log(bound)
    setMapWidth(window.innerWidth - bound.x - bound.right)
    setMapHeight(window.innerHeight - bound.y - 30)
  }

  useEffect(() => {
    initMapHeight()
    window.addEventListener('resize', initMapHeight)
    return () => window.removeEventListener('resize', window)
  }, [])

  return (
    <div className="px-1">
      <MapGL
        className="vehicle-map"
        mapStyle="mapbox://styles/yurui0106/cks4qo0m752mo17peyvtkf113"
        width={'100%'}
        height={mapHeight}
        onResize={initMapHeight}
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={
          'pk.eyJ1IjoieXVydWkwMTA2IiwiYSI6ImNraTZzMmlubzBldjEyeXJ6NGhncWdpOXEifQ.HP8aRGENdnN_Qb8kPbhiEg'
        }
      >
        <AttributionControl compact={true} style={attributionStyle} />
        <ScaleControl style={scaleControlStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
      </MapGL>
    </div>
  )
}

export default VehicleMap
