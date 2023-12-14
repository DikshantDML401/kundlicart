import {StyleSheet, View} from 'react-native';
import React from 'react';
import CunsultTopCard from '../../../components/molecules/common/CunsultTopCard';
import {widthToDp} from '../../../styles/responsive';
import {HORIZONTAL_4, VERTICAL_3} from '../../../utils/spacing';
import {ConsultDataProps, astrologersData} from '../../../helpers/commonText';
import CarouselCard from '../../../components/molecules/CarouselCard';
import LiveChat from '../../../components/molecules/common/LiveChatSlider';
import {ScrollView} from 'react-native';

const Consult = () => {
  const LiveChatTitleProps = {
    topHeadingText: 'KundliKart Live TV',
    astrologers: astrologersData,
    subTitle: 'See More',
    showIcon: false,
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
