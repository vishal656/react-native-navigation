import React from "react";
import { Text, View, Button } from "react-native";

function Screen1({ navigation }) {
  const show = () => {
    navigation.navigate("Screen2");
  };
  return (
    <View>
      <Text>Screen1</Text>
      <Button title="show" onPress={show}></Button>
    </View>
  );
}
export default Screen1;
