/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigation/appNavigators/RootNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
