import React, { SetStateAction, Dispatch } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { Colors } from "configs";
import Theme from "style/Theme";
import { useFonts, Muli_600SemiBold } from "@expo-google-fonts/muli";
import Text from "elements/Text";

interface Props {
  value: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void | Dispatch<SetStateAction<string>>;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  onSelectionChange?: () => void;
  placeholder?: string;
  isShowIcon?: boolean;
  icon?: any;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  iconStyle?: ViewStyle;
  borderColor?: string;
  iconPress?: () => void;
  autoFocus?: boolean;
  backgroundColor?: string;
  iconLeft?: any;
  isShowIconLeft?: boolean;
  iconPressLeft?: () => void;
  multiline?: boolean;
  editable?: boolean;
}

export default ({
  value,
  placeholder,
  onChangeText,
  onSubmitEditing,
  onEndEditing,
  onSelectionChange,
  isShowIcon,
  icon,
  iconStyle,
  secureTextEntry,
  style,
  borderColor,
  backgroundColor = Colors.White,
  iconPress,
  isShowIconLeft,
  iconLeft,
  iconPressLeft,
  autoFocus,
  onFocus,
  onBlur,
  ...props
}: Props) => {
  let [fontsLoaded] = useFonts({
    Muli_600SemiBold,
  });
  if (!fontsLoaded) {
    return <View />;
  }

  let lineHeight;
  if (props.multiline) {
    lineHeight = 24;
  }
  let height;

  return (
    <View
      style={[
        styles.container,
        style,
        { borderColor: borderColor, backgroundColor: backgroundColor },
        props.multiline && styles.muli,
      ]}
    >
      {isShowIconLeft && !!iconLeft && (
        <TouchableOpacity
          style={styles.iconLeftView}
          onPress={iconPressLeft}
          disabled={!iconPressLeft}
        >
          {iconLeft}
        </TouchableOpacity>
      )}
      {props.editable ? (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          onSelectionChange={onSelectionChange}
          style={{
            flex: 1,
            fontSize: 15,
            lineHeight: lineHeight,
            fontFamily: "Muli_600SemiBold",
            height: "100%",
          }}
          secureTextEntry={secureTextEntry}
          editable={props.editable}
          placeholderTextColor={Colors.GrayBlue}
          autoFocus={autoFocus}
          {...props}
        />
      ) : (
        <Text size={15} lineHeight={24} semiBold style={{ flex: 1 }}>
          {value}
        </Text>
      )}
      {isShowIcon && !!icon && (
        <TouchableOpacity
          style={[styles.iconView, iconStyle]}
          onPress={iconPress}
          disabled={!iconPress}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: Colors.White,
    borderRadius: 8,
    borderWidth: 1,
    ...Theme.flexRow,
  },
  iconView: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 12,
    ...Theme.center,
  },
  iconLeftView: {
    width: 24,
    height: 24,
    ...Theme.center,
    marginRight: 16,
  },
  muli: {
    paddingBottom: 11,
  },
});
