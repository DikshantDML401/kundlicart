import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {homeBanner, kundliLogo} from '../../../utils/images';
import {heightToDp} from '../../../styles/responsive';
import KundliData from '../../../components/molecules/common/kundliData';
import LiveChat from '../../../components/molecules/LiveChat';

const Homepage = () => {
  const KundliDataProps = {
    imageSource: kundliLogo,
    textValue1: 'Kundli',
    textValue2: 'Matching',
    textValue3: 'Horoscope',
  };
  return (
    <View>
      <Image source={homeBanner} style={styles.homeBanner} />
      <KundliData {...KundliDataProps} />
      <LiveChat />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  homeBanner: {width: 'auto', height: heightToDp('10%')},
});
