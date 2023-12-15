/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {black, darkYellow} from '../../styles/colors';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {heightToDp, widthToDp} from '../../styles/responsive';
import Wallet from './Wallet';
import CallHistory from './CallHistory';
import ChatHistory from './ChatHistory';
import {font18Px} from '../../utils/typography';

const FirstRoute = () => <Wallet />;
const SecondRoute = () => <CallHistory />;
const ThirdRoute = () => <ChatHistory />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = (props: any) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      scrollEnabled
      style={styles.tabBar}
      labelStyle={styles.labelStyle}
      tabStyle={styles.tabStyle}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            {
              fontSize: font18Px,
              fontWeight: '400',
              padding: widthToDp('1%'),
            },
            focused
              ? {
                  color: '#050505',
                  fontFamily: 'bold',
                }
              : {
                  color: 'black',
                  opacity: 0.4,
                },
          ]}>
          {route.title}
        </Text>
      )}
    />
  );
};

export default function History() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'first', title: 'Wallet'},
    {key: 'second', title: 'Call history'},
    {key: 'third', title: 'Chat history'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: widthToDp('100%')}}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: darkYellow,
    height: heightToDp('7%'),
    justifyContent: 'center',
  },
  tabBarIndicator: {
    backgroundColor: black,
    borderBottomWidth: 4,
  },
  labelStyle: {width: 'auto'},
  tabStyle: {width: 'auto'},
});
