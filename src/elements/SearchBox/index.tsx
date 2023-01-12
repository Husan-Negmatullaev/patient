import React, { Dispatch, memo, SetStateAction } from "react";
import { View, StyleSheet, Image, TextInput, ViewStyle } from "react-native";
import Theme from "style/Theme";
import { Colors } from "configs";
import { ICON } from "images/Icon";

interface SearchBoxProps {
  value?: string;
  onChangeText?: (text: string) => void | Dispatch<SetStateAction<string>>;
  placeholder: string;
  borderColor?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  onSubmitEditing?: () => void;
  shadow?: boolean;
  autoFocus?: boolean;
}

const SearchBox = memo(
  ({
    value,
    onChangeText,
    onSubmitEditing,
    placeholder,
    borderColor,
    style,
    backgroundColor,
    shadow = true,
    ...props
  }: SearchBoxProps) => {
    return (
      <View
        style={[
          styles.container,
          style && style,
          shadow && Theme.shadow,
          { borderColor: borderColor ? borderColor : Colors.White },
        ]}
      >
        <Image source={ICON.search} />
        <TextInput
          {...props}
          placeholder={placeholder}
          placeholderTextColor={Colors.GrayBlue}
          style={styles.input}
          value={value}
          returnKeyType={"search"}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    );
  }
);

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    ...Theme.flexRow,
    minHeight: 48,
    backgroundColor: Colors.White,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  input: {
    fontSize: 13,
    lineHeight: 16,
    flex: 1,
    marginLeft: 16,
  },
});
