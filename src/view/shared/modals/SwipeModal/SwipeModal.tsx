import React from 'react';
import { Modal } from 'react-native';

interface SwipeModalProps {}

const SwipeModal: React.FunctionComponent<SwipeModalProps> = (props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      style={{ flex: 1 }}
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      //   setModalVisible(!modalVisible);
      // }}
    >
      {props.children}
    </Modal>
  );
};

export default SwipeModal;
