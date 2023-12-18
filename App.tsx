/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/navigation/appNavigators/RootNavigation';

const App = () => {
  useEffect(() => {
    const splashScreenTimer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    // Clear the timer to avoid any issues when the component unmounts
    return () => clearTimeout(splashScreenTimer);
  }, []);
  // useEffect(() => {
  //   if (Platform.OS === 'android') SplashScreen.hide();
  // }, []);
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
