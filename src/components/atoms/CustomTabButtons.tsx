import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from '@rneui/themed';
import {HORIZONTAL_3} from '../../utils/spacing';
import {black, yellow} from '../../styles/colors';

interface CustomButtonProps {
  leftButtonTitle?: string;
  rightButtonTitle?: string;
  setStyle?: boolean;
}

const CustomTabButtons: React.FC<CustomButtonProps> = ({
  leftButtonTitle,
  rightButtonTitle,
  setStyle,
}) => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');

  const handleButtonPress = (button: 'left' | 'right') => {
    setActiveButton(button);
  };
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={leftButtonTitle}
        containerStyle={
          setStyle ? {height: 50, width: 187} : {height: 50, width: 156.5}
        }
        buttonStyle={
          setStyle
            ? {
                backgroundColor: activeButton === 'left' ? yellow : 'white',
                borderColor: yellow,
                borderWidth: activeButton === 'left' ? 0 : 1,
                height: 50,
              }
            : {
                backgroundColor: activeButton === 'left' ? yellow : 'white',
                borderColor: yellow,
                borderWidth: activeButton === 'left' ? 0 : 1,
                height: 45,
              }
        }
        titleStyle={{
          color: activeButton === 'left' ? 'black' : 'rgba(0, 0, 0, 0.5)',
          marginHorizontal: 20,
          fontWeight: '700',
        }}
        onPress={() => handleButtonPress('left')}
      />
      <Button
        title={rightButtonTitle}
        containerStyle={
          setStyle ? {height: 50, width: 187} : {height: 50, width: 156.5}
        }
        buttonStyle={
          setStyle
            ? {
                backgroundColor: activeButton === 'right' ? yellow : 'white',
                borderColor: yellow,
                borderWidth: activeButton === 'right' ? 0 : 1,
                height: 50,
              }
            : {
                backgroundColor: activeButton === 'right' ? yellow : 'white',
                borderColor: yellow,
                borderWidth: activeButton === 'right' ? 0 : 1,
                height: 45,
              }
        }
        titleStyle={{
          color: activeButton === 'right' ? 'black' : 'rgba(0, 0, 0, 0.5)',
          marginHorizontal: 20,
          fontWeight: '700',
        }}
        onPress={() => handleButtonPress('right')}
      />
    </View>
  );
};

export default CustomTabButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: HORIZONTAL_3,
    marginLeft: 10,
    color: black,
  },
});
