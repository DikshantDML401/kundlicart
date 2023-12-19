import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchField from '../../../../components/atoms/SearchField';
import CustomTabButtons from '../../../../components/atoms/CustomTabButtons';
import {HORIZONTAL_3} from '../../../../utils/spacing';

const NewKundli = () => {
  const [value, setValue] = useState<string>('');

  const handleValue = (newSearch: string) => {
    setValue(newSearch);
  };
  const SearchBarProps = {
    placeholder: 'Search Kundli by name',
    value: value,
    handleValue: handleValue,
  };
  const customtabButtonProps = {
    leftButtonTitle: 'All Local Kundlis',
    rightButtonTitle: 'Cloud Kundli',
  };
  return (
    <View style={styles.container}>
      <SearchField {...SearchBarProps} />
      <CustomTabButtons {...customtabButtonProps} />
    </View>
  );
};

export default NewKundli;
const styles = StyleSheet.create({container: {marginTop: HORIZONTAL_3}});
