import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import SearchField from '../../../components/atoms/SearchField';
import {CheckBox} from '@rneui/themed';

const CitySearch = () => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [value, setValue] = useState<string>('');
  const handleValue = (newSearch: string) => {
    setValue(newSearch);
  };
  const SearchBarProps = {
    placeholder: 'Search place (Min. 3 char.)',
    value: value,
    handleValue: handleValue,
  };
  return (
    <View>
      <SearchField {...SearchBarProps} />
      <View style={styles.checkBoxWrapper}>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="#ff8800"
          title="Make it default city"
          containerStyle={styles.checkBox}
          textStyle={styles.textStyle}
        />
      </View>
    </View>
  );
};

export default CitySearch;

const styles = StyleSheet.create({
  checkBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  checkBox: {backgroundColor: '#f2f2f2'},
  textStyle: {fontWeight: '500'},
});
