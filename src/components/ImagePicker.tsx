import {View, Text, SafeAreaView, Button, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = () => {
  const [imageUri, setImageUri] = useState('');
  const openCamera = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log(`user cancel image picker`);
      } else if (response.error) {
        console.log(`imagePicker error`, response.error);
      } else if (response.customButton) {
        console.log(`user tapped custom button`, response.customButton);
      } else {
        // You can also display image using data
        const source = {uri: 'data:image/jpeg;base64,' + response.base64};
        setImageUri(source);
      }
    });
  };

  const openGallery = () => {
    const openCamera = () => {
      let options = {
        storageOption: {
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: true,
      };
      launchImageLibrary(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
          console.log(`user cancel image picker`);
        } else if (response.error) {
          console.log(`imagePicker error`, response.error);
        } else if (response.customButton) {
          console.log(`user tapped custom button`, response.customButton);
        } else {
          // You can also display image using data
          const source = {uri: 'data:image/jpeg;base64,' + response.base64};
          setImageUri(source);
        }
      });
    };
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignself: 'center',
          flex: 1,
        }}>
        <Button
          title={'Open Camara'}
          onPress={() => {
            openCamera();
          }}
        />
        <Image
          source={imageUri}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
          }}
        />
        <Button
          title={'Open Camara'}
          onPress={() => {
            openGallery();
          }}
        />
        <Image
          source={imageUri}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: 'black',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImagePicker;
