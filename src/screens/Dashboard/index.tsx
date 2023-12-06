/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {black, darkGray, lightYellow, primaryColor} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {lable2} from '../../utils/typography';
import {HomeRoutes} from '../../helpers/HomeTab';

const FirstRoute = () => <View style={{flex: 1}} />;
const SecondRoute = () => <View style={{flex: 1}} />;
const ThirdRoute = () => <View style={{flex: 1}} />;
const FourthRoute = () => <View style={{flex: 1}} />;
const FifthRoute = () => <View style={{flex: 1}} />;
const SixthRoute = () => <View style={{flex: 1}} />;
const SeventhRoute = () => <View style={{flex: 1}} />;
const EightRoute = () => <View style={{flex: 1}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SeventhRoute,
  eight: EightRoute,
});

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.tabBarIndicator}
    style={styles.tabBar}
    scrollEnabled
    renderLabel={({route, focused}) => (
      <Text
        style={{
          color: focused ? black : darkGray,
          fontSize: lable2,
          width: widthToDp('25%'),
          textAlign: 'center',
        }}>
        {route.title}
      </Text>
    )}
  />
);

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  const [routes] = useState(HomeRoutes);

  return (
    <TabView
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: widthToDp('100%')}}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: lightYellow,
    height: heightToDp('6.5%'),
    justifyContent: 'center',
  },
  tabBarIndicator: {
    backgroundColor: primaryColor,
  },
});
