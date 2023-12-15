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
import {HORIZONTAL_3} from '../../../utils/spacing';
import CustomButton from '../../../components/atoms/CustomButton';
import {orange, white} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {font17Px} from '../../../utils/typography';

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
    <ScrollView style={styles.container}>
      <View>
        <Image source={homeBanner} style={styles.homeBanner} />
        <KundliData {...KundliDataProps[3]} />
        <LiveChat {...LiveChatTitleProps} />
        <ChatWithAstrologer {...ChatWithAstrologerProps} />
        <View style={styles.kundliChartWrapper}>
          {KundliDataProps.map((data, index) => (
            <KundliData key={index} {...data} />
          ))}
        </View>
        <View>
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
                  marginLeft: 25,
                  paddingRight: 17,
                }}
              />
            }
            showRightIcon={true}
            onPress={() => {
              handleShare();
            }}
          />
        </View>
      </View>
    </ScrollView>
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
  },
  containerHeadStyle: {
    width: widthToDp('98%'),
    borderRadius: widthToDp('0%'),
    margin: HORIZONTAL_3,
  },
});
