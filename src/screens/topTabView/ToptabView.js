import React from 'react';
import {Text} from 'react-native';
import {View, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const initialLayout = {width: Dimensions.get('window').width};

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: '#ff4081'}}>
    <Text style={{color: 'black'}}>TOpTab</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}}>
    <Text style={{color: 'black'}}>TOpTab</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const TabViewComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    // Add more routes as needed
  ]);

  const onIndexChange = i => {
    setIndex(i);
  };

  return (
    <TabView
      renderTabBar={() => null}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={onIndexChange}
      initialLayout={initialLayout}
    />
  );
};

export default TabViewComponent;
