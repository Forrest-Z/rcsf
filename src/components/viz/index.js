import React from 'react'

import DeckGL from 'deck.gl'

export const Viz = () => {
  return (
    <div className='position-relative h-100'>
      <DeckGL
        parameters={{
          clearColor: [0, 0, 0, 1]
        }}
      />

    </div>
  )
}