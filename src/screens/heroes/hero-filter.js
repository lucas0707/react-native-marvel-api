import React from "react";
import { Button, View, Text, Modal, Image } from "react-native";

const HeroFilter = ({ filter, show, onClose }) => {
  return (
    <Modal visible={show} animationType="slide">
      <View style={{ height: "95%" }}>
        <Text>{details.name}</Text>
        <Text>{details.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={} />
        </View>
        <View style={styles.button}>
          <Button title="ADD" onPress={} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "80%"
  },
  button: {
    width: "40%"
  }
});

export default HeroDetail;
