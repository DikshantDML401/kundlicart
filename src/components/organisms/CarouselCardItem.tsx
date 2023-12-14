import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {homeBanner} from '../../utils/images';
import {orange} from '../../styles/colors';
export const SLIDER_WIDTH = Dimensions.get('window').width + 3;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
interface CarouselItem {
  title: string;
  body: string;
}

interface CarouselCardItemProps {
  item: CarouselItem;
  index: number;
}

const CarouselCardItem: React.FC<CarouselCardItemProps> = ({index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={homeBanner} style={styles.image} />
    </View>
  );
};

export default CarouselCardItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: ITEM_WIDTH,
    height: 70,
    borderColor: orange,
    borderRadius: 8,
    borderWidth: 1,
  },
  header: {},
  body: {},
});
