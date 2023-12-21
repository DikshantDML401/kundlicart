import React, {useState} from 'react';
import {
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {astroDetailBg, astrolady} from '../../utils/images';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {blue, darkYellow, green, white} from '../../styles/colors';
import {HORIZONTAL_4, VERTICAL_1} from '../../utils/spacing';
import {font18Px} from '../../utils/typography';
import {astroDetails} from '../../helpers/HomeTab';
import ActionButton from '../atoms/ActionButton';

const AstroDetailsBanner = () => {
  const [isFollowed, setIsFollowed] = useState('Follow');

  const handleFollowing = () => {
    isFollowed === 'Follow'
      ? setIsFollowed('Following')
      : setIsFollowed('Follow');
  };
  const handleShare = () => {
    const options = {
      message: 'Check out this awesome app!',
    };

    Share.share(options)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        err && console.log(err);
      });
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={astroDetailBg} style={styles.bgImage} />
      </View>
      <View style={styles.bannerContainer}>
        <View style={styles.shareTxtWrapper}>
          <Text style={styles.shareTxt}>Bhavya A</Text>
          <TouchableWithoutFeedback onPress={handleShare}>
            <Feather name="share-2" size={24} color={white} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Image source={astrolady} style={styles.astroImage} />
          <MaterialIcons
            name="circle"
            size={18}
            color={green}
            style={styles.liveIcon}
          />
          <MaterialIcons
            name="verified"
            size={36}
            color={blue}
            style={styles.verifiedIcon}
          />
          {astroDetails &&
            astroDetails?.map(item => (
              <View style={styles.AstroDetailContainer}>
                <View style={styles.common}>
                  {item.profile.icon}
                  <Text style={styles.commonText}>{item.profile.name}</Text>
                </View>
                <View style={styles.common}>
                  {item.language.icon}
                  <Text style={styles.commonText}>{item.language.spoken}</Text>
                </View>
                <View style={styles.common}>
                  {item.experience.icon}
                  <Text style={styles.commonText}>{item.experience.count}</Text>
                </View>
                <View style={styles.common}>
                  {item.followers.icon}
                  <ActionButton
                    title={isFollowed}
                    style={styles.btnStyle}
                    onPress={handleFollowing}
                  />
                  <Text style={styles.commonText}>{item.followers.count}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default AstroDetailsBanner;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  bgImage: {
    height: heightToDp('26%'),
  },
  bannerContainer: {
    marginHorizontal: HORIZONTAL_4,
    position: 'absolute',
    top: 0,
    width: widthToDp('92%'),
    marginTop: VERTICAL_1,
  },
  shareTxtWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareTxt: {
    color: white,
    fontSize: font18Px,
  },
  astroImage: {
    position: 'relative',
    marginTop: widthToDp('13%'),
    marginLeft: widthToDp('3%'),
    height: heightToDp('10%'),
    width: widthToDp('20%'),
    borderRadius: widthToDp('20%'),
  },
  AstroDetailContainer: {
    position: 'absolute',
    width: widthToDp('73%'),
    borderRadius: widthToDp('5%'),
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingLeft: widthToDp('17%'),
    marginTop: widthToDp('10%'),
    marginLeft: widthToDp('12%'),
    paddingVertical: widthToDp('1%'),
  },
  common: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: widthToDp('0.5%'),
  },
  commonText: {
    marginLeft: widthToDp('1%'),
  },
  btnStyle: {
    backgroundColor: darkYellow,
    borderRadius: widthToDp('1%'),
    paddingHorizontal: widthToDp('1%'),
    marginLeft: widthToDp('1%'),
  },
  liveIcon: {
    position: 'absolute',
    left: widthToDp('17%'),
    top: widthToDp('12%'),
  },
  verifiedIcon: {
    position: 'absolute',
    bottom: 0,
  },
});
