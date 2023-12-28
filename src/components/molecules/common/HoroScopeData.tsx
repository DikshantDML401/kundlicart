import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {black, bodyColor, white} from '../../../styles/colors';
import {font16Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {VERTICAL_2} from '../../../utils/spacing';

interface KundliDataProps {
  imageSource: any;
  textValue1: string;
  textValue2: string;
  textValue3: string;
}

const HoroScope: React.FC<KundliDataProps> = ({
  imageSource,
  textValue1,
  textValue2,
  textValue3,
}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <View style={styles.kundliWrapper}>
          <Image source={imageSource} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>{textValue1}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.kundliWrapper}>
          <Image source={imageSource} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>{textValue2}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.kundliWrapper}>
          <Image source={imageSource} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>{textValue3}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HoroScope;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 20,
    backgroundColor: bodyColor,
    padding: 0.7,
  },
  kundliWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: widthToDp('35%'),
    borderRightWidth: 0.7,
    borderRightColor: bodyColor,
    backgroundColor: white,
  },
  kundliLogo: {width: widthToDp('16%'), height: heightToDp('8%')},
  kundliText: {
    color: black,
    fontSize: font16Px,
    fontWeight: '600',
    paddingTop: VERTICAL_2,
  },
});
