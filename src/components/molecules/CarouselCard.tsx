import {View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import data from '../../helpers/commonText';
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from '../organisms/CarouselCardItem';

const CarouselCard = () => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        useScrollView={true}
        autoplay={true}
        autoplayInterval={3000}
      />
    </View>
  );
};

export default CarouselCard;
