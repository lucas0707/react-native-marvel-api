import React from "react";
import { Button, View, Text, Modal, Image } from "react-native";

const HeroDetail = ({ details, show, onClose }) => {
  const createImageUri = () => {
    if (details.thumbnail == undefined) {
      return "";
    }
    return `${details.thumbnail.path}.${details.thumbnail.extension}`;
  };

  return (
    <Modal visible={show} animationType="slide">
      <View style={{height: '95%'}}>
        <Image
          style={{ width: "100%", height: "75%" }}
          imageStyle={{ resizeMode: "cover" }}
          source={{
            uri: createImageUri()
          }}
        />
        <Text>{details.name}</Text>
        <Text>{details.description}</Text>
      </View>
        <Button title="RETURN" onPress={onClose} style/>
    </Modal>
  );
};

export default HeroDetail;
