import {Button, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {black, yellow} from '../../../../styles/colors';
import {Input} from '@rneui/themed';
import {widthToDp} from '../../../../styles/responsive';
import {VERTICAL_1} from '../../../../utils/spacing';
import DatePicker from 'react-native-date-picker';

const OpenHeader = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Icon name="user" size={22} color={black} />
        <View style={styles.textInputContainer}>
          <Input
            placeholder="Enter Name"
            inputStyle={styles.textInput}
            labelStyle={{backgroundColor: 'red'}}
          />
        </View>
      </View>
      <View style={styles.userWrapper}>
        <Icon name="calendar" size={22} color={black} />
        <View style={styles.textInputContainer}>
          <Button title="Open" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default OpenHeader;
const styles = StyleSheet.create({
  container: {},
  userWrapper: {
    flexDirection: 'row',
    width: widthToDp('95%'),
    gap: widthToDp('5%'),
    alignItems: 'center',
    marginLeft: VERTICAL_1,
  },
  textInputContainer: {
    flex: 1,
  },
  textInput: {
    borderBottomColor: yellow,
    borderBottomWidth: widthToDp('0.3%'),
  },
});
