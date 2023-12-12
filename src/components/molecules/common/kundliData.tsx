import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {black, gray} from '../../../styles/colors';
import {font16Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {VERTICAL_2} from '../../../utils/spacing';

interface KundliDataProps {
  imageSource: any;
  textValue1: string;
  textValue2: string;
  textValue3: string;
}

const KundliData: React.FC<KundliDataProps> = ({
  imageSource,
  textValue1,
  textValue2,
  textValue3,
}) => {
  const handleOnClick = () => {};
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={handleOnClick}>
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
export default KundliData;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1.8,
    borderBottomColor: '#d9d8d7',
    opacity: 20,
    borderTopWidth: 1.8,
    borderTopColor: '#d9d8d7',
  },
  kundliWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: widthToDp('35%'),
    borderRightWidth: 1,
    borderRightColor: gray,
  },
  kundliLogo: {width: widthToDp('10%'), height: heightToDp('5%')},
  kundliText: {
    color: black,
    fontSize: font16Px,
    fontWeight: '600',
    paddingTop: VERTICAL_2,
  },
});
