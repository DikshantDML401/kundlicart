import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AstroDetailsBanner from '../../components/molecules/AstroDetailsBanner';
import AstroRatingCircle from '../../components/atoms/AstroRatingCircle';
import {black, mediumGray} from '../../styles/colors';
import {font17Px} from '../../utils/typography';
import {HORIZONTAL_5} from '../../utils/spacing';

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
    </View>
  );
};

export default AstrologerDetail;

const styles = StyleSheet.create({
  chargesContainer: {
    flexDirection: 'row',
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
});
