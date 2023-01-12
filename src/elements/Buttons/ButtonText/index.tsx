import React, { memo } from "react";
import { StyleSheet, ViewStyle, TouchableOpacity } from "react-native";
import Text, { TextProps } from "elements/Text";
import { Colors } from "configs";
import Theme from "style/Theme";

interface ButtonTextProps {
  title?: string;
  style?: ViewStyle;
  titleColor?: string;
  textProps?: TextProps;
  onPress?: () => void;
  borderColor?: string;
}

const ButtonText = memo(
  ({
    title,
    style,
    titleColor = Colors.DodgerBlue,
    onPress,
    borderColor,
    ...textProps
  }: ButtonTextProps) => {
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
        activeOpacity={0.54}
      >
        <Text type="H5" color={titleColor} {...textProps}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
);

export default ButtonText;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.White,
    ...Theme.center,
  },
});
