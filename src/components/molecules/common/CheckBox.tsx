import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {black, orange, white, yellow} from '../../../styles/colors';
import {font15Px} from '../../../utils/typography';
import {heightToDp, widthToDp} from '../../../styles/responsive';
import {CheckBox} from 'react-native-elements';
import {Input} from '@rneui/themed';
import {HORIZONTAL_11} from '../../../utils/spacing';

const CustomCheckBox = () => {
  const [northSelected, setNorthSelected] = React.useState(false);
  const [southSelected, setSouthSelected] = React.useState(false);
  const [eastSelected, setEastSelected] = React.useState(false);
  const [westSelected, setWestSelected] = React.useState(false);
  return (
    <View>
      <Text style={styles.heading}>Latitude</Text>
      <View style={styles.heightWrapper}>
        <View style={styles.latitudeWrapper}>
          <CheckBox
            uncheckedColor={orange}
            checkedColor={orange}
            checked={northSelected}
            onPress={() => {
              setNorthSelected(!northSelected);
              setSouthSelected(false);
            }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.containerCheckBox}
            title="North"
            textStyle={styles.textStyle}
            wrapperStyle={styles.checkboxWrapper}
          />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Lat Deg"
              inputStyle={styles.textInput}
              inputContainerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <View style={styles.latitudeWrapper}>
          <CheckBox
            uncheckedColor={orange}
            checkedColor={orange}
            checked={southSelected}
            onPress={() => {
              setSouthSelected(!southSelected);
              setNorthSelected(false);
            }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.containerCheckBox}
            title="South"
            textStyle={styles.textStyle}
            wrapperStyle={styles.checkboxWrapper}
          />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Lat Min"
              inputStyle={styles.textInput}
              inputContainerStyle={styles.inputContainer}
              labelStyle={styles.labelStyle}
            />
          </View>
        </View>
      </View>
      <Text style={styles.longitude}>Longitude</Text>
      <View style={styles.heightWrapper}>
        <View style={styles.latitudeWrapper}>
          <CheckBox
            uncheckedColor={orange}
            checkedColor={orange}
            checked={eastSelected}
            onPress={() => {
              setEastSelected(!eastSelected);
              setWestSelected(false);
            }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.containerCheckBox}
            title="East"
            textStyle={styles.textStyle}
            wrapperStyle={styles.checkboxWrapper}
          />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Long Deg"
              inputStyle={styles.textInput}
              inputContainerStyle={styles.inputContainer}
            />
          </View>
        </View>
        <View style={styles.latitudeWrapper}>
          <CheckBox
            uncheckedColor={orange}
            checkedColor={orange}
            checked={westSelected}
            onPress={() => {
              setWestSelected(!westSelected);
              setEastSelected(false);
            }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={styles.containerCheckBox}
            title="West"
            textStyle={styles.textStyle}
            wrapperStyle={styles.checkboxWrapper}
          />
          <View style={styles.textInputContainer}>
            <Input
              placeholder="Long Min"
              inputStyle={styles.textInput}
              inputContainerStyle={styles.inputContainer}
              labelStyle={styles.labelStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  heading: {color: black, fontSize: font15Px},
  heightWrapper: {flexDirection: 'row', justifyContent: 'flex-end'},
  latitudeWrapper: {width: widthToDp('44%')},
  containerCheckBox: {
    backgroundColor: white,
    borderColor: white,
    width: widthToDp('20%'),
  },
  textStyle: {fontWeight: '500'},
  checkedColor: {color: 'red'},
  checkboxWrapper: {
    justifyContent: 'center',
  },
  textInputContainer: {
    flex: 1,
    width: widthToDp('47%'),
  },
  textInput: {
    borderBottomColor: yellow,
    borderBottomWidth: widthToDp('0.4%'),
    height: heightToDp('0%'),
    fontSize: font15Px,
  },
  inputContainer: {
    borderBottomWidth: 0,
    height: heightToDp('2.5%'),
  },
  labelStyle: {height: heightToDp('5%')},

  longitude: {color: black, fontSize: font15Px, marginTop: HORIZONTAL_11},
});
