import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {black, golden, lightOrange, orange} from '../../styles/colors';
import {font16Px, font17Px, font18Px} from '../../utils/typography';
import {HORIZONTAL_5, VERTICAL_1} from '../../utils/spacing';
import {widthToDp} from '../../styles/responsive';
import {review} from '../../helpers/HomeTab';

const RatingReviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? review : review.slice(0, 2);

  const reviewCount = review.length;

  const toggleShowAllReviews = () => {
    setShowAllReviews(!showAllReviews);
  };
  return (
    <View style={{marginHorizontal: HORIZONTAL_5}}>
      <View style={styles.RatingReviews}>
        <Text style={styles.title}>Rating and reviews</Text>
        <View style={styles.reviews}>
          <MaterialIcons name="person" size={20} color={black} />
          <Text style={styles.reviewCount}>({reviewCount})</Text>
        </View>
      </View>
      {displayedReviews.length ? (
        displayedReviews?.map((val, index) => (
          <View key={index} style={styles.reviewWrapper}>
            <View>
              <MaterialIcons name="account-circle" size={62} color={black} />
              <View style={styles.rating}>
                {Array.from({length: 5}).map((_, index) => (
                  <MaterialIcons
                    key={index}
                    name="star"
                    size={12}
                    color={golden}
                  />
                ))}
              </View>
            </View>
            <View style={styles.reviewContent}>
              <Text style={styles.reviewCount}>{val?.contact}</Text>
              <Text style={styles.reviewCount}>{val?.date}</Text>
              <Text style={styles.reviewCount}>{val?.content}</Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="more-vert" size={24} color={black} />
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.reviewCount}>NA</Text>
      )}
      {displayedReviews.length ? (
        <TouchableOpacity onPress={toggleShowAllReviews}>
          <Text style={styles.seeAll}>See All Reviews</Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default RatingReviews;

const styles = StyleSheet.create({
  RatingReviews: {
    marginVertical: VERTICAL_1,
  },
  title: {
    fontSize: font18Px,
    color: orange,
  },
  reviews: {
    flexDirection: 'row',
  },
  reviewCount: {
    fontSize: font16Px,
    color: black,
  },
  rating: {
    flexDirection: 'row',
  },
  reviewWrapper: {
    flexDirection: 'row',
    gap: widthToDp('10%'),
    marginVertical: VERTICAL_1,
  },
  reviewContent: {
    justifyContent: 'flex-start',
    width: widthToDp('50%'),
  },
  seeAll: {
    color: lightOrange,
    fontSize: font17Px,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
