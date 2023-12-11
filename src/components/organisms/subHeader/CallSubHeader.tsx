import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {callRoutes} from '../../../helpers/HomeTab';
import {black, skinLight, lightOrange, white} from '../../../styles/colors';
import {widthToDp} from '../../../styles/responsive';
import {font16Px} from '../../../utils/typography';

const CallSubHeader = () => {
  const [selectedItem, setSelectedItem] = useState('All');

  const handleItemClick = (item: any) => {
    setSelectedItem(item.name);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      {callRoutes &&
        callRoutes?.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.scrollItems,
              {
                backgroundColor:
                  selectedItem === item.name ? lightOrange : skinLight,
              },
            ]}
            onPress={() => handleItemClick(item)}>
            <Text
              style={[
                styles.title,
                {color: selectedItem === item.name ? white : black},
              ]}>
              {item?.icon}
            </Text>
            <Text
              style={[
                styles.title,
                {color: selectedItem === item.name ? white : black},
              ]}>
              {item?.name}
            </Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  scrollItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: widthToDp('2%'),
    marginVertical: widthToDp('2%'),
    padding: widthToDp('3%'),
    borderRadius: widthToDp('3%'),
    gap: widthToDp('1%'),
  },
  title: {
    fontSize: font16Px,
  },
});

export default CallSubHeader;
