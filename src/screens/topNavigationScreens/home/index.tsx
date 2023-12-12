import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {homeBanner, kundliLogo} from '../../../utils/images';
import {heightToDp} from '../../../styles/responsive';
import KundliData from '../../../components/molecules/common/kundliData';
import LiveChat from '../../../components/molecules/LiveChatSlider';

const Homepage = () => {
  const KundliDataProps = {
    imageSource: kundliLogo,
    textValue1: 'Kundli',
    textValue2: 'Matching',
    textValue3: 'Horoscope',
  };
  const astrologersData = [
    {name: 'Pandit ji', live: true},
    {name: 'Pandit ji', live: true},
    {name: 'Pandit ji', live: true},
    {name: 'Pandit ji', live: true},
    {name: 'Pandit ji', live: true},
    {name: 'Pandit ji', live: true},
  ];

  const LiveChatTitleProps = {
    topHeadingText: 'KundliKart Live TV',
    astrologers: astrologersData,
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={homeBanner} style={styles.homeBanner} />
        <KundliData {...KundliDataProps} />
        <LiveChat {...LiveChatTitleProps} />
      </View>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {flex: 1},
  homeBanner: {width: 'auto', height: heightToDp('10%')},
});
