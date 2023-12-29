import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {black, bodyColor, white} from '../../../styles/colors';
import {font16Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {VERTICAL_2} from '../../../utils/spacing';
import {RootStackParamList} from '../../../navigation/types';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation<RootStackParamList>();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AppStack', {
            screen: 'Dashboard',
            params: {
              screen: 'OpenKundli',
            },
          })
        }>
        <View style={styles.kundliWrapper}>
          <Image source={imageSource} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>{textValue1}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AppStack', {
            screen: 'Dashboard',
            params: {
              screen: 'Matching',
            },
          })
        }>
        <View style={styles.kundliWrapper}>
          <Image source={imageSource} style={styles.kundliLogo} />
          <Text style={styles.kundliText}>{textValue2}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AppStack', {
            screen: 'Dashboard',
            params: {
              screen: 'Horoscope',
            },
          })
        }>
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
    opacity: 20,
    backgroundColor: bodyColor,
    padding: 1,
  },
  kundliWrapper: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: widthToDp('35%'),
    borderRightWidth: 0.7,
    borderRightColor: bodyColor,
    backgroundColor: white,
  },
  kundliLogo: {width: widthToDp('10%'), height: heightToDp('5%')},
  kundliText: {
    color: black,
    fontSize: font16Px,
    fontWeight: '600',
    paddingTop: VERTICAL_2,
  },
});
