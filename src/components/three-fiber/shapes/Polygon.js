import React, { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  softShadows,
  RoundedBox,
  Shadow,
  Environment,
  Extrude
} from '@react-three/drei'
import * as THREE from 'three'

function Plane({ color, ...props }) {
  return (
    <RoundedBox
      receiveShadow
      castShadow
      smoothness={10}
      radius={0.015}
      {...props}
    >
      <meshStandardMaterial color={color} envMapIntensity={0.5} />
    </RoundedBox>
  )
}

const Polygon = (props) => {
  const { points } = props
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // const step = delta * 10
    // state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 10 : 42, step / 1.5)
    // state.camera.position.lerp(v.set(zoom ? 25 : 10, zoom ? 1 : 5, zoom ? 0 : 10), step / 1.5)
    // state.camera.lookAt(0, 0, 0)
    // state.camera.updateProjectionMatrix()
    // light.current.position.lerp(v.set(zoom ? 4 : 0, zoom ? 3 : 8, zoom ? 3 : 5), step / 4)
  })

  // const ref = useTurntable()

  const extrudeSettings = React.useMemo(
    () => ({
      steps: 1,
      depth: 2,
      bevelEnabled: true,
      bevelThickness: 0,
      bevelSize: 0,
      bevelOffset: 0,
      bevelSegments: 0
    }),
    []
  )

  const shape = useMemo(() => {
    const _shape = new THREE.Shape()

    _shape.moveTo(-points[0], -points[1])
    for (let i = 2; i < points.length; i += 2) {
      _shape.lineTo(-points[i], -points[i + 1])
    }
    _shape.lineTo(-points[0], -points[1])

    return _shape
  }, [])
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {/* <Plane color="hotpink" rotation-x={-Math.PI / 2} position-z={2} scale={[20, 20, 0.2]}  /> */}
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <Extrude args={[shape, extrudeSettings]}>
        <meshStandardMaterial color={'hotpink'} envMapIntensity={0.5} />
      </Extrude>
    </mesh>
  )
}

export default Polygon
