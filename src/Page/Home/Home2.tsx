
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {GLTF} from 'three-stdlib';
import { GLView } from 'expo-gl';

type GLTFResult = GLTF & {
  nodes: {
    eagle1: THREE.Mesh;
  };
  materials: {};
};
export default function Model(props:any) {
  const { nodes, materials } = useGLTF(require("../../Asset/imge/2.glb")) as GLTFResult


  return (
    <group {...props} dispose={null} scale={7} position={[0,-1.4,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eagle1.geometry}
        material={nodes.eagle1.material}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload(require("../../Asset/imge/2.glb"));