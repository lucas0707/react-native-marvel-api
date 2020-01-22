import React from "react";
import { Button, View, Text } from "react-native";

const Heroes = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Heroes Screen</Text>
      <Button
        title="Go to Hero Details"
        onPress={() => navigation.navigate("HeroDetail")}
      />
    </View>
  );
};

export default Heroes;
