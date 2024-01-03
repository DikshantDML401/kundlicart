import {Image, ScrollView, Share, StyleSheet, View} from 'react-native';
import React from 'react';
import {homeBanner} from '../../../utils/images';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import KundliData from '../../../components/molecules/common/kundliData';
import LiveChat from '../../../components/molecules/common/LiveChatSlider';
import ChatWithAstrologer from '../../../components/molecules/common/ChatAstrologerSlider';
import {
  KundliDataProps,
  astrologersBioData,
  astrologersData,
} from '../../../helpers/commonText';
import {
  HORIZONTAL_3,
  HORIZONTAL_4,
  HORIZONTAL_8,
  HORIZONTAL_9,
  VERTICAL_1,
} from '../../../utils/spacing';
import CustomButton from '../../../components/atoms/CustomButton';
import {black, darkYellow, orange, white} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {font17Px, font18Px} from '../../../utils/typography';
import ActionButton from '../../../components/atoms/ActionButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Homepage = () => {
  const LiveChatTitleProps = {
    topHeadingText: 'KundliKart Live TV',
    astrologers: astrologersData,
    subTitle: 'View All',
    showIcon: true,
  };
  const ChatWithAstrologerProps = {
    topHeadingText: 'Chat/Call with Astrologer',
    astrologers: astrologersBioData,
    subTitle: 'View All',
    showIcon: true,
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
    <>
      <ScrollView style={styles.container}>
        <Image source={homeBanner} style={styles.homeBanner} />
        <KundliData {...KundliDataProps[3]} />
        <LiveChat {...LiveChatTitleProps} />
        <ChatWithAstrologer {...ChatWithAstrologerProps} />
        <View style={styles.kundliChartWrapper}>
          {KundliDataProps.map((data, index) => (
            <KundliData key={index} {...data} />
          ))}
        </View>
        <View style={styles.customButton}>
          <CustomButton
            title="Share App with Friends"
            color={orange}
            rightIcon={true}
            containerHeadStyle={styles.containerHeadStyle}
            headingStyle={styles.headingStyle}
            rightImage={
              <Icon
                name="share"
                size={22}
                color={white}
                style={{
                  marginLeft: 10,
                }}
              />
            }
            showRightIcon={true}
            onPress={() => {
              handleShare();
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.callBtnContainer}>
        <ActionButton
          title="Call"
          onPress={() => console.log('hi')}
          style={styles.callBtn}
          leftImage={true}
          leftIcon={
            <MaterialIcons name="wifi-calling-3" size={24} color={black} />
          }
          textStyle={styles.btnTextStyle}
          iconStyle={styles.iconStyle}
        />
        <ActionButton
          title="Chat"
          onPress={() => console.log('hi')}
          style={styles.callBtn}
          leftImage={true}
          leftIcon={<MaterialIcons name="chat" size={24} color={black} />}
          textStyle={styles.btnTextStyle}
          iconStyle={styles.iconStyle}
        />
      </View>
    </>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {flex: 1},
  homeBanner: {width: 'auto', height: heightToDp('10%')},
  kundliChartWrapper: {marginTop: HORIZONTAL_3},
  headingStyle: {
    fontWeight: 'bold',
    fontSize: font17Px,
    marginRight: VERTICAL_1,
  },
  containerHeadStyle: {
    width: widthToDp('98%'),
    borderRadius: widthToDp('0%'),
    margin: HORIZONTAL_3,
  },
  customButton: {marginBottom: HORIZONTAL_9},
  callBtnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: widthToDp('7%'),
    justifyContent: 'space-between',
    width: widthToDp('100%'),
    paddingHorizontal: HORIZONTAL_8,
  },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: widthToDp('7%'),
    backgroundColor: darkYellow,
    width: widthToDp('40%'),
  },
  btnTextStyle: {
    color: black,
    fontSize: font18Px,
    fontWeight: '600',
    paddingHorizontal: HORIZONTAL_4,
    paddingVertical: widthToDp('1.5%'),
  },
  iconStyle: {
    paddingLeft: widthToDp('3%'),
  },
});
