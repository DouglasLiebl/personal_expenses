import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from "react-native";

export default function Button(): React.JSX.Element {
  
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={Colors.subtitleGrey}
      activeOpacity={0.7}
      onPress={() => {}}
    >
      <Text style={styles.label} >Buttom</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: Colors.titleGrey,
    borderRadius: 5,
    width: "95%",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  onPressed: {
    backgroundColor: Colors.subtitleGrey
  }
  ,
  label: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "JetBrainsMono_500Medium"
  }
})