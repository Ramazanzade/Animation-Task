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
import { View, Text } from 'react-native';
import ModelView from 'react-native-gl-model-view';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <ModelView
        // model={{
        //   localSource: require('../../Asset/imge/Soldier.glb'),
        // }}
        texture={{
          localSource: require('../../Asset/imge/1.png'),
        }}
        style={{ flex: 1, width: 300, height: 300, backgroundColor: 'transparent' }}
      />
    </View>
  );
};

export default Home;
