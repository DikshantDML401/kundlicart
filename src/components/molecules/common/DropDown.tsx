import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {black, white} from '../../../styles/colors';
import {font15Px, font16Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {Dropdown} from 'react-native-element-dropdown';
import {HORIZONTAL_4, HORIZONTAL_5, VERTICAL_1} from '../../../utils/spacing';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const DropDown = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        itemTextStyle={styles.itemTextStyle}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  heading: {color: black, fontSize: font15Px},
  containerStyle: {
    backgroundColor: white,
    borderColor: white,
    borderRadius: 4,
    elevation: 6,
    shadowColor: '#232424',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: heightToDp('60%'),
    margin: widthToDp('3%'),
    padding: widthToDp('4%'),
  },
  dropdown: {
    marginBottom: HORIZONTAL_5,
    marginTop: HORIZONTAL_4,
    height: heightToDp('4%'),
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    color: black,
  },
  itemTextStyle: {color: black},
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: font16Px,
    color: black,
    marginLeft: VERTICAL_1,
  },
  selectedTextStyle: {
    fontSize: font16Px,
    color: black,
    marginLeft: VERTICAL_1,
  },
  iconStyle: {
    width: widthToDp('3%'),
    height: heightToDp('3%'),
  },
  inputSearchStyle: {
    height: heightToDp('5'),
    fontSize: font16Px,
    color: black,
  },
});
