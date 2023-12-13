import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View} from 'react-native';
import type {ReactNode} from 'react';

import {heightToDp, widthToDp} from '../styles/responsive';

interface ModalProps {
  value: boolean;
  children?: ReactNode;
  style?: object;
  modalStyle?: object;
}

const UpSideModal: React.FC<ModalProps> = ({
  value,
  children,
  style = {},
  modalStyle = {},
}) => {
  return (
    <Modal
      style={[styles.modal, modalStyle]}
      isVisible={value}
      animationInTiming={400}
      useNativeDriver
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationOutTiming={1000}>
      <View style={[styles.modalContainer, style]}>{children}</View>
    </Modal>
  );
};

export default UpSideModal;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    top: widthToDp('5%'),
  },
  modalContainer: {
    backgroundColor: 'white',
    width: widthToDp('100%'),
    height: heightToDp('50%'),
  },
});
