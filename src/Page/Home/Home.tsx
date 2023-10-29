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













import React from 'react';
import { Text, View } from 'react-native';
import ModelView from 'react-native-gl-model-view';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ModelView
        model={{
          uri: 'https://sketchfab.com/3d-models/soldier-672d070325134e3d9f8a7d2bf012183b', // Replace with the actual path to your .glb file
        }}
        style={{ flex: 1 }}
      />
      <Text style={{color:'red'}}>Salam</Text>
    </View>
  );
};


export default Home;

