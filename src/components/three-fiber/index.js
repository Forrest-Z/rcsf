// ** React Imports
import React, { useRef, useState } from 'react'

// ** Thrid Components
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { observer } from 'mobx-react'

// ** Custom Components
import Polygon from './shapes/Polygon'
import StageMobx from '../../utility/mobx/StageMobx'
import { DRAW_TOOL_TYPE } from '../canvas/constants'

const ThreeFiber = observer(({ points }) => {
  const orbit = useRef()

  return (
    <Canvas camera={{ position: [0, 0, 40], fov: 42 }}>
      {/* <color attach="background" args={['#a2b9e7']} /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {StageMobx.shapes.map((item, index) => {
        switch (item.type) {
          case DRAW_TOOL_TYPE.AREA:
            return (
              <Polygon
                key={index}
                position={[1.2, 0, 0]}
                points={item.points}
              />
            )
        }
      })}

      <OrbitControls ref={orbit} target={[0, 0, 0]} />
    </Canvas>
  )
})

export default ThreeFiber
