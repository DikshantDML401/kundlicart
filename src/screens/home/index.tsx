import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {heightToDp} from '../../styles/responsive';
import {lable2} from '../../utils/typography';
import {black, darkYellow} from '../../styles/colors';
import Homepage from '../topNavigationScreens/home';
import Year from '../topNavigationScreens/year';
import AstroShop from '../topNavigationScreens/astroShop';
import Reports from '../topNavigationScreens/reports';
import Video from '../topNavigationScreens/videos';
import Consult from '../topNavigationScreens/consult';

const FirstRoute = () => <Homepage />;
const SecondRoute = () => <Year />;
const ThirdRoute = () => <AstroShop />;
const FourthRoute = () => <Consult />;
const FifthRoute = () => <Reports />;
const SixthRoute = () => <Video />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
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
export default function Home() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'HOME'},
    {key: 'second', title: '2024'},
    {key: 'third', title: 'ASTRO SHOP'},
    {key: 'fourth', title: 'CUNSULT'},
    {key: 'fifth', title: 'REPORTS'},
    {key: 'sixth', title: 'Video'},
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
