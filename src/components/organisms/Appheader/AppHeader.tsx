import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {font16Px, font17Px} from '../../../utils/typography';
import {widthToDp} from '../../../styles/responsive';
import {black, darkYellow} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';

interface AppHeaderProps {
  headerText: string;
}
const AppHeader: React.FC<AppHeaderProps> = ({headerText}) => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{headerText}</Text>
      <View style={styles.notificationWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="₹0"
          placeholderTextColor="black"
          keyboardType="numeric"
        />
        <Icon name="bell" size={22} color={black} style={{marginTop: 5}} />
        <Icon name="search" size={20} color={black} style={{marginTop: 5}} />
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 80,
  },
  header: {
    color: black,
    fontSize: font17Px,
    fontWeight: '600',
    marginLeft: 0,
  },
  notificationWrapper: {flexDirection: 'row', gap: 20},
  input: {
    color: black,
    width: widthToDp('4%'),
    fontSize: font16Px,
    borderRadius: 10,
    borderColor: black,
    borderWidth: 2,
    minWidth: 55,
    padding: 0,
    textAlign: 'center',
    backgroundColor: darkYellow,
  },
});
