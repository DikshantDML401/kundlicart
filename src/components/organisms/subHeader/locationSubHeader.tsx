import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {black, darkYellow} from '../../../styles/colors';
import {heightToDp} from '../../../styles/responsive';
import {font16Px, lable2} from '../../../utils/typography';
import CitySearch from '../../../screens/location/citySearch';
import CustomCity from '../../../screens/location/customCity';
import GpsScreen from '../../../screens/location/gpsScreen';

const FirstRoute = () => <CitySearch />;
const SecondRoute = () => <CustomCity />;
const ThirdRoute = () => <GpsScreen />;

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
              fontSize: lable2,
              fontFamily: '400',
              padding: 10,
            },
            focused
              ? {
                  color: '#050505',
                  fontFamily: 'bold',
                  fontSize: font16Px,
                }
              : {
                  color: black,
                  opacity: 0.4,
                  fontSize: font16Px,
                  fontFamily: 'bold',
                },
          ]}>
          {route.title}
        </Text>
      )}
    />
  );
};
export default function LocationSubHeader() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'CITY SEARCH'},
    {key: 'second', title: 'CUSTOM CITY'},
    {key: 'third', title: 'G.P.S.'},
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
  labelStyle: {width: 'auto'},
  tabStyle: {width: 'auto'},
});
