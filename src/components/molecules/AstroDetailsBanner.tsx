import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {astroDetailBg} from '../../utils/images';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {white} from '../../styles/colors';
import {HORIZONTAL_4, VERTICAL_1} from '../../utils/spacing';
import {font18Px} from '../../utils/typography';
import {astroDetails} from '../../helpers/HomeTab';

const AstroDetailsBanner = () => {
  console.log(astroDetails);
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={astroDetailBg} style={styles.bgImage} />
      </View>
      <View style={styles.bannerContainer}>
        <View style={styles.shareTxtWrapper}>
          <Text style={styles.shareTxt}>Kartik</Text>
          <Feather name="share-2" size={24} color={white} />
        </View>
        <View>
          {/* <Image source={astrolady} style={styles.astroImage} /> */}
          {astroDetails &&
            astroDetails?.map(item => (
              <View style={styles.AstroDetailContainer}>
                <View></View>
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
    height: heightToDp('8%'),
    width: widthToDp('18%'),
    borderRadius: widthToDp('20%'),
  },
  AstroDetailContainer: {
    borderWidth: widthToDp('0.1%'),
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: widthToDp('5%'),
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});
