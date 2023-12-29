import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  black,
  darkOrange,
  lightGreen,
  lightOrange,
  lightYellow,
  lightgrey,
  orange,
  white,
} from '../../styles/colors';
import {font16Px, font17Px, font18Px} from '../../utils/typography';
import {
  HORIZONTAL_1,
  HORIZONTAL_3,
  HORIZONTAL_4,
  VERTICAL_1,
} from '../../utils/spacing';

import {widthToDp} from '../../styles/responsive';
import LineBreak from '../atoms/LineBreak';
import {useTranslation} from '../hooks/useTranslation';

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {t} = useTranslation();

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View style={styles.readMore}>
      <Text style={styles.readmoreText}>
        {isExpanded
          ? `${t('ReadMore.readMoreText')}`
          : `${t('ReadMore.seeLessText')}`}
      </Text>
      {isExpanded && (
        <>
          <View>
            <View style={styles.expertiseWrapper}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="interests"
                  size={24}
                  color={lightGreen}
                  style={styles.expertiseIcon}
                />
              </View>
              <View>
                <Text style={styles.expertise}>Expertise</Text>
                <LineBreak lineStyle={styles.linebreak} />
              </View>
            </View>
            <Text style={styles.skillText}>Vedic, Tarrot Reading</Text>
          </View>
          <View>
            <View style={styles.expertiseWrapper}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="school"
                  size={24}
                  color={lightYellow}
                  style={styles.expertiseIcon}
                />
              </View>
              <View>
                <Text style={styles.expertise}>Education</Text>
                <LineBreak lineStyle={styles.linebreak} />
              </View>
            </View>
            <Text style={styles.skillText}>Vedic, Tarrot Reading</Text>
          </View>
          <View>
            <View style={styles.expertiseWrapper}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="adjust"
                  size={24}
                  color={orange}
                  style={styles.expertiseIcon}
                />
              </View>
              <View>
                <Text style={styles.expertise}>Focus Area</Text>
                <LineBreak lineStyle={styles.linebreak} />
              </View>
            </View>
            <Text style={styles.skillText}>Vedic, Tarrot Reading</Text>
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
  },
  linebreak: {
    marginTop: widthToDp('2%'),
    borderWidth: widthToDp('0.05%'),
    width: widthToDp('35%'),
    borderColor: darkOrange,
  },
  expertiseIcon: {
    backgroundColor: lightgrey,
    borderRadius: widthToDp('20%'),
    padding: widthToDp('2%'),
  },
  iconContainer: {
    backgroundColor: white,
    borderRadius: widthToDp('20%'),
    padding: widthToDp('1.5%'),
  },
  skillText: {
    color: black,
    fontSize: font16Px,
    marginLeft: HORIZONTAL_3,
    marginTop: VERTICAL_1,
  },
});
