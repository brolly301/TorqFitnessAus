import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export default function AppModal({
  modalVisible,
  setModalVisible,
  children,
}: Props) {
  return (
    <Modal visible={modalVisible} animationType="fade">
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(false)}
      >
        <Pressable onPress={() => {}} style={styles.modalView}>
          <AntDesign
            style={styles.closeIcon}
            onPress={() => setModalVisible(false)}
            name="close"
            size={20}
            color="black"
          />
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.15)",
    flex: 1,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    width: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },
  closeIcon: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
});
