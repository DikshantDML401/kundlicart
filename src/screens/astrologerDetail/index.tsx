/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import AstroDetailsBanner from '../../components/molecules/AstroDetailsBanner';
import AstroRatingCircle from '../../components/atoms/AstroRatingCircle';
import {black, lightOrange, mediumGray, white} from '../../styles/colors';
import {font16Px, font18Px} from '../../utils/typography';
import {
  HORIZONTAL_3,
  HORIZONTAL_4,
  HORIZONTAL_5,
  VERTICAL_1,
  VERTICAL_2,
  VERTICAL_3,
  VERTICAL_5,
} from '../../utils/spacing';
import LineBreak from '../../components/atoms/LineBreak';
import {widthToDp} from '../../styles/responsive';
import ReadMore from '../../components/molecules/ReadMore';
import RatingReviews from '../../components/molecules/RatingReviews';
import {astrologersBioData} from '../../helpers/commonText';
import ChatWithAstrologer from '../../components/molecules/common/ChatAstrologerSlider';

const AstrologerDetail = () => {
  const ChatWithAstrologerProps = {
    astrologers: astrologersBioData,
    showIcon: false,
  };
  return (
    <ScrollView style={{flex: 1}}>
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
          <Text style={[styles.aboutAstroText, {color: lightOrange}]}>
            About Astrologer
          </Text>
          <View style={styles.giftCircle}>
            <Feather name="gift" size={24} color={white} />
          </View>
        </View>
        <ReadMore />
        <RatingReviews />
      </View>
      <View style={styles.similarAstrologers}>
        <Text style={styles.seeAstrologers}>See Similar Astrologers</Text>
      </View>
      <View style={{marginHorizontal: HORIZONTAL_3, marginBottom: VERTICAL_3}}>
        <ChatWithAstrologer {...ChatWithAstrologerProps} />
      </View>
    </ScrollView>
  );
};

export default AstrologerDetail;

const styles = StyleSheet.create({
  chargesContainer: {
    flexDirection: 'row',
    marginTop: VERTICAL_1,
  },
  consultationContainer: {
    marginHorizontal: HORIZONTAL_5,
  },
  text: {
    color: black,
    fontSize: font16Px,
    fontWeight: '500',
  },
  aboutAstroText: {
    fontSize: font18Px,
    fontWeight: '400',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: mediumGray,
    fontSize: font16Px,
    fontWeight: '300',
  },
  actualPrice: {
    color: mediumGray,
    fontSize: font16Px,
    fontWeight: '300',
  },
  AboutAstroText: {
    flexDirection: 'row',
    marginHorizontal: HORIZONTAL_4,
    marginTop: VERTICAL_2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  giftCircle: {
    backgroundColor: lightOrange,
    padding: widthToDp('2%'),
    borderRadius: widthToDp('20%'),
  },
  seeAstrologers: {
    fontSize: font18Px,
    color: black,
    fontWeight: '500',
    marginHorizontal: HORIZONTAL_5,
  },
  similarAstrologers: {
    marginTop: VERTICAL_5,
  },
});
