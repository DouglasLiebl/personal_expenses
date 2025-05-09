import InputFieldProps from "@/@types/InputFieldProps";
import React from "react";
import { TextInput } from "react-native";

export default function InputField(
  { value, onChange }: InputFieldProps
): React.JSX.Element {
  return <TextInput value={value} onChangeText={onChange} ></TextInput>
}