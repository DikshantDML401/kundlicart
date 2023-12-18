/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {black, blue, darkYellow} from '../../styles/colors';
import CallSubHeader from '../../components/organisms/subHeader/CallSubHeader';
import {heightToDp, widthToDp} from '../../styles/responsive';
import ActionButton from '../../components/atoms/ActionButton';
import {astroList, astroRating} from '../../helpers/HomeTab';
import {font18Px} from '../../utils/typography';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

const Call = () => {
  const [selectedItem, setSelectedItem] = useState('All');
  const navigation = useNavigation<RootStackParamList>();

  const handleItemClick = (item: {name: string}) => {
    setSelectedItem(item.name);
  };

  return (
    <>
      <View style={styles.subHeader}>
        <CallSubHeader
          selected={selectedItem}
          onPress={item => handleItemClick(item)}
        />
      </View>
      <ScrollView>
        <StatusBar backgroundColor={darkYellow} barStyle={'dark-content'} />
        <View style={styles.contentContainer}>
          {astroList &&
            astroList?.map(item => (
              <TouchableOpacity
                style={styles.container}
                onPress={() =>
                  navigation.navigate('AppStack', {
                    screen: 'CallStack',
                    params: {
                      AstroDetails: undefined,
                    },
                  })
                }>
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
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Call;

const styles = StyleSheet.create({
  subHeader: {
    marginHorizontal: widthToDp('2%'),
  },
  contentContainer: {
    flex: 1,
  },
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
