import {StyleSheet, View} from 'react-native';
import React from 'react';
import CunsultTopCard from '../../../components/molecules/common/CunsultTopCard';
import {widthToDp} from '../../../styles/responsive';
import {HORIZONTAL_4, VERTICAL_3} from '../../../utils/spacing';
import {
  ChatWithAstrologerPropsArray,
  ConsultDataProps,
  astrologersBioDataDetail,
  astrologersData,
} from '../../../helpers/commonText';
import CarouselCard from '../../../components/molecules/CarouselCard';
import LiveChat from '../../../components/molecules/common/LiveChatSlider';
import {ScrollView} from 'react-native';
import ChatWithAstrologer from '../../../components/molecules/common/ChatAstrologerSlider';
import CallAstrologerSlider from '../../../components/molecules/common/CallAstrologerSlider';

const Consult = () => {
  const LiveChatTitleProps = {
    topHeadingText: 'KundliKart Live TV',
    astrologers: astrologersData,
    subTitle: 'See More',
    showIcon: false,
  };
  const CallAstrologerProps = {
    topHeadingText: 'Call with Astrologers',
    astrologers: astrologersBioDataDetail,
    showIcon: false,
    subTitle: 'See More',
    showLive: false,
  };
  return (
    <ScrollView style={styles.wrapper}>
      <View>
        <View style={styles.container}>
          {ConsultDataProps.map((data, index) => (
            <CunsultTopCard key={index} {...data} />
          ))}
        </View>
        <CarouselCard />
        <LiveChat {...LiveChatTitleProps} />
        <CallAstrologerSlider {...CallAstrologerProps} />
        {ChatWithAstrologerPropsArray.map((props, index) => (
          <ChatWithAstrologer key={index} {...props} />
        ))}
        <CallAstrologerSlider {...CallAstrologerProps} />
      </View>
    </ScrollView>
  );
};

export default Consult;

const styles = StyleSheet.create({
  wrapper: {flex: 1},
  container: {
    flexDirection: 'row',
    gap: widthToDp('6.3%'),
    margin: HORIZONTAL_4,
    marginLeft: VERTICAL_3,
  },
});
