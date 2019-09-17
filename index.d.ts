import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CheckBoxProps {
  style?: StyleProp<ViewStyle>;
  leftText?: string;
  leftTextStyle?: StyleProp<TextStyle>;
  leftTextView?: React.ReactNode;
  rightText?: string;
  rightTextStyle?: StyleProp<TextStyle>;
  rightTextView?: React.ReactNode;
  checkedImage?: React.ReactElement;
  uncheckedImage?: React.ReactElement;
  isChecked: boolean;
  onClick: () => void;
  disabled?: boolean;
  checkBoxColor?: string;
  checkedCheckBoxColor?: string;
  uncheckedCheckBoxColor?: string;
}

export default class CheckBox extends React.Component<CheckBoxProps> {}