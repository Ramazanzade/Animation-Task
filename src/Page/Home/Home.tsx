// import DocumentPicker from 'react-native-document-picker';
// import React, { useCallback, useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const Home = () => {
//     const [fileResponse, setFileResponse] = useState<any>([]);

//     const handleDocumentSelection = useCallback(async () => {
//       try {
//         const response = await DocumentPicker.pick({
//           presentationStyle: 'fullScreen',
//         });
//         setFileResponse(response);

//       } catch (err) {
//         console.warn(err);
//       }
//     }, []);
//     return (
//         <View >
//          {fileResponse.map((file:any, index:any) => (
//         <Text
//           key={index.toString()}
//         //   style={styles.uri}
//           numberOfLines={1}
//           ellipsizeMode={'middle'}>
//           {file?.uri}
//         </Text>
//       ))}
//       <Button title="Select 📑" onPress={handleDocumentSelection} />
//       </View>
//     )
// }

// export default Home



import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model = () => {
  const gltfPath = '../../Asset/imge/2.glb';
  const gltfRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(gltfPath, (gltf:any) => {
      gltfRef.current = gltf.scene;
    });
  }, [gltfPath]);

  useEffect(() => {
    if (camera && gl) {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.enableDamping = true;
      controls.update();

      return () => {
        controls.dispose();
      };
    }
  }, [camera, gl]);

  return (
    <group>
      {gltfRef.current && <primitive object={gltfRef.current} />}
    </group>
  );
};

const Home = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  );
};

export default Home;

