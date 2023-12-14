/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black, blue, darkYellow} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {astroList} from '../../helpers/HomeTab';
import {astroRating} from '../../helpers/HomeTab';
import {font18Px} from '../../utils/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import ActionButton from '../atoms/ActionButton';

const AstroProfileCard = () => {
  return (
    <>
      {astroList &&
        astroList?.map(item => (
          <TouchableOpacity>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.astroProfile}>
                <Text
                  style={[
                    styles.astroProfileData,
                    {fontSize: font18Px, fontWeight: '500'},
                  ]}>
                  {item.name}
                  <Icon name="check-circle-outline" size={18} color={blue} />
                </Text>
                <Text style={styles.astroProfileData}>{item.type}</Text>
                <Text style={styles.astroProfileData}>{item.lang}</Text>
                <Text style={styles.astroProfileData}>{item.exp}</Text>
                <Text style={styles.astroProfileData}>
                  Free ₹
                  <Text style={{textDecorationLine: 'line-through'}}>
                    {' '}
                    {item.free}
                  </Text>
                </Text>
              </View>
              <View style={styles.rating}>
                {astroRating &&
                  astroRating?.map(item => (
                    <View style={styles.astroRating}>
                      {item.icon}
                      <Text style={{color: black}}>{item.rating}</Text>
                    </View>
                  ))}
                <ActionButton
                  title={'busy'}
                  onPress={() => console.log('hello')}
                  backgroundColor={darkYellow}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
};

export default AstroProfileCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: widthToDp('0.1%'),
    borderRadius: widthToDp('2%'),
    borderColor: black,
    paddingHorizontal: widthToDp('3%'),
    paddingVertical: widthToDp('3%'),
    marginHorizontal: widthToDp('2%'),
    marginVertical: widthToDp('3%'),
    flexDirection: 'row',
  },
  imageContainer: {
    width: widthToDp('15%'),
    justifyContent: 'center',
  },
  image: {
    borderRadius: widthToDp('20%'),
    height: heightToDp('12%'),
    width: widthToDp('25%'),
  },
  astroProfile: {
    width: widthToDp('37%'),
    marginLeft: widthToDp('15%'),
  },
  astroProfileData: {
    color: black,
  },
  rating: {
    // marginLeft: widthToDp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: widthToDp('5%'),
  },
  astroRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthToDp('1%'),
  },
});
