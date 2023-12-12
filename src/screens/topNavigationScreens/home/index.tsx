import {Image, ScrollView, StyleSheet, View} from 'react-native';
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
import {HORIZONTAL_1, HORIZONTAL_3} from '../../../utils/spacing';
import CustomButton from '../../../components/atoms/CustomButton';
import {orange, white} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {font18Px} from '../../../utils/typography';

const Homepage = () => {
  const LiveChatTitleProps = {
    topHeadingText: 'KundliKart Live TV',
    astrologers: astrologersData,
  };
  const kundliDataArray = [1, 2, 3, 4];
  const ChatWithAstrologerProps = {
    topHeadingText: 'Chat/Call with Astrologer',
    astrologers: astrologersBioData,
  };
  const handleShare = () => {
    console.log('ssd');
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={homeBanner} style={styles.homeBanner} />
        <KundliData {...KundliDataProps} />
        <LiveChat {...LiveChatTitleProps} />
        <ChatWithAstrologer {...ChatWithAstrologerProps} />
        <View style={styles.kundliChartWrapper}>
          {kundliDataArray.map((item, index) => (
            <KundliData key={index} {...KundliDataProps} />
          ))}
        </View>
        <View>
          <CustomButton
            title="Share App with Friends"
            color={orange}
            rightIcon={true}
            containerHeadStyle={styles.containerHeadStyle}
            headingStyle={styles.headingStyle}
            rightImage={() => (
              <Icon
                name="share"
                size={20}
                color={white}
                style={{
                  marginLeft: 25,
                  paddingRight: 17,
                }}
              />
            )}
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
    fontSize: font18Px,
    marginHorizontal: HORIZONTAL_1,
  },
  containerHeadStyle: {
    width: widthToDp('98%'),
    borderRadius: widthToDp('1%'),
    margin: HORIZONTAL_3,
  },
});
