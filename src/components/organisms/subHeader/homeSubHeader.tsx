import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {font17Px} from '../../../utils/typography';
import {black, darkYellow} from '../../../styles/colors';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import NewKundli from '../../../screens/home/subHeaderScreen/newKundliScreen';
import OpenHeader from '../../../screens/home/subHeaderScreen/openKundli';

const FirstRoute = () => <NewKundli />;
const SecondRoute = () => <OpenHeader />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
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
              fontSize: font17Px,
              fontFamily: '400',
              padding: 10,
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
export default function HomeSubHeader() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Open Kundli'},
    {key: 'second', title: 'New Kundli'},
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
    backgroundColor: darkYellow,
    height: heightToDp('7%'),
    justifyContent: 'center',
  },
  tabBarIndicator: {
    backgroundColor: black,
    borderBottomWidth: 4,
  },
  labelStyle: {width: widthToDp('10%')},
  tabStyle: {width: widthToDp('50%')},
});
