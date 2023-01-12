import React, { memo, useCallback } from "react";
import { TouchableOpacity, StyleSheet, View, TextStyle } from "react-native";
import Text from "elements/Text";
import { Colors } from "configs";

interface Props {
  index: number;
  title: string;
  focus?: boolean;
  onPressTab: (index: number) => void;
  onLayout: (event: any) => void;
  onScrollTo: (event: any, isPress?: boolean) => void;
  labelStyle?: TextStyle;
}

const ScrollTabButton = memo(
  ({
    title,
    focus,
    onPressTab,
    index,
    onLayout,
    onScrollTo,
    labelStyle,
  }: Props) => {
    const onPress = useCallback(() => {
      onPressTab && onPressTab(index);
      onScrollTo && onScrollTo(index, true);
    }, [index, onPressTab, onScrollTo]);

    return (
      <TouchableOpacity
        activeOpacity={0.54}
        style={[styles.button]}
        {...{ onLayout, onPress }}
      >
        <Text
          color={focus ? Colors.DarkJungleGreen : Colors.GrayBlue}
          bold
          style={labelStyle && labelStyle}
          size={24}
          lineHeight={28}
        >
          {title}
        </Text>
        {focus && <View style={styles.underLine} />}
      </TouchableOpacity>
    );
  }
);

export default ScrollTabButton;

const styles = StyleSheet.create({
  button: {
    marginRight: 40,
    justifyContent: "center",
    borderRadius: 16,
    paddingTop: 8,
    paddingBottom: 10,
  },
  focus: {
    backgroundColor: Colors.TealBlue,
  },
  underLine: {
    width: 24,
    height: 2,
    backgroundColor: Colors.DarkJungleGreen,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
