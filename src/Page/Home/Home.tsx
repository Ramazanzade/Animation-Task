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













// import React from 'react';
// import { Text, View } from 'react-native';
// import ModelView from 'react-native-gl-model-view';

// const Home = () => {
//   return (
//     <View style={{ flex: 1 }}>
//       <ModelView
//         model={{
//           uri: require('../../Asset/imge/2.glb') // Replace with the actual path to your .glb file
//         }}
//         style={{ flex: 1 }}
//       />
//       <Text style={{color:'red'}}>Salam</Text>
//     </View>
//   );
// };


// export default Home;

import React  from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import {useGLTF } from '@react-three/drei';
import Model from './Home2';
import useControls from 'r3f-native-orbitcontrols';
import { View } from 'react-native';

const Home = () => {
  const [OrbitControls, events] = useControls();

  return (
   <View {...events}>
     <Canvas>
      <OrbitControls enablePan={false} />
      <directionalLight position={[1, 0, 0]} args={['white', 5]} />
      <directionalLight position={[-1, 0, 0]} args={['white', 5]} />
      <directionalLight position={[0, 0, 1]} args={['white', 5]} />
      <directionalLight position={[0, 0, -1]} args={['white', 5]} />
      <directionalLight position={[0, 1, 0]} args={['white', 5]} />
      <directionalLight position={[0, -1, 0]} args={['white', 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
   </View>
  );
};

export default Home;



