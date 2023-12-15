import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {yearBanner} from '../../../utils/images';
import {heightToDp} from '../../../styles/responsive';
import KundliData from '../../../components/molecules/common/kundliData';
import {KundliDataProps} from '../../../helpers/commonText';

const AstroShop = () => {
  return (
    <ScrollView>
      <View>
        {KundliDataProps.map((data, index) => (
          <KundliData key={index} {...data} />
        ))}
      </View>
      <View>
        <Image source={yearBanner} style={styles.homeBanner} />
      </View>
    </ScrollView>
  );
};

export default AstroShop;

const styles = StyleSheet.create({
  homeBanner: {width: 'auto', height: heightToDp('10%')},
});
