import Container from "@/components/Container";
import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Register(): React.JSX.Element {
  return (
    <View style={style.container} >
      <Container />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.backgroundGrey
  }
})