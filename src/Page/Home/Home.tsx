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














import React, { useRef, useEffect } from 'react';
import { View } from 'react-native';
import  {Canvas} from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { P3Primaries } from 'three';

const Home = (props: any) => {
  const modelRef = useRef<any>();

  useEffect(() => {
    const gltfLoader = new GLTFLoader();

    gltfLoader.load('../../Asset/imge/Soldier.glb', (gltf:any) => {
      const model = gltf.scene;
      if (modelRef.current) {
        modelRef.current.add(model);
      }
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <P3Primaries object={modelRef.current} />
      </Canvas>
    </View>
  )
}
export default Home;
