import * as React from 'react';
import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {font16Px} from '../../../utils/typography';
import {black, darkYellow} from '../../../styles/colors';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import OpenKundli from '../../../screens/home/subHeaderScreen/newKundliScreen';
import NewMatching from '../../../screens/home/subHeaderScreen/newMatching';

const FirstRoute = () => <OpenKundli />;
const SecondRoute = () => <NewMatching />;

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
              fontSize: font16Px,
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
interface MatchingSubHeaderProps {
  titleLeft?: string;
  titleRight?: string;
}

export const MatchingSubHeader: React.FC<MatchingSubHeaderProps> = ({
  titleLeft,
  titleRight,
}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: titleLeft},
    {key: 'second', title: titleRight},
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
};
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
