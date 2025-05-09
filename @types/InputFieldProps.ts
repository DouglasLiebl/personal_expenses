import { Dispatch, SetStateAction } from "react";

export default interface InputFieldProps {
  value: string,
  onChange: Dispatch<SetStateAction<string>>
}