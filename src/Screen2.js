import React from "react";
import { Text, View, Button } from "react-native";

function Screen2({ navigation }) {
  const show = () => {
    navigation.navigate("Screen1");
  };
  return (
    <View>
      <Text style={{ textAlign: "center" }}>Screen2</Text>
      <Button title="show" onPress={show}></Button>
    </View>
  );
}

export default Screen2;
