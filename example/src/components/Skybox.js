import { useTexture } from "@react-three/drei";
import { BackSide } from "three";

export default function SkyBox() {
  const texture = useTexture("/digital_painting_golden_hour_sunset.jpg");

  return (
    <mesh userData={{ lensflare: "no-occlusion" }} scale={[-1, 1, 1]}>
      <sphereGeometry
        castShadow={false}
        receiveShadow={false}
        args={[50, 32, 32]}
      />
      <meshBasicMaterial toneMapped={false} map={texture} side={BackSide} />
    </mesh>
  );
}
