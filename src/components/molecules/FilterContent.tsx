import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {black, lightOrange, mediumGray} from '../../styles/colors';
import {font16Px, font18Px} from '../../utils/typography';
import {widthToDp} from '../../styles/responsive';
import LineBreak from '../atoms/LineBreak';
import {Language, category} from '../../helpers/HomeTab';
import GridLayout from '../atoms/GridLayout';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../atoms/CustomButton';
import {HORIZONTAL_1} from '../../utils/spacing';

interface FilterProps {
  onClose: () => void;
}

const FilterContent: React.FC<FilterProps> = ({onClose}) => {
  const [selected, setSelected] = useState<any[]>([]);

  const handleClickItem = (item: any) => {
    const selectedIndex = selected.indexOf(item.id);
    let newSelected: any[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, item.id];
    } else {
      newSelected = selected.filter(id => id !== item.id);
    }

    setSelected(newSelected);
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={[styles.title]}>Filter</Text>
        </View>
        <TouchableOpacity onPress={onClose}>
          <Icon name="x" size={24} color={black} style={styles.closeIcon} />
        </TouchableOpacity>
      </View>
      <LineBreak />
      <ScrollView>
        <GridLayout
          heading="Language"
          data={Language}
          selected={selected}
          handleClickItem={handleClickItem}
        />
        <GridLayout
          heading="Category"
          data={category}
          selected={selected}
          handleClickItem={handleClickItem}
        />
        <GridLayout
          heading="Price"
          data={category}
          selected={selected}
          handleClickItem={handleClickItem}
        />
        <GridLayout
          heading="Consultation"
          data={category}
          selected={selected}
          handleClickItem={handleClickItem}
        />
        <GridLayout
          heading="Skill"
          data={category}
          selected={selected}
          handleClickItem={handleClickItem}
        />
      </ScrollView>
      <LineBreak />
      <View style={styles.btnWrapper}>
        <CustomButton
          title="Clear all"
          color={mediumGray}
          onPress={onClose}
          style={styles.clearAllBtn}
          titleStyle={styles.titleStyle}
        />
        <CustomButton
          title="Apply"
          color={lightOrange}
          onPress={() => console.log('Hello')}
          style={styles.clearAllBtn}
          titleStyle={styles.titleStyle}
        />
      </View>
    </>
  );
};

export default FilterContent;

const styles = StyleSheet.create({
  title: {
    color: black,
    fontSize: font18Px,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    position: 'relative',
    marginTop: widthToDp('5%'),
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: widthToDp('1%'),
    right: widthToDp('5%'),
  },
  clearAllBtn: {
    width: widthToDp('40%'),
    borderRadius: widthToDp('3%'),
    marginHorizontal: widthToDp('3%'),
  },
  titleStyle: {
    fontSize: font16Px,
    marginHorizontal: HORIZONTAL_1,
  },
  btnWrapper: {
    marginVertical: widthToDp('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
