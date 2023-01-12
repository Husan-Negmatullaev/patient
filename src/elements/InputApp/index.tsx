import React, { Dispatch, SetStateAction, memo } from "react";
import { View, StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import Text from "elements/Text";
import TextInput from "elements/TextInput";
import { Colors } from "configs";

interface InputAppProps {
  value: string;
  onChangeText?: (text: string) => void | Dispatch<SetStateAction<string>>;
  placeholder?: string;
  isShowIcon?: boolean;
  icon?: any;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  styleView?: ViewStyle;
  title: string;
  colorTitle?: string;
  borderColor?: string;
  iconPress?: () => void;
  autoFocus?: boolean;
  isShowIconLeft?: boolean;
  iconLeft?: any;
  iconPressLeft?: () => void;
  marginTop?: number;
  multiline?: boolean;
  editable?: boolean;
  onPress?: () => void;
  styleInput?: ViewStyle;
}

const InputApp = memo(
  ({
    value,
    placeholder,
    onChangeText,
    isShowIcon,
    icon,
    secureTextEntry,
    style,
    styleView,
    title,
    colorTitle,
    borderColor = Colors.Isabelline,
    iconPress,
    autoFocus,
    isShowIconLeft,
    iconLeft,
    iconPressLeft,
    marginTop,
    multiline,
    editable = true,
    onPress,
    styleInput,
  }: InputAppProps) => {
    return (
      <TouchableOpacity
        style={[styleView, { marginTop: marginTop }]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.7}
      >
        <Text type="H6" semiBold color={colorTitle}>
          {title}
        </Text>
        <TextInput
          {...{
            value,
            placeholder,
            onChangeText,
            isShowIcon,
            icon,
            secureTextEntry,
            borderColor,
            iconPress,
            autoFocus,
            isShowIconLeft,
            iconLeft,
            iconPressLeft,
            multiline,
            editable,
          }}
          style={{ marginTop: 4, ...style }}
        />
      </TouchableOpacity>
    );
  }
);

export default InputApp;

const styles = StyleSheet.create({
  container: {},
});
