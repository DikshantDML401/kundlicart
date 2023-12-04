import React from 'react';
import {View} from 'react-native';
import RootNavigator from './src/navigation/appNavigators/RootNavigation';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <RootNavigator />
    </View>
  );
};

export default App;
