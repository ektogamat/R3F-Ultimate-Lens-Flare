import { Canvas } from '@react-three/fiber'
import LensFlare from './effects/UltimateLensFlare'
import { Environment, Loader, OrbitControls } from '@react-three/drei'
import Overlay from './components/Overlay'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { folder, useControls } from 'leva'
import { Color } from 'three'
import Scene from './components/Scene'
import { Suspense } from 'react'
import { BlendFunction } from 'postprocessing'

export default function App() {
  const lensFlareProps = useControls({
    LensFlare: folder(
      {
        enabled: { value: true, label: 'enabled?' },
        opacity: { value: 1.0, min: 0.0, max: 1.0, label: 'opacity' },
        position: {value: { x: -25, y: 6, z: -60 }, step: 1, label: 'position'},
        glareSize: { value: 0.35, min: 0.01, max: 1.0, label: 'glareSize'},
        starPoints: { value: 6.0, step: 1.0, min: 0, max: 32.0, label: 'starPoints'},
        animated: { value: true, label: 'animated?'},
        followMouse: { value: false, label: 'followMouse?'},
        anamorphic: { value: false, label: 'anamorphic?'},
        colorGain: { value: new Color(56, 22, 11), label: 'colorGain'},

        Flare: folder({
          flareSpeed: { value: 0.4, step: 0.001, min: 0.0, max: 1.0, label: 'flareSpeed'},
          flareShape: { value: 0.1, step: 0.001, min: 0.0, max: 1.0, label: 'flareShape'},
          flareSize: { value: 0.005, step: 0.001, min: 0.0, max: 0.01, label: 'flareSize'}
        }),

        SecondaryGhosts: folder({
          secondaryGhosts: { value: true, label: 'secondaryGhosts?'},
          ghostScale: { value: 0.1, min: 0.01, max: 1.0, label: 'ghostScale'},
          aditionalStreaks: { value: true, label: 'aditionalStreaks?'}
        }),

        StartBurst: folder({
          starBurst: { value: true, label: 'starBurst?'},
          haloScale: { value: 0.5, step: 0.01, min: 0.3, max: 1.0}
        })
      },
      { collapsed: true}
    )
  })

  return (
    <>
      <Canvas dpr={1} gl={{alpha:false, powerPreference: "high-performance", stencil: false, antialias: false, depth: false }} camera={{ position: [8, 1, 10], near: 0.5, fov: 45 }}>


        <OrbitControls autoRotate autoRotateSpeed={0.3} zoomSpeed={4} maxDistance={60} />
        <directionalLight intensity={3} position={[-25, 60, -60]} />

        <Suspense fallback={null}>
          <Scene />
          <EffectComposer multisampling={false} disableNormalPass>
          <Vignette />
          <Bloom mipmapBlur radius="0.9" luminanceThreshold="0.966" intensity="2" levels="4" />
          <LensFlare {...lensFlareProps} dirtTextureFile={'/lensDirtTexture.png'} /> {/* Just instanciate like this */}
        </EffectComposer>
        </Suspense>
      </Canvas>
      <Loader />
      <Overlay />
    </>
  )
}
