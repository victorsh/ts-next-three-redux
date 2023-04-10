import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  useEffect(() => {
    console.log(Boolean(mesh.current))
  }, [])

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1,1,1]} />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box
