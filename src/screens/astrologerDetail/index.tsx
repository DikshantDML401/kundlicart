import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import AstroDetailsBanner from '../../components/molecules/AstroDetailsBanner';
import AstroRatingCircle from '../../components/atoms/AstroRatingCircle';
import {black, lightOrange, mediumGray, white} from '../../styles/colors';
import {font17Px} from '../../utils/typography';
import {
  HORIZONTAL_4,
  HORIZONTAL_5,
  VERTICAL_1,
  VERTICAL_2,
} from '../../utils/spacing';
import LineBreak from '../../components/atoms/LineBreak';
import {widthToDp} from '../../styles/responsive';

const AstrologerDetail = () => {
  return (
    <View>
      <AstroDetailsBanner />
      <View style={styles.chargesContainer}>
        <View style={styles.consultationContainer}>
          <Text style={styles.text}>Consultation Charges</Text>
          <Text style={styles.text}>
            New User ₹ <Text style={styles.lineThrough}>89/min</Text>
            <Text style={styles.actualPrice}>10/min</Text>
          </Text>
        </View>
        <AstroRatingCircle />
      </View>
      <LineBreak />
      <View>
        <View style={styles.AboutAstroText}>
          <Text style={[styles.text, {color: lightOrange}]}>
            About Astrologer
          </Text>
          <View style={styles.giftCircle}>
            <Feather name="gift" size={24} color={white} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AstrologerDetail;

const styles = StyleSheet.create({
  chargesContainer: {
    flexDirection: 'row',
    marginVertical: VERTICAL_1,
  },
  consultationContainer: {
    marginHorizontal: HORIZONTAL_5,
  },
  text: {
    color: black,
    fontSize: font17Px,
    fontWeight: '500',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: mediumGray,
    fontSize: font17Px,
    fontWeight: '300',
  },
  actualPrice: {
    color: mediumGray,
    fontSize: font17Px,
    fontWeight: '300',
  },
  AboutAstroText: {
    flexDirection: 'row',
    marginHorizontal: HORIZONTAL_4,
    marginVertical: VERTICAL_2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  giftCircle: {
    backgroundColor: lightOrange,
    padding: widthToDp('2%'),
    borderRadius: widthToDp('20%'),
  },
});
