import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {black} from '../../../styles/colors';
import {Image} from 'react-native';
import {yearBanner} from '../../../utils/images';
import {heightToDp} from '../../../styles/responsive';
import {KundliDataProps} from '../../../helpers/commonText';
import KundliData from '../../../components/molecules/common/kundliData';

const Year = () => {
  return (
    <ScrollView>
      <View>
        <Image source={yearBanner} style={styles.homeBanner} />
      </View>
      <View>
        {KundliDataProps.map((data, index) => (
          <KundliData key={index} {...data} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Year;

const styles = StyleSheet.create({
  heading: {
    color: black,
  },
  homeBanner: {width: 'auto', height: heightToDp('10%')},
});
