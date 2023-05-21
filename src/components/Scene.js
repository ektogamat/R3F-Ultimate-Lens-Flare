import { Billboard, Bvh, Center, MeshTransmissionMaterial, Text, Text3D } from '@react-three/drei'
import SkyBox from './Skybox'

export default function Scene(props) {
  return (
    <>
      <Center>
        <SkyBox />
        <Billboard position={[0, -1.0, 0]}>
          <Text
            userData={{ lensflare: 'no-occlusion' }} //Add this to make lens flare ignore occlusion
            color={'black'}
            letterSpacing={-0.05}
            font="/Inter-Bold.woff"
            fontSize={3}
            fillOpacity={0.6}
            position={[-0.85, 2.4, 0]}>
            LENS
          </Text>
          <Text color={'BLACK'} letterSpacing={-0.05} font="/Inter-Bold.woff" fontSize={3}>
            FLARE
          </Text>
        </Billboard>
      </Center>
    </>
  )
}
