import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "./TitleText";
import SubtitleText from "./SubtitleText";
import InputField from "./InputField";

export default function Container(): React.JSX.Element {
  const [email, setEmail] = useState<string>()

  return (
    <View style={style.container} >
      <TitleText value="Bem-vindo de volta" />
      <SubtitleText value="Insira seu email abaixo para acessar sua conta" />
      <InputField value="" />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: "80%"
  }
})