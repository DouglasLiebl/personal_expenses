import InputFieldProps from "@/@types/InputFieldProps";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField(
  { value, onChange, label }: InputFieldProps
): React.JSX.Element {
  const [onFocus, setOnFocus] = useState<boolean>();

  return (
    <View style={styles.container} >
      <View style={styles.labelContainer} > 
        <Text style={styles.label} >{label}</Text>
      </View>
      <TextInput 
        value={value} 
        onChangeText={onChange}
        style={[
          styles.input,
          onFocus && styles.onFocus
        ]}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  labelContainer: {
    marginTop: 20,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  label: {
    textAlign: "right",
    fontFamily: "JetBrainsMono_500Medium",
    color: Colors.titleGrey,
    fontSize: 14,
    paddingLeft: 4
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    width: "95%",
    borderWidth: 0.5,
    borderRadius: 5,
    marginTop: 4,
    borderColor: Colors.borderGrey,
    height: 50,
    fontSize: 20,
    fontFamily: "JetBrainsMono_400Regular",
    color: Colors.titleGrey
  },
  onFocus: {
    borderColor: Colors.titleGrey,
    borderWidth: 2
  }
})