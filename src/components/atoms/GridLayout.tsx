// Updated GridLayout component
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthToDp} from '../../styles/responsive';
import {black, lightOrange, skinLight} from '../../styles/colors';
import {font18Px} from '../../utils/typography';

interface GridLayoutProps {
  heading: string;
  data: Array<{id: number; name: string}>;
  selected: any[];
  handleClickItem: (item: {id: number; name: string}) => void; // Accept the item
}

const GridLayout: React.FC<GridLayoutProps> = ({
  heading,
  data,
  selected,
  handleClickItem,
}) => {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.gridContainer}>
        {data.map(item => (
          <TouchableOpacity
            style={[
              styles.gridItem,
              {
                backgroundColor: selected.includes(item.id)
                  ? lightOrange
                  : skinLight,
              },
            ]}
            key={item.id}
            onPress={() => handleClickItem(item)}>
            <Text style={styles.gridText}>{item.name}</Text>
          </TouchableOpacity>
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
    marginHorizontal: widthToDp('6%'),
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: widthToDp('28%'),
    marginVertical: widthToDp('1%'),
    padding: widthToDp('3%'),
    borderRadius: widthToDp('2%'),
  },
  heading: {
    color: black,
    fontSize: font18Px,
    marginHorizontal: widthToDp('5%'),
    marginVertical: widthToDp('3%'),
  },
  gridText: {
    color: black,
  },
});

export default GridLayout;
