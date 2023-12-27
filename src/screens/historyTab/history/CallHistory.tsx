import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {black, darkYellow, mediumGray} from '../../../styles/colors';
import {font14Px, font15Px, font22Px} from '../../../utils/typography';
import {HORIZONTAL_4, VERTICAL_1} from '../../../utils/spacing';
import ActionButton from '../../../components/atoms/ActionButton';
import Feather from 'react-native-vector-icons/Feather';
import LineBreak from '../../../components/atoms/LineBreak';
import {callHistory} from '../../../helpers/HomeTab';

const CallHistory = () => {
  return (
    <>
      {callHistory &&
        callHistory?.map(item => (
          <>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.astroProfile}>
                <View style={styles.textWrapper}>
                  <Text style={styles.primaryText}>{item.name}</Text>
                  <Text style={styles.primaryText}>₹{item.price}</Text>
                </View>
                <Text style={styles.currDate}>{item.time}</Text>
                <View style={styles.bottomWrapper}>
                  <View style={styles.duration}>
                    <Text
                      style={[
                        styles.currDate,
                        {marginBottom: widthToDp('1%')},
                      ]}>
                      {item.charge}
                    </Text>
                    <Text style={styles.currDate}>
                      Duration: {item.duration}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => console.log('object')}>
                    <ActionButton
                      title="Call Again"
                      onPress={() => console.log('hello')}
                      style={styles.btnStyles}
                      textStyle={styles.btnText}
                      leftImage={true}
                      leftIcon={
                        <Feather name="phone-call" size={20} color={black} />
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <LineBreak lineStyle={styles.lineStyle} />
          </>
        ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: widthToDp('2%'),
    paddingHorizontal: widthToDp('3%'),
    paddingVertical: widthToDp('3%'),
    marginHorizontal: widthToDp('2%'),
    marginVertical: widthToDp('3%'),
    flexDirection: 'row',
  },
  imageContainer: {
    width: widthToDp('15%'),
    // justifyContent: 'center',
  },
  image: {
    borderRadius: widthToDp('20%'),
    height: heightToDp('8%'),
    width: widthToDp('18%'),
  },
  astroProfile: {
    width: widthToDp('68%'),
    marginLeft: widthToDp('7%'),
  },
  primaryText: {
    fontSize: font22Px,
    fontWeight: '500',
    color: black,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currDate: {
    fontSize: font14Px,
    color: mediumGray,
  },
  duration: {},
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: VERTICAL_1,
  },
  btnStyles: {
    backgroundColor: darkYellow,
    paddingVertical: widthToDp('3%'),
    paddingHorizontal: HORIZONTAL_4,
    borderRadius: widthToDp('7%'),
    flexDirection: 'row',
    gap: widthToDp('3%'),
  },
  btnText: {
    color: black,
    fontWeight: '500',
    fontSize: font15Px,
  },
  lineStyle: {
    borderWidth: widthToDp('0.05%'),
    width: widthToDp('93%'),
    marginHorizontal: widthToDp('3%'),
    borderColor: mediumGray,
  },
});

export default CallHistory;
