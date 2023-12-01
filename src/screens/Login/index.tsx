import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';

import TextField from '../../components/atoms/TextField';
import {textgrey} from '../../styles/colors';

const Login: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const handleNumberChange = (num: string) => {
    const parsedNumber = parseFloat(num);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    } else {
      setNumber(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.textField}>
        <TextField
          placeholder="Mobile Number"
          value={number !== null ? number.toString() : ''}
          style={styles.textinput}
          handleChange={handleNumberChange}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>We will send you a one time password.</Text>
        <Text style={styles.text}>Carrier rates may apply.</Text>
      </View>
      <View style={[styles.checkboxContainer, styles.textWrapper]}>
        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          // Use ThemeProvider to make change for all checkbox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          checkedColor="orange"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          By creating an account, you are agreeing to our Disclaimer and privacy
          policy{' '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {},
  container: {
    marginHorizontal: 28,
  },
  textField: {},
  textWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: textgrey,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
});

export default Login;
