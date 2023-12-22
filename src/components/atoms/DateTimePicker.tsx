import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {black, bodyColor, white, yellow} from '../../styles/colors';
import {heightToDp, widthToDp} from '../../styles/responsive';
import {VERTICAL_1} from '../../utils/spacing';

const DateTimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [mode, setMode] = useState('date');

  const handleDateChange = (selectedDate: any) => {
    setOpen(false);
    setDate(selectedDate);
    const formattedDate = moment(selectedDate).format('D-MMM-YYYY');
    setSelectedDate(formattedDate);
  };

  const handleTimeChange = (selectedTime: any) => {
    setOpen(false);
    setTime(selectedTime);
    const formattedTime = moment(selectedTime).format('hh:mm A');
    setSelectedTime(formattedTime);
  };

  return (
    <View style={styles.userWrapper}>
      <Icon name="calendar" size={22} color={black} />
      <View style={styles.textInputContainer}>
        <Button
          title={selectedDate || 'Select Date'}
          onPress={() => {
            setMode('date');
            setOpen(true);
          }}
          titleStyle={styles.buttonStyle}
          buttonStyle={styles.dateButton}
        />
        {mode === 'date' && (
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={handleDateChange}
            onCancel={() => setOpen(false)}
            textColor={white}
          />
        )}
      </View>
      <View>
        <Button
          title={selectedTime || 'Select Time'}
          onPress={() => {
            setMode('time');
            setOpen(true);
          }}
          titleStyle={styles.buttonStyle}
          buttonStyle={styles.timeButton}
        />
        {mode === 'time' && (
          <DatePicker
            modal
            mode="time"
            open={open}
            date={time}
            onConfirm={handleTimeChange}
            onCancel={() => setOpen(false)}
          />
        )}
      </View>
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
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
  timeButton: {
    backgroundColor: bodyColor,
    color: black,
    borderRadius: 6,
    borderColor: yellow,
    borderWidth: widthToDp('0.3%'),
    width: widthToDp('30%'),
    marginRight: VERTICAL_1,
    height: heightToDp('6%'),
  },
  dateButton: {
    backgroundColor: bodyColor,
    color: black,
    borderRadius: 6,
    borderColor: yellow,
    borderWidth: widthToDp('0.3%'),
    width: widthToDp('45%'),
    marginLeft: VERTICAL_1,
    height: heightToDp('6%'),
  },
  buttonStyle: {color: black},
});
