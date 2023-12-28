import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  black,
  lightGreen,
  lightOrange,
  lightYellow,
  orange,
} from '../../styles/colors';
import {font17Px, font18Px} from '../../utils/typography';
import {HORIZONTAL_1, HORIZONTAL_4, VERTICAL_1} from '../../utils/spacing';

import {TouchableOpacity} from 'react-native';
import {widthToDp} from '../../styles/responsive';

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.readMore}>
      <Text style={styles.readmoreText}>
        {isExpanded
          ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
          : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      </Text>
      {isExpanded && (
        <>
          <View>
            <View style={styles.expertiseWrapper}>
              <MaterialIcons name="interests" size={24} color={lightGreen} />
              <Text style={styles.expertise}>Expertise</Text>
            </View>
            <Text
              style={[
                styles.readmoreText,
                {marginHorizontal: HORIZONTAL_1, marginTop: VERTICAL_1},
              ]}>
              Vedic, Tarrot Reading
            </Text>
          </View>
          <View>
            <View style={styles.expertiseWrapper}>
              <MaterialIcons name="school" size={24} color={lightYellow} />
              <Text style={styles.expertise}>Education</Text>
            </View>
            <Text
              style={[
                styles.readmoreText,
                {marginHorizontal: HORIZONTAL_1, marginTop: VERTICAL_1},
              ]}>
              Vedic, Tarrot Reading
            </Text>
          </View>
          <View>
            <View style={styles.expertiseWrapper}>
              <MaterialIcons name="adjust" size={24} color={orange} />
              <Text style={styles.expertise}>Focus Area</Text>
            </View>
            <Text
              style={[
                styles.readmoreText,
                {marginHorizontal: HORIZONTAL_1, marginTop: VERTICAL_1},
              ]}>
              Vedic, Tarrot Reading
            </Text>
          </View>
        </>
      )}
      <TouchableOpacity style={styles.readMoreBtn} onPress={toggleReadMore}>
        <Text style={styles.readMoreTitle}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReadMore;

const styles = StyleSheet.create({
  readmoreText: {
    color: black,
    fontSize: font17Px,
    fontWeight: '400',
  },
  readMore: {
    marginHorizontal: HORIZONTAL_4,
  },
  readMoreBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  readMoreTitle: {
    color: lightOrange,
    fontSize: font17Px,
    fontWeight: '400',
  },
  expertiseWrapper: {
    flexDirection: 'row',
    marginLeft: HORIZONTAL_1,
    marginTop: VERTICAL_1,
    alignItems: 'center',
    gap: widthToDp('8%'),
  },
  expertise: {
    color: black,
    fontSize: font18Px,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
