// Updated GridLayout component
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {widthToDp} from '../../styles/responsive';
import {black, skinLight} from '../../styles/colors';
import {font24Px} from '../../utils/typography';

interface GridLayoutProps {
  heading: string;
  data: Array<{id: number; name: string}>;
}

const GridLayout: React.FC<GridLayoutProps> = ({heading, data}) => {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.gridContainer}>
        {data.map(item => (
          <View style={styles.gridItem} key={item.id}>
            <Text style={styles.gridText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp('5%'),
  },
  gridItem: {
    backgroundColor: skinLight,
    alignItems: 'center',
    justifyContent: 'center',
    width: widthToDp('28%'), // Adjust the width as per your requirement
    marginVertical: widthToDp('2%'),
    padding: widthToDp('3%'),
    borderRadius: widthToDp('2%'),
  },
  heading: {
    color: black,
    fontSize: font24Px,
    marginHorizontal: widthToDp('5%'),
    marginTop: widthToDp('3%'),
  },
  gridText: {
    color: black,
  },
});

export default GridLayout;
