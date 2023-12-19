import React from 'react';
import {SearchBar} from '@rneui/themed';
import {View, StyleSheet} from 'react-native';
import {white} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';

type SearchBarComponentProps = {
  placeholder?: string;
  value?: string;
  handleValue?: (text: string) => void;
};

const SearchField: React.FunctionComponent<SearchBarComponentProps> = ({
  placeholder,
  value,
  handleValue,
}) => {
  return (
    <View style={styles.view}>
      <SearchBar
        searchIcon={{size: 28}}
        placeholder={placeholder}
        onChangeText={handleValue}
        value={value}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        leftIconContainerStyle={styles.leftIconStyle}
      />
    </View>
  );
};
export default SearchField;

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  containerStyle: {
    backgroundColor: white,
    borderColor: white,
    borderRadius: 4,
    elevation: 6,
    shadowColor: '#232424',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: heightToDp('7%'),
  },
  inputStyle: {backgroundColor: white, height: heightToDp('4%')},
  inputContainerStyle: {backgroundColor: white},
  leftIconStyle: {
    width: widthToDp('8%'),
    height: heightToDp('3%'),
    marginBottom: 10,
  },
});
