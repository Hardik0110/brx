/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 naruto.glb 
Author: Daniel Roman (https://sketchfab.com/bizarromed)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/beetle-stylized-24b35ef164dd4db3ad3c0f228b4af6b3
Title: Beetle  Stylized
*/

import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, SSAO, Bloom} from '@react-three/postprocessing'
import { motion } from 'framer-motion-3d'

export function HeroDisplay({isToggle, props}) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/naruto.glb')
  const variants = {
    initial: {
      x: -201, y:-100, z:-300, 
      rotateY:(-45* Math.PI)/180
    },
    rotate:{
      x:0, y:-5, z:0, rotateY:(-20* Math.PI)/180
    }
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 50
    ref.current.rotation.y = (-15 + Math.sin(t / 1.5)) / 20
  })
  
  return (
    <motion.group ref={ref}  {...props} dispose={null} 
        // rotation={[0, 45* Math.PI/180,0]} 
        initial={"initial"}
        animate={"rotate"}
        transition={{
          duration:1,
        }}
        variants={variants}
        >
      <group scale={0.4}>
        <mesh geometry={nodes.Chair_LP_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.Beetle_LP_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.Eye_Right_LP_lambert1_0.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.Eye_Left_LP_lambert1_0.geometry} material={materials.lambert1} />
      </group>
    </motion.group>
  )
}

useGLTF.preload('/naruto.glb')
