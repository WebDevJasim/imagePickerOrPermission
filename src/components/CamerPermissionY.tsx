import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';
const CamerPermissionY = () => {
  const askForPermission = permission => {
    request(permission).then(result => {
      console.log(result);

      // …
    });
  };

  return (
    <SafeAreaView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS == 'ios') {
              askForPermission(PERMISSIONS.IOS.CAMERA);
            } else {
              askForPermission(PERMISSIONS.ANDROID.CAMERA);
            }
          }}
          style={{
            width: '50%',
            height: 50,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            alignSelf: 'center',
          }}>
          <Text>Camer Permission</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS == 'ios') {
              askForPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
            } else {
              askForPermission(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
            }
          }}
          style={{
            width: '50%',
            height: 50,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            alignSelf: 'center',
          }}>
          <Text>Image Gallery Permission</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS == 'ios') {
              askForPermission(PERMISSIONS.IOS.CONTACTS);
            } else {
              askForPermission(PERMISSIONS.ANDROID.READ_CONTACTS);
            }
          }}
          style={{
            width: '50%',
            height: 50,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            alignSelf: 'center',
          }}>
          <Text>Contacts Permission</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CamerPermissionY;
