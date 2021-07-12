// React Imports
import React from 'react'

// Thrid Components
import DeckGL, { OrbitView } from 'deck.gl'
import { ScatterplotLayer } from '@deck.gl/layers'
import { COORDINATE_SYSTEM } from '@deck.gl/core'

const DEFAULT_VIEW_STATE = {
  rotationX: 90,
  rotationOrbit: -45,
  zoom: 5,
  pitch: 0
}

export const Viz = () => {
  const renderLayers = () => {
    return [
      new ScatterplotLayer({
        data: [{ coordinates: [0, 0, 0] }],
        coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
        pickable: true,
        opacity: 0.8,
        stroked: true,
        filled: true,
        radiusScale: 1,
        radiusMinPixels: 1,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1
      })
    ]
  }

  return (
    <div className='position-relative h-100'>
      <DeckGL
        parameters={{
          clearColor: [0, 0, 0, 0.049]
        }}
        views={new OrbitView()}
        layers={renderLayers()}
        initialViewState={DEFAULT_VIEW_STATE}
        controller={true}
      />

    </div>
  )
}