import * as React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {black} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {lable2} from '../../utils/typography';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;
const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const FourthRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);
const FifthRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
});
const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabBarIndicator}
    scrollEnabled
    style={styles.tabBar}
    renderLabel={({route, focused}) => (
      <Text
        style={{
          color: focused ? 'red' : black,
          fontFamily: '400',
          fontSize: lable2,
        }}>
        {route.title}
      </Text>
    )}
  />
);
export default function Notification() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Home'},
    {key: 'second', title: '2024'},
    {key: 'third', title: 'ASTRO SHOP CONSULT'},
    {key: 'fourth', title: 'REPORTS'},
    {key: 'fifth', title: 'VIDEO'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#dbbb46',
    height: heightToDp('8%'),
    justifyContent: 'center',
  },
  tabBarIndicator: {
    backgroundColor: '#c9a830',
  },
});
