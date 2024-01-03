import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  Camera,
  CameraPermissionStatus,
  useCameraDevices,
} from 'react-native-vision-camera';

const Live = () => {
  const {devices, selectedDevice, setDevice} = useCameraDevices();

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    let cameraPermission: CameraPermissionStatus =
      await Camera.getCameraPermissionStatus();
    let microphonePermission: CameraPermissionStatus =
      await Camera.getMicrophonePermissionStatus();

    if (cameraPermission !== 'authorized') {
      cameraPermission = await Camera.requestCameraPermission();
    }

    if (microphonePermission !== 'authorized') {
      microphonePermission = await Camera.requestMicrophonePermission();
    }

    console.log('Camera Permission:', cameraPermission);
    console.log('Microphone Permission:', microphonePermission);

    const availableDevices = await Camera.getAvailableCameraDevices();
    console.log('Available Devices:', availableDevices);

    if (cameraPermission === 'authorized' && availableDevices.length > 0) {
      setDevice(availableDevices[0]); // Select the first available device (back camera)
    }
  };

  if (!selectedDevice) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={selectedDevice}
        isActive={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Live;
