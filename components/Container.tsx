import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleText from "./TitleText";
import SubtitleText from "./SubtitleText";
import InputField from "./InputField";
import Button from "./Buttom";

export default function Container(): React.JSX.Element {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <View style={style.container} >
      <TitleText value="Bem-vindo de volta" />
      <SubtitleText value="Insira seu email abaixo para acessar sua conta" />
      <InputField value={email} onChange={setEmail} label={"Email"} />
      <InputField value={password} onChange={setPassword} label={"Senha"} />
      <Button></Button>
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
    width: "80%",
  }
})